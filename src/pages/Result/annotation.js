import React from "react";
import "./GO.scss";
import '../../scss/style.scss';
import axios from "axios";
// import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import { Divider, Button } from "antd";
import { env } from '../../env';
// import { data } from "./data";
// import { Card } from 'antd';
import test from '../Interactome/test.gif'
// import { pathogen } from "pages/Plant/pathogen";
const urlParams = new URLSearchParams(window.location.search);
const hspecies = 'human';
// const pspecies = urlParams.get("pathogen");
const hid = urlParams.get("hid");
// const pid = urlParams.get("pid");


export default class ANNOT extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hgo: [],
            hkegg: [],
            hlocal: [],
            hdrugs: [],
            hinter: [],
            isOpen: false,
            ishost:true,
            ispathogen:false
        };
        this.openModel = this.openModel.bind(this)
        this.closeModel = this.closeModel.bind(this)
    }
    openModel = () => this.setState({ isOpen: true });
    closeModel = () => this.setState({ isOpen: false });
   
    fetchAnnotations() {
        this.openModel()
        axios
            .get(
                `${env.BACKEND}/api/annotation/?species=${hspecies}&gene=${hid}`
            )
            .then((res) => {

                // console.log(res.data.hgo)
                this.setState({
                    hgo: res.data.hgo,
                    hkegg: res.data.hkegg,
                    hlocal: res.data.hlocal,
                    hdrugs: res.data.hdrugs,
                    hinter: res.data.hinter,
                })
                this.closeModel()

            })
    }


    componentDidMount() {

        this.fetchAnnotations();
    }

    render() { // console.log(this.state.pint)
        let geneontology;
        if (this.state.hgo && this.state.hgo.length !== 0) {
            geneontology = (
                <Table responsive className="kbl-table table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                            <th>Protein</th>
                            <th>Go ID</th>
                            <th>GO term</th>
                            <th>GO description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hgo.map((go, index) => (
                            <>
                                <tr key={index + 1}>
                                    <td>{go.gene}</td>
                                    <td>{go.term}</td>
                                    <td>{go.description}</td>
                                    <td>{go.definition}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </Table>)
        }
        else {
            geneontology = (
                <>
                    <h5>No Gene Ontology Found</h5>
                </>
            )
        }

        let hostkegg;
        if (this.state.hkegg && this.state.hkegg.length !== 0) {
            hostkegg = (
                <Table responsive className="kbl-table table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                            <th>Protein</th>
                            <th>KEGG Pathway</th>
                            <th>KEGG description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hkegg.map((go, index) => (
                            <>
                                <tr key={index + 1}>
                                    <td>{go.gene}</td>
                                    <td>{go.pathway}</td>
                                    <td>{go.description}</td>
                                </tr>
                            </>

                        ))}
                    </tbody>
                </Table>)
        }
        else {
            hostkegg = (
                <>
                    <h5>No Pathway Found</h5>
                </>
            )
        }


        let hostlocal;
        if (this.state.hlocal && this.state.hlocal.length !== 0) {
            hostlocal = (
                <Table responsive className="kbl-table table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                            <th>Protein</th>
                            <th>Localization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hlocal.map((go, index) => (
                            <>
                                <tr key={index + 1}>
                                    <td>{go.gene}</td>
                                    <td>{go.location}</td>
                                </tr>
                            </>

                        ))}
                    </tbody>
                </Table>)
        }
        else {
            hostlocal = (
                <>
                    <h5>No Subcellular Localization Found</h5>
                </>
            )
        }


        let hostdrugs;
        if (this.state.htf && this.state.htf.length !== 0) {
            hostdrugs = (
                <Table responsive className="kbl-table table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                            <th>Protein ID</th>
                            <th>Drug Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hdrugs.map((go, index) => (
                            <>
                                <tr key={index + 1}>
                                    <td>{go.protein_id}</td>
                                    <td>{go.drug_id}</td>
                                </tr>
                            </>

                        ))}
                    </tbody>
                </Table>)
        }
        else {
            hostdrugs = (
                <>
                    <h5>No drugs Found</h5>
                </>
            )
        }

        let hostinterpro;
        if (this.state.hint && this.state.hint.length !== 0) {
            hostinterpro = (
                <Table responsive className="kbl-table table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                            <th>Protein</th>
                            <th>Protein Length</th>
                            <th>Interpro ID</th>
                            <th>Source Database</th>
                            <th>Domian ID</th>
                            <th>Description</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hinter.map((go, index) => (
                            <>
                                <tr key={index + 1}>
                                    <td>{go['gene']}</td>
                                    <td>{go['length']}</td>
                                    <td>{go["interpro_id"]}</td>
                                    <td>{go["sourcedb"]}</td>
                                    <td>{go["domain"]}</td>
                                    <td className="desc">{go["domain_description"]}</td>
                                    <td>{go["score"]}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </Table>)
        }
        else {
            hostinterpro = (
                <>
                    <h5>No Functional Domain Found</h5>
                </>
            )
        }


        return (
            <div className="container">

                {this.state.isOpen && (

                    <div className="row justify-content-center">
                        <Divider />
                        <div className="col-md-6">

                            <h5 className="mb-3">Please wait fetching annotation from database</h5>
                            <img
                                src={test}
                                className="loading"
                                height="50px"
                                alt=""
                            ></img>
                        </div>
                    </div>
                )}
                {this.state.isOpen === false && (
                    <>
                        <Divider />
                        <div className="row align-content-center">
                            <h3>Functional Annotation of human protein: &nbsp;&nbsp;&nbsp; {hid}</h3>
                        </div>
                        <Divider />
 
                {this.state.ishost && (
                    <div className="row justify-content-center">
                            <h5>Host protein: &nbsp;&nbsp;&nbsp; {hid} </h5>
                            <Divider />
                            <h5>Gene Ontology</h5>
                            {geneontology}
                            <Divider />
                            <h5>KEGG Pathway</h5>
                            {hostkegg}
                            <Divider />
                            <h5>Subcellular Localization</h5>
                            {hostlocal}
                            <Divider />
                            <h5>Drug Targets</h5>
                            {hostdrugs}
                            <Divider />
                            <h5>Functional Domains</h5>
                            {hostinterpro}
                            <Divider />
                        </div>
                )}
                        
                    </>
                )}

            </div>
        )
    }
} 