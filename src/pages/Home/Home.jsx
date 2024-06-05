import React from "react";
import { env } from '../../env';
import { Divider} from "antd";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../scss/components/buttons.scss";
import "./Home.scss";
import CookieConsent from "react-cookie-consent";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });
  render() {
    return (
      <div className="container">
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <div className="col-md-9">
            {/* <Divider /> */}
            <div className="row flex-lg-row justify-content-center g-2 my-2">
              <div className="col-md-4">
                <div className="card cardd">
                  <h5 className="heading"> Host Species </h5>
                  <p className="heading2">
                    <b><i> Homo sapiens </i></b>
                    <hr className="line"></hr>
                  </p>
                  <p className="heading3"> <b>Proteins</b>: 20,299 (Swiss-Prot)</p>
                </div>

                {/* <div className="card cardd mt-4">
                  <h5 className="heading">Pathogen Species</h5>
                  <p className="heading2">
                    <i>Monkeypox virus</i> strains
                    <hr className="line"></hr>
                  </p>
                  <ul className="list list-inline ">
                  <p className="heading3"> DQ011157: 191 </p>
                  <p className="heading3"> JX878409: 187 </p>
                  <p className="heading3"> JX878425: 186 </p>
                  <p className="heading3"> JX878428: 187 </p>
                  <p className="heading3"> KJ642615: 172 </p>
                  <p className="heading3"> MN648051: 208 </p>
                  <p className="heading3"> MN702444: 170 </p>
                  <p className="heading3"> MT903340: 177 </p>
                  <p className="heading3"> MT903342: 177 </p>
                  <p className="heading3"> MT903343: 177 </p>
                  <p className="heading3"> MT903344: 177 </p>
                  <p className="heading3"> MT903345: 177 </p>
                  <p className="heading3"> NC_003310: 187 </p>
                  <p className="heading3"> ON563414: 186 </p>
                  <p className="heading3"> ON736420: 209 </p>
                  <p className="heading3"> ON745215: 186 </p>
                  <p className="heading3"> ON872184: 142 </p>
                  <p className="heading3"> OP019275: 175 </p>
                  <p className="heading3"> OP022170: 175 </p>
                  <p className="heading3"> OP160532: 175 </p>
                  <p className="heading3"> OP215228: 175 </p>
                  <p className="heading3"> OP245306: 171 </p> */}
                  
                  {/* <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/DQ011157/'> DQ011157 </a>: 191 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878409/'> JX878409 </a>: 187 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878425/'> JX878425 </a>: 186 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/JX878428/'> JX878428 </a>: 187 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/KJ642615/'> KJ642615 </a>: 172 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MN648051/'> MN648051 </a>: 208 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MN702444/'> MN702444 </a>: 170 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903340/'> MT903340 </a>: 177 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903342/'> MT903342 </a>: 177 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903343/'> MT903343 </a>: 177 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903344/'> MT903344 </a>: 177 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/MT903345/'> MT903345 </a>: 177 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/NC_003310/'> NC_003310 </a>: 187 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON563414/'> ON563414 </a>: 186 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON736420/'> ON736420 </a>: 209 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON745215/'> ON745215 </a>: 186 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/ON872184/'> ON872184 </a>: 142 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP019275/'> OP019275 </a>: 175 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP022170/'> OP022170 </a>: 175 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP160532/'> OP160532 </a>: 175 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP215228/'> OP215228 </a>: 175 </p>
                  <p className="heading3"> <a href='https://www.ncbi.nlm.nih.gov/nuccore/OP245306/'> OP245306 </a>: 171 </p> */}
                  {/* </ul>
                </div>
              </div> */}


              <div className="card cardd mt-4">
                  <h5 className="heading">Pathogen Species</h5>
                  <p className="heading2">
                      <b><i>Monkeypox virus</i> strains</b>
                      <h6>(Number of proteins)</h6>
                      <hr className="line"></hr>
                  </p>
                  <div className="row"> 
                      <div className="col-md-6 ps-4">
                          <ul className="list2 list-inline ">
                              <p className="heading4"> <b>DQ011157</b>: 191 </p>
                              <p className="heading4"> <b>JX878409</b>: 187 </p>
                              <p className="heading4"> <b>JX878425</b>: 186 </p>
                              <p className="heading4"> <b>JX878428</b>: 187 </p>
                              <p className="heading4"> <b>KJ642615</b>: 172 </p>
                              <p className="heading4"> <b>MN648051</b>: 208 </p>
                              <p className="heading4"> <b>MN702444</b>: 170 </p>
                              <p className="heading4"> <b>MT903340</b>: 177 </p>
                              <p className="heading4"> <b>MT903342</b>: 177 </p>
                              <p className="heading4"> <b>MT903343</b>: 177 </p>
                              <p className="heading4"> <b>MT903344</b>: 177 </p>
                          </ul>
                      </div>
                      <div className="col-md-5 me-2">
                          <ul className="list2 list-inline ">                              
                              <p className="heading4"> <b>MT903345</b>: 177 </p>
                              <p className="heading4"> <b>NC003310</b>: 187 </p>
                              <p className="heading4"> <b>ON563414</b>: 186 </p>
                              <p className="heading4"> <b>ON736420</b>: 209 </p>
                              <p className="heading4"> <b>ON745215</b>: 186 </p>
                              <p className="heading4"> <b>ON872184</b>: 142 </p>
                              <p className="heading4"> <b>OP019275</b>: 175 </p>
                              <p className="heading4"> <b>OP022170</b>: 175 </p>
                              <p className="heading4"> <b>OP160532</b>: 175 </p>
                              <p className="heading4"> <b>OP215228</b>: 175 </p>
                              <p className="heading4"> <b>OP245306</b>: 171 </p>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>



              
              
              <div className="col-md-7 infodiv">
                <div className='row title'>
                HuPoxNET: A database for Human-Monkeypox virus interactome
                {/* <div className='heading3'>
                <b>HuPoxNET: A database for Human-Monkeypox virus interactome</b> */}
                </div>
                <Divider />

                <p className="info">
                Monkeypox disease is a rare viral illness caused by the monkeypox virus (MPXV). Originally found 
                in central and western Africa, the virus can infect both animals and humans. The disease is caused by the monkeypox virus, 
                primarily transmitted from animals to humans through direct contact with infected animals or their fluids, and also through contaminated 
                objects. Monkeypox virus, a Poxviridae family virus belonging to the genus Orthopoxvirus, is a dsDNA virus with slight pleomorphic characteristics 
                and possess a dumbbell-shaped core with lateral bodies.
                </p>
                
                <p className="info">
                MPXV can be transmitted in several ways, all of which involve direct contact with the infected organism (human or animal). Animal to 
                human transmission of monkeypox can be considered as primary mode of transmission, which can be due to the direct exposure to infected 
                animals via bites or scratches, cooking and consumption of infected animals, and any contact with cutaneous or mucosal lesions. Although 
                human to human (secondary transmission) mode of transmission is less common than primary transmission, it primarily involves respiratory 
                droplets in close contact or direct contact with cutaneous lesions of an infected person. According to the World Health Organization (WHO), transmission 
                can be attributed to close contact with infected individuals; however, the sexual mode of transmission of this disease is unknown.
                </p>

                <p className="info">
                Protein-protein interactions between host and pathogen play a crucial role in the understanding of infection mechanism and the subsequent 
                host cell immune response. Therefore, to gain deeper insights into the disease infection mechanism of MPXV in humans, this database 
                implements computational models to decipher genome-scale protein-protein interactions in human-monkeypox virus pathosystem.
                </p>
                
                {/* <a href={`${env.BASE_URL}/interactome`} target="_blank"
                  rel="noopener noreferrer">
                  <Button type="primary" shape="round">
                    Search Interactome
                  </Button>
                </a>
                <a href={`${env.BASE_URL}/search`} target="_blank"
                  rel="noopener noreferrer"><Button className="mx-4" type="primary" shape="round">
                    Advance Search Module
                  </Button>
                </a> */}
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mt-4">
            <div className="card cardd">
              <h5 className="heading"> Functional Annotations </h5>
              <p className="heading2">
                <b><i> Homo sapiens </i></b>
                <hr className="line"></hr>
              </p>
              <ul className="list list-inline ">
                <li>
                  <a className="linked" href={`${env.BASE_URL}/kegg/?id=human`}> KEGG Pathways </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/go/?id=human`}> Gene Ontology </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/interpro/?id=human`}> Functional Domains{" "} </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/local/?id=human`}> Subcellular Localization{" "} </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/drugs/?id=human`}> Drug Targets{" "} </a>
                </li>
              </ul>
             

              <hr></hr>


              <p className="heading2">
                <b><i> Monkeypox virus </i></b>
                <hr className="line"></hr>
              </p>

              <ul className="list list-inline ">
                <p className="heading2"> Gene Ontology </p>
                <Dropdown>
                  <Dropdown.Toggle className="kbl-btn" id="dropdown-basic"> Select MPXV strain </Dropdown.Toggle>
                  <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=DQ011157`}> DQ011157 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=JX878409`}> JX878409 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=JX878425`}> JX878425 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=JX878428`}> JX878428 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=KJ642615`}> KJ642615 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MN648051`}> MN648051 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MN702444`}> MN702444 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MT903340`}> MT903340 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MT903342`}> MT903342 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MT903343`}> MT903343 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MT903344`}> MT903344 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=MT903345`}> MT903345 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=NC_003310`}> NC_003310 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=ON563414`}> ON563414 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=ON736420`}> ON736420 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=ON745215`}> ON745215 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=ON872184`}> ON872184 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=OP019275`}> OP019275 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=OP022170`}> OP022170 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=OP160532`}> OP160532 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=OP215228`}> OP215228 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/go/?id=OP245306`}> OP245306 </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                <br/>

                <p className="heading2"> Functional Domains </p>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic"> Select MPXV strain </Dropdown.Toggle>
                  <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=DQ011157`}> DQ011157 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=JX878409`}> JX878409 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=JX878425`}> JX878425 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=JX878428`}> JX878428 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=KJ642615`}> KJ642615 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MN648051`}> MN648051 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MN702444`}> MN702444 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MT903340`}> MT903340 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MT903342`}> MT903342 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MT903343`}> MT903343 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MT903344`}> MT903344 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=MT903345`}> MT903345 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=NC_003310`}> NC_003310 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=ON563414`}> ON563414 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=ON736420`}> ON736420 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=ON745215`}> ON745215 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=ON872184`}> ON872184 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=OP019275`}> OP019275 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=OP022170`}> OP022170 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=OP160532`}> OP160532 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=OP215228`}> OP215228 </Dropdown.Item>
                    <Dropdown.Item className="linked" href={`${env.BASE_URL}/interpro/?id=OP245306`}> OP245306 </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </ul>


              <hr></hr>
              {/* <p className="heading2">
                Protein Interactions Information
                <hr className="line"></hr>
              </p>
              <ul className="list list-inline ">
              <li>
              <p className="heading3"> Interactions: 92,880 </p>
              <p className="heading3"> Human proteins: 8,014 </p>
              <p className="heading3"> MPXV proteins: 116 </p>
              </li>
              </ul> */}

              <p className="heading2">
                <b> Disease statistics </b>
                <hr className="line"></hr>
              </p>

              <ul className="list list-inline ">
                <li>
                  <a href='https://www.cdc.gov/poxvirus/mpox/response/2022/index.html' rel="noreferrer" target="_blank"> Centers for Disease Control and Prevention (CDC) </a>
                </li>
                <li>
                  <a href='https://www.who.int/news-room/fact-sheets/detail/monkeypox' rel="noreferrer" target="_blank"> World Health Organization (WHO) </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
        
        {/* Link to <i>DQ011157</i>: <a href='https://www.ncbi.nlm.nih.gov/nuccore/DQ011157/' rel="noreferrer" target="_blank"> NCBI <sup> <i> <LinkOutlined /></i></sup></a>        */}
        {/* <div className="row flex-lg-row justify-content-center g-2 my-2">
        <Divider />
          <h4>Data Sources</h4>
        </div>

       
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <a
            href="https://hpidb.igbb.msstate.edu/"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/hpidb.png" alt="" />
            <figcaption>HPIDB</figcaption>
          </a>

          <a
            href="http://www.ebi.ac.uk/intact/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/intact.png" alt="" />
            <figcaption>IntAct</figcaption>
          </a>

          <a
            href="http://mint.bio.uniroma2.it"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/mint.png" alt="" />
            <figcaption>MINT</figcaption>
          </a>

          <a
            href="https://thebiogrid.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/biogrid.png" alt="" />
            <figcaption>BioGRID</figcaption>
          </a>

          <a
            href="https://virhostnet.prabi.fr/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/virhostnet.png" alt="" />
            <figcaption>VirHostNet</figcaption>
          </a>

          <a
            href="http://dip.doe-mbi.ucla.edu/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/dip.png" alt="dip" />
            <figcaption>DIP</figcaption>
          </a>
          <a
            href="https://manticore.niehs.nih.gov/cgi-bin/Domine"
            className="col-md-1 db2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/domine.png" alt="dip" />
            <figcaption>DOMINE</figcaption>
          </a>
          <a
            href="https://3did.irbbarcelona.org/"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/3did.png" alt="" />
            <figcaption>3did</figcaption>
          </a>
          <a
            href="http://www.uniprot.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/uniprot.png" alt="" />
            <figcaption>UniProt</figcaption>
          </a>
          
        </div> */}
        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-2">
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

            {/* <div className="col-md-12">
              <img src={lablogo} height={50} alt=''></img>
            </div> */}

          </p>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Accept!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          {/* <span style={{ fontSize: "10px" }}>This bit of text is small</span> */}
        </CookieConsent>
      </div>
    );
  }
}
