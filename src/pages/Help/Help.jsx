import React from "react";
import { Divider } from "antd";
import './Help.scss'
import { LinkOutlined } from "@ant-design/icons";
export default class Help extends React.Component {


    render() {
        return (
            <div className="container">
                {/* <Divider /> */}
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h4><b>User Guide</b></h4>
                    <Divider />
                    <p className="infot">
                        Introduction
                    </p>
                    <p className="infoh">
                        This is the tutorial page of HuPoxNET and will guide you through the database and its applicability. In case of any questions, contact 
                        <a href= "mailto:rkaundal@usu.edu"> bioinfo@kaabil.net</a>.
                        The figure below shows the 'Homepage' of HuPoxNET, from where the user can navigate to the various functional annotations of 
                        the database, interactome prediction tool, and access the available datasets.
                    </p>
                    <img src="images/home.png" className="imk" alt="" />
                    
                    <Divider />

                    <p className="infot">
                        Human and Monkeypox Virus datasets
                    </p>
                    <p className="infoh">
                        In this database, we implemented 22 strains of MPXV that were obtained from NCBI, while that of humans was obtained from UniProt. The 
                        respective human and MPXV proteomes can be found on <a href="datasets"> Datasets <sup> <i> <LinkOutlined /></i></sup></a> page. 
                        The users can download the required protein sequences from the publicly available resources.
                    </p>
                    <img src="images/datasets.png" className="imk" alt="" />

                    <Divider />

                    <p className="infot">
                        Interactome Prediction
                    </p>
                    <p className="infoh">
                        The <a href="interactome"> Interactomics <sup> <i> <LinkOutlined /></i></sup></a> tool allows the user to find the interactions 
                        between <i>Homo sapiens</i> and any strain of <i>Monkeypox virus</i> proteins. In this module, the user has the option to select 
                        the computational model of choice, standard protein-protein interaction database(s) that will be used in the prediction process, 
                        and define BLASTp alignment filters to determine homolog proteins. By default, two databases (HPIDB and MINT) have been selected. 
                        All the available databases can be selected at once using the option "Check All".
                        <br/>
                        The default values have been set for alignment filtering options (<i>e</i>-value, % identity, and % coverage) for both host and 
                        pathogen proteins. The tool also accepts user-provided values for these parameters.
                        <br/>
                        This tool also enable the users to provide protein accessions of human or MPXV proteins, instead of "Whole Proteome", for 
                        interaction prediction.
                    </p>
                    <img src="images/interactome.png" className="imk" alt="" />

                    <Divider />

                    <p className="infot">
                        Interactome Output
                    </p>
                    <p className="infoh">
                        On job submission, a unique identifier is assigned to it, which can be used by the user to check the status of the job (queried, 
                        running, or done). After completion of job, the results will be displayed in an enriched table (shown below). The resulting 
                        table can be downloaded in csv format using <b>"Download CSV"</b> button. To see the respective host or pathogen protein 
                        interactor from the selected databases, the user can click on the protein ID in "InteractorA" and "InteractorB" columns, which 
                        will take the user to the respective external resources such as NCBI, UniProt, etc. This provides the user with additional 
                        information of the specific protein involved in the interaction. Information such as alignment filtering parameters of host and 
                        pathogen, number of host proteins, pathogen proteins, and interactions is also displayed. Further, the user can click 
                        <b>"Visualize Network"</b> button to visualize the network of the predicted interactome.
                    </p>
                    <img src="images/result.png" className="imk" alt="" />

                    <Divider />

                    <p className="infot">
                        Network Visualization
                    </p>
                    <p className="infoh">
                    HuPoxNET provides an efficient network visualization platform, implemented using Cytoscape. This plugin was chosen for its performance 
                    at displaying large networks efficiently. This page includes the network of predicted interactome, interactions in tabular format, and 
                    edge information. By clicking on the specific protein in the interaction table, the user can visualize different features for each node 
                    (species, description, degree, etc.), and identify hub nodes (nodes with a higher number of edges). This is useful as hub nodes have 
                    been found crucial in several infectious disease pathways. A user is not limited to the network analysis that is provided through our 
                    database, the resulted network can be further examined in any network analyzer that could handle JSON or tabular network files.
                    <br/>
                    In the network, the color of the edges correspond to the respective standard database(s) selected for interactome prediction. The 
                    edges from each database are represented with different colors as shown below the network. The green nodes represent host proteins 
                    while the red nodes are pathogen proteins. The user can click on any node (one at a time) in the network to see the respective 
                    description of the protein. Furthermore, the user can also obtain information about the "edge" by selecting a particular edge in the 
                    network. To analyze the network within the database, the user can select a particular node and move it around. The network can then be 
                    saved in PNG format.
                    </p>
                    <img src="images/network.png" className="imk" alt="" />
                </div>
                <br/>
                <div className="row  flex-lg-row justify-content-center g-2">
          <Divider />
          <p>
            &copy; 2023 |&nbsp;{" "}
            <a
              href="http://kaabil.net"
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
        )
    }
}