import React from "react";
import "./GO.scss";
import '../../scss/style.scss';
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Divider, Button } from "antd";
import { env } from '../../env';
import test from '../Interactome/test.gif'
const urlParams = new URLSearchParams(window.location.search);
const hspecies = 'human';
const hid = urlParams.get("hid");


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
                                    <td>
                                        <a
                                        href={`https://www.uniprot.org/uniprotkb/${go.gene}/entry`}
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        {go.gene}
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={`http://amigo.geneontology.org/amigo/term/${go.term}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {go.term}
                                        </a>
                                    </td>
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
                                    <td>
                                        <a
                                        href={`https://www.uniprot.org/uniprotkb/${go.gene}/entry`}
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        {go.gene}
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            href={`https://www.kegg.jp/pathway/${go.pathway}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {go.pathway}
                                        </a>
                                    </td>
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
                                    <td>
                                        <a
                                        href={`https://www.uniprot.org/uniprotkb/${go.gene}/entry`}
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        {go.gene}
                                        </a>
                                    </td>
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
        if (this.state.hdrugs && this.state.hdrugs.length !== 0) {
            hostdrugs = (
                <Table responsive className="kbl-table table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                        <th>Human Protein</th>
                        <th>DrugBank</th>
                        <th>Drug (common name)</th>
                        <th>Gene name</th>
                        <th>GenBank</th>
                        <th>ChEMBL ID</th>
                        <th>ChEMBL Description</th>
                        <th>Protein type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hdrugs.map((result, index) => (
                            <>
                            <tr key={index + 1}>
                                <td>
                                    <a
                                        href={`https://www.uniprot.org/uniprotkb/${result["protein_id"]}/entry`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {result["protein_id"]}
                                    </a>
                                </td>

                                <td>
                                    <a
                                        href={`https://go.drugbank.com/drugs/${result["drug_id"]}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {result["drug_id"]}
                                    </a>
                                </td>

                                <td>{result["common_name"]}</td>

                                <td>
                                    <a href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${result['gene_name']}`} target="_blank"
                                        rel="noreferrer">
                                        {result["gene_name"]}
                                    </a>
                                </td>

                                <td>
                                    <a href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${result['genbank_id']}`} target="_blank"
                                            rel="noreferrer">
                                    {result["genbank_id"]}
                                    </a>
                                </td>

                                <td>
                                    <a href={`https://www.ebi.ac.uk/chembl/compound_report_card/${result['ChEMBLID']}`} target="_blank"
                                            rel="noreferrer">
                                    {result["ChEMBLID"]}
                                    </a>
                                </td>

                                <td>{result["ChEMBL_Name"]}</td>

                                <td>{result["ProteinType"]}</td>
                            </tr>
                        </>

                        ))}
                    </tbody>
                </Table>)
        }
        else {
            hostdrugs = (
                <>
                    <h5>No drugs found</h5>
                </>
            )
        }


        let hostinterpro;
        if (this.state.hinter && this.state.hinter.length !== 0) {
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
                                    <td>
                                        <a
                                        href={`https://www.uniprot.org/uniprotkb/${go.gene}/entry`}
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        {go.gene}
                                        </a>
                                    </td>

                                    <td>{go['length']}</td>

                                    <td>
                                        <a href={`https://www.ebi.ac.uk/interpro/entry/InterPro/${go.interpro_id}/`} target="_blank"
                                                rel="noreferrer">
                                        {go.interpro_id}
                                        </a>
                                    </td>
                                    
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
                    <h5>No functional domain found</h5>
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
                            <h2>Functional Annotation of human protein: &nbsp; {hid}</h2>
                        </div>

                        <Divider />
 
                {this.state.ishost && (
                    
                    <div className="row justify-content-center">

                        <div className="row justify-content-center">
                            <a className="col-md-2" href="#go"><Button type="default" shape="round" size="large">
                                <b>Gene Ontology</b>
                                </Button>
                            </a>
                        
                            <a className="col-md-2" href="#kegg"><Button type="default" shape="round" size="large">
                                <b>KEGG Pathways</b>
                                </Button>
                            </a>
                        
                            <a className="col-md-2" href="#localization"><Button type="default" shape="round" size="large">
                                <b>Localization</b>
                                </Button>
                            </a>

                            <a  className="col-md-2" href="#drugs"><Button type="default" shape="round" size="large">
                                <b>Drug Targets</b>
                                </Button>
                            </a>

                            <a  className="col-md-2" href="#interpro"><Button type="default" shape="round" size="large">
                                <b>Functional Domains</b>
                                </Button>
                            </a>
                        </div>
                        <Divider />


                            <div id="go" className="row justify-content-center annotHeader my-2">
                                <h5><b>Gene Ontology</b></h5>
                            </div>
                            {geneontology}

                            <Divider />
                            
                            <div id="kegg" className="row justify-content-center annotHeader my-2">
                                <h5><b>KEGG Pathways</b></h5>
                            </div>
                            {hostkegg}

                            <Divider />

                            <div id="localization" className="row justify-content-center annotHeader my-2">
                                <h5><b>Subcellular Localization</b></h5>
                            </div>
                            {hostlocal}

                            <Divider />

                            <div id="drugs" className="row justify-content-center annotHeader my-2">
                                <h5><b>Drug Targets</b></h5>
                            </div>
                            {hostdrugs}
                            
                            <Divider />

                            <div id="interpro" className="row justify-content-center annotHeader my-2">
                                <h5><b>Functional Domains</b></h5>
                            </div>
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