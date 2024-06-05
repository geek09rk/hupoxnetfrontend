import React from "react";
import "./Interpro.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import { Divider } from "antd";
import { env } from "../../env";
const urlParams = new URLSearchParams(window.location.search);

const species = urlParams.get("id");

export default class GO extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      List: [],
      offset: 0,
      perPage: 25,
      currentPage: 0,
      pageCount: 20,
      total: 0,
      searchQuery: '', // Step 1: Add search query state
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this); // Add handleSearch method
  }


  handlePageClick = (e) => {
    const selectedPage = e.selected;

    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.fetchResults();
      }
    );
  };

  handleSearch(query) {
    this.setState(
      {
        searchQuery: query,
        currentPage: 0, // Reset to the first page when searching
      },
      () => {
        this.fetchResults();
      }
    );
  }

  fetchResults() {
    const { searchQuery, currentPage, perPage } = this.state;

    axios
      .get(
        `${env.BACKEND}/api/interpro/?species=${species}&page=${currentPage}&size=${perPage}`
      )
      .then((res) => {
        const List = res.data.data;
        const dl = Math.ceil(res.data.total / perPage);

        // Filter the results based on the searchQuery
        const filteredList = List.filter((result) => {
          return Object.values(result).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          );
        });

        this.setState({
          List: filteredList,
          pageCount: dl,
          total: parseInt(res.data.total),
        });
      });
  }
 
  componentDidMount() {
    this.fetchResults();
  }


  render() {

    const { searchQuery, total, offset, List } = this.state;

    // // Filter the list based on the search query
    // const filteredList = this.state.List.filter(result => {
    //   const query = this.state.searchQuery.toLowerCase();
    //   return (
    //     result.gene.toLowerCase().includes(query) ||
    //     result.interpro_id.toLowerCase().includes(query) ||
    //     result.sourcedb.toLowerCase().includes(query) ||
    //     result.domain.toLowerCase().includes(query) ||
    //     result.domain_description.toLowerCase().includes(query)
    //   );
    // });

    // let resultMessage;
    // if (this.state.searchQuery && filteredList.length === 0) {
    //   resultMessage = 'Queried item not found, try again.';
    // }

    
    let spp='';
    if (species !== 'human'){
      spp=`MPXV Strain ${species}`
    }
    else {
      spp=`Human`
    }

    // Check if there are no results and display a message
    if (total === 0) {
      return (
        <div className="container">
          <h5>No results found. Please try again.</h5>
        </div>
      );
    }
    
    return (
      <div className="container">
        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <h5><b> {spp}: Protein Functional Domains </b></h5>
          <Divider />
        </div>
        <div className="row flex-lg-row align-items-center g-2 my-2">
          <h5>
            {" "}
            Showing {this.state.offset + 1} to {this.state.offset + 25} of {" "}
            {this.state.total} Domains
          </h5>
        </div>

        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search example: IPR014048, Pfam"
            value={searchQuery}
            onChange={(e) => this.handleSearch(e.target.value)}
          />
          </div>
        </div>

        {/* {resultMessage && <p>{resultMessage}</p>} */}

        <Table responsive className="go-table table-borderless">
          <thead className="go-thead">
            <tr>
              <th>Protein ID</th>
              <th>Protein Length</th>
              <th>Interpro ID</th>
              <th>Source Database</th>
              <th>Domian ID</th>
              <th>Description</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((result, index) => (
              <tr key={index + 1}>
                {(() => {
                  if (species === "human") {
                    return (
                      <td>
                        <a
                          href={`https://www.uniprot.org/uniprotkb/${result["gene"]}/entry`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {result["gene"]}
                        </a>
                      </td>
                    );
                  } else {
                    return (
                      <td>
                        <a
                          href={`https://www.ncbi.nlm.nih.gov/protein/${result["gene"]}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {result["gene"]}
                        </a>
                      </td>
                    );
                  }
                })()}

                <td>{result["length"]}</td>
                <td>
                  <a href={`https://www.ebi.ac.uk/interpro/entry/InterPro/${result['interpro_id']}/`} target="_blank"
                          rel="noreferrer">
                  {result["interpro_id"]}
                  </a>
                </td>
                <td>{result["sourcedb"]}</td>
                <td>{result["domain"]}</td>
                <td className="desc">{result["domain_description"]}</td>

                <td>{result["score"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ReactPaginate
          forcePage={this.state.currentPage}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          ellipsisItem={null}
        />

        <div className="row flex-lg-row justify-content-center g-2 ">
          <Divider />
          <p>
            &copy; 2023 |&nbsp;{" "}
            <a
              href="https://kaabil.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaundal Artificial Intelligence and Advanced Bioinformatics Lab
            </a>
            &nbsp; |&nbsp;{" "}
            <a href="https://usu.edu" target="_blank" rel="noopener noreferrer">
              Utah State University
            </a>
          </p>
        </div>
      </div>
    );
  }
}
