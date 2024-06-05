import React from "react";
import { Divider, Button } from "antd";
import './Datasets.scss'
import { LinkOutlined } from "@ant-design/icons";
import { InfoCircleOutlined} from "@ant-design/icons";
import { Modal } from "react-bootstrap";

export default class Datasets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      ppiOpen: false,
    };
  
    this.ppiModalopen=this.ppiModalopen.bind(this);
    this.ppiModalclose=this.ppiModalclose.bind(this);
}
    ppiModalopen = () => this.setState({ ppiOpen: true });
    ppiModalclose = () => this.setState({ ppiOpen: false });

    render() {
        return (
            <div className="container">
                <Divider />
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h5><b>Information of the Protein Datasets</b></h5>
                    <Divider />
                    <div className="col-md-10">
                        <p className="infod">
                            A brief description of all the proteomes used in HuPoxNET is available on this page. 
                            From here, the users can directly go to the original source of the proteome and 
                            download the protein sequences of the species/strain of interest.
                        </p>

                        <Divider />
                        
                        <p className="infod">
                            <b><i>Homo sapiens</i></b>
                            <br/>
                            Link to human dataset: 
                            <a 
                            href="https://www.uniprot.org/uniprotkb?query=Human&facets=model_organism%3A9606%2Creviewed%3Atrue" rel="noreferrer" target="_blank" > UniProt (Swiss-Prot) <sup> <i> <LinkOutlined /></i></sup>
                            </a>
                        </p>

                        <Divider/>

                        {/* <table>
                          <tr>
                              <td>
                                  <p className="infod">
                                      <b><i>Monkeypox virus</i> (MPXV) strains datasets</b>
                                      <br/>
                                      Link to <i>DQ011157</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/DQ011157/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>JX878409</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878409/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>JX878425</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878425/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>JX878428</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878428/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>KJ642615</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/KJ642615/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>MN648051</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MN648051/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>MN702444</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MN702444/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>MT903340</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903340/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>MT903342</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903342/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>MT903343</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903343/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                      Link to <i>MT903344</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903344/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                      <br/>
                                  </p>
                              </td>
                              <td>
                                  <p className="infod">
                                    <br/>
                                  Link to <i>MT903345</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903345/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>NC_003310</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/NC_003310/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>ON563414</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON563414/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>ON736420</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON736420/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>ON745215</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON745215/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>ON872184</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON872184/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>OP019275</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP019275/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>OP022170</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP022170/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>OP160532</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP160532/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>OP215228</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP215228/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  <br/>
                                  Link to <i>OP245306</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP245306/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>
                                  </p>
                              </td>
                          </tr>
                      </table> */}

                      
                        <Modal show={this.state.ppiOpen} onHide={this.ppiModalclose}>
                          <Modal.Header closeButton></Modal.Header>
                          <Modal.Title>
                            <h5 className="my-2 text-center"> <b>About MPXV datasets </b></h5>
                          </Modal.Title>
                          <Modal.Body>
                            <p className="info">
                              The protein datasets of MPXV were obtained from NCBI. The dataset of each strain 
                              can be downloaded from NCBI website. The table below also contain the number of 
                              pathogen proteins, host proteins and protein-protein interactions for each strain. 
                              These interactions were filtered based on BLAST alignment parameters: Identity (50%), 
                              Coverage (50%), and <i>e</i>-value (1<i>e</i>-05).
                            </p>

                          </Modal.Body>
                          <Modal.Footer>
                            <Button type="danger" shape="round" onClick={this.ppiModalclose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>



                        <p className="infod">
                          <b><i>Monkeypox virus</i> (MPXV) strains datasets </b>
                          <InfoCircleOutlined onClick={this.ppiModalopen} />
                        </p>


                        <div style={{ display: 'flex' }}>
                          <div style={{ flex: 1 }}>
                            <table border="1" style={{ borderCollapse: 'separate', borderSpacing: '10px' }}>
                              <tr>
                                <th style={{ padding: '10px' }}>NCBI Accession</th>
                                <th style={{ padding: '10px' }}>Link</th>
                                <th style={{ padding: '10px' }}>Interactions</th>
                                <th style={{ padding: '10px' }}>Host</th>
                                <th style={{ padding: '10px' }}>Pathogen</th>                        
                              </tr>
                              <tr>
                                <td>DQ011157</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/DQ011157/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>105,068</td>
                                <td>8,117</td>
                                <td>121</td>
                              </tr>
                              <tr>
                                <td>JX878409</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878409/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>100,274</td>
                                <td>8,018</td>
                                <td>121</td>
                              </tr>
                              <tr>
                                <td>JX878425</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878425/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>99,132</td>
                                <td>7,990</td>
                                <td>120</td>
                              </tr>
                              <tr>
                                <td>JX878428</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878428/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>99,479</td>
                                <td>8,008</td>
                                <td>121</td>
                              </tr>
                              <tr>
                                <td>KJ642615</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/KJ642615/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>90,200</td>
                                <td>8,075</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>MN648051</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MN648051/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>97,943</td>
                                <td>8,088</td>
                                <td>126</td>
                              </tr>
                              <tr>
                                <td>MN702444</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MN702444/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>87,643</td>
                                <td>7,964</td>
                                <td>107</td>
                              </tr>
                              <tr>
                                <td>MT903340</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903340/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>86,555</td>
                                <td>7,968</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>MT903342</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903342/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>86,555</td>
                                <td>7,968</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>MT903343</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903343/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>86,555</td>
                                <td>7,968</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>MT903344</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903344/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>86,555</td>
                                <td>7,968</td>
                                <td>110</td>
                              </tr>
                            </table>
                          </div>
                          <div style={{ flex: 1, borderLeft: '1px solid #000' }}>
                            <table border="1" style={{ borderCollapse: 'separate', borderSpacing: '10px' }}>
                              <tr>
                                <th style={{ padding: '10px' }}>NCBI Accession</th>
                                <th style={{ padding: '10px' }}>Link</th>
                                <th style={{ padding: '10px' }}>Interactions</th>
                                <th style={{ padding: '10px' }}>Host</th>
                                <th style={{ padding: '10px' }}>Pathogen</th>
                              </tr>
                              <tr>
                                <td>MT903345</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903345/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>86,555</td>
                                <td>7,968</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>NC_003310</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/NC_003310/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>98,827</td>
                                <td>7,998</td>
                                <td>121</td>
                              </tr>
                              <tr>
                                <td>ON563414</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON563414/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>93,265</td>
                                <td>8,076</td>
                                <td>117</td>
                              </tr>
                              <tr>
                                <td>ON736420</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON736420/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>96,960</td>
                                <td>8,081</td>
                                <td>127</td>
                              </tr>
                              <tr>
                                <td>ON745215</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON745215/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>93,265</td>
                                <td>8,076</td>
                                <td>117</td>
                              </tr>
                              <tr>
                                <td>ON872184</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON872184/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>73,414</td>
                                <td>7,900</td>
                                <td>92</td>
                              </tr>
                              <tr>
                                <td>OP019275</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP019275/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>85,374</td>
                                <td>7,976</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>OP022170</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP022170/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>85,374</td>
                                <td>7,976</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>OP160532</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP160532/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>85,374</td>
                                <td>7,976</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>OP215228</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP215228/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>85,374</td>
                                <td>7,976</td>
                                <td>110</td>
                              </tr>
                              <tr>
                                <td>OP245306</td>
                                <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP245306/' rel="noreferrer" target="_blank">Click here</a></td>
                                <td>78,364</td>
                                <td>7,874</td>
                                <td>106</td>
                              </tr>
                            </table>
                          </div>
                        </div>

                        
                        {/* <table border="1" style={{ borderCollapse: 'separate', borderSpacing: '10px' }} >
                          <tr>
                            <th style={{ padding: '10px' }}>NCBI Accession</th>
                            <th style={{ padding: '10px' }}>Link</th>
                            <th style={{ padding: '10px' }}># Pathogen proteins</th>
                            <th style={{ padding: '10px' }}># Host proteins</th>
                            <th style={{ padding: '10px' }}># Interactions</th>
                          </tr>
                          <tr>
                            <td>DQ011157</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/DQ011157/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>JX878409</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878409/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>JX878425</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878425/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>JX878428</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878428/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>KJ642615</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/KJ642615/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>MN648051</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MN648051/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>MN702444</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MN702444/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>MT903340</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903340/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>MT903342</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903342/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>MT903343</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903343/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>MT903344</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903344/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>MT903345</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903345/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>NC_003310</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/NC_003310/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>ON563414</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON563414/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>ON736420</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON736420/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>ON745215</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON745215/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>ON872184</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/ON872184/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>OP019275</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP019275/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>OP022170</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP022170/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>OP160532</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP160532/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>OP215228</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP215228/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td>p</td>
                            <td>h</td>
                            <td>i</td>
                          </tr>
                          <tr>
                            <td>OP245306</td>
                            <td><a href='https://www.ncbi.nlm.nih.gov/nuccore/OP245306/' rel="noreferrer" target="_blank">Click here</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </table> */}
                       
                    </div>
                    <Divider />
                </div>
                <div className="row footer flex-lg-row justify-content-center g-2">
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
        )
    }
}