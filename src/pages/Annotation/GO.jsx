import React from "react";
import "./GO.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import { Divider, Button } from "antd";
import { env } from '../../env';
import { InfoCircleOutlined } from "@ant-design/icons";
import { Modal } from "react-bootstrap";

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
      searchQuery: '', // Add searchQuery state
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this); // Add handleSearch method
    this.ppiModalopen=this.ppiModalopen.bind(this);
    this.ppiModalclose=this.ppiModalclose.bind(this);
  }

  ppiModalopen = () => this.setState({ ppiOpen: true });
  ppiModalclose = () => this.setState({ ppiOpen: false });

  handlePageClick(e) {
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
  }

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
        `${env.BACKEND}/api/go/?species=${species}&page=${currentPage}&size=${perPage}`
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

    let spp = '';
    if (species !== 'human') {
      spp = `MPXV Strain ${species}`;
    } else {
      spp = `Human`;
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

        <Modal show={this.state.ppiOpen} onHide={this.ppiModalclose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title>
            <h5 className="my-2 text-center"> <b> Information on "Evidence code" </b></h5>
          </Modal.Title>
          <Modal.Body>
            <p className="info">
              The "Evidence Code" on this page are as described:
            </p>

            <p className="info">
              IC: Inferred by Curator
            </p>

            <p className="info">
              IDA: Inferred from Direct Assay
            </p>

            <p className="info">
              IEA: Inferred from Electronic Annotation
            </p>

            <p className="info">
              IEP: Inferred from Expression Pattern
            </p>

            <p className="info">
              IGC: Inferred from Genomic Context
            </p>

            <p className="info">
              IGI: Inferred from Genetic Interaction
            </p>

            <p className="info">
              IMP: Inferred from Mutant Phenotype
            </p>

            <p className="info">
              IPI: Inferred from Physical Interaction
            </p>

            <p className="info">
              ISA: Inferred from Sequence Alignment
            </p>

            <p className="info">
              ISM: Inferred from Sequence Model
            </p>

            <p className="info">
              ISO: Inferred from Sequence Orthology
            </p>

            <p className="info">
              ISS: Inferred from Sequence or structural Similarity
            </p>

            <p className="info">
              NAS: Non-traceable Author Statement
            </p>

            <p className="info">
              ND: No Biological Data Available
            </p>

            <p className="info">
              RCA: Reviewed Computational Analysis
            </p>

            <p className="info">
              TAS: Traceable Author Statement
            </p>

            {/* <hr></hr> */}

          </Modal.Body>
          <Modal.Footer>
            <Button type="danger" shape="round" onClick={this.ppiModalclose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <h5>
            <b> {spp}: Gene Ontology </b>
            <InfoCircleOutlined onClick={this.ppiModalopen} />
          </h5>

          <Divider />
        </div>

        <div className="row flex-lg-row align-items-center g-2 my-2">
          <h5>
            {" "}
            Showing {this.state.offset + 1} to {this.state.offset + 25} of {" "}
            {this.state.total} GO Terms
          </h5>
        </div>

        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <div className="col-md-4">
        <input
          className="form-control"
          type="text"
          placeholder="Search example: GO:0005747, IEA"
          value={searchQuery}
          onChange={(e) => this.handleSearch(e.target.value)}
        />
         </div>
        </div>

        <Table responsive className="go-table table-borderless">
          <thead className="go-thead">
            <tr>
              <th>Protein ID</th>
              <th>GO Accession</th>
              <th>Term</th>
              <th>Definition</th>
              <th>Evidence Code</th>
              <th>Ontology</th>
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
                <td>
                  <a
                    href={`http://amigo.geneontology.org/amigo/term/${result["term"]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {result["term"]}
                  </a>
                </td>
                <td className="desc">{result["description"]}</td>

                <td className="desc2">{result["definition"]}</td>
                <td>{result["evidence"]}</td>
                <td>{result["ontology"]}</td>
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
