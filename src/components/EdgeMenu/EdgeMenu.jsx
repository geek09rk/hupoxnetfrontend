import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EdgeMenu.scss';

export class EdgeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (Object.keys(this.props.edgeData).length === 0) {
      return (<div>No edge selected</div>);
    }

    let geneLink = `https://www.ncbi.nlm.nih.gov/search/all/?term=${this.props.edgeData.Pathogen_Protein}`;
    let proteinLink = `https://www.uniprot.org/uniprotkb/${this.props.edgeData.Host_Protein}/entry`;

    let intType = this.props.edgeData.id.split(':')[0];
    // intType = intType.charAt(0).toUpperCase() + intType.slice(1);

    return (
      <div>
        <div className="edge-menu-container text-left px-3 pt-2 pb-4">
          <h5 className="edge-type"><u>Selected interaction pair</u></h5>
          <h4 className="edge-name"><b>{this.props.edgeData.id}</b></h4>
          
          <br></br>
          
          <h5 className="int-type">
            <span className="edge-int" style={{ fontSize: '20px' }}>Interaction source: </span> 
            <span className="edge-int-type" style={{ fontSize: '18px' }}>{intType}</span>
          </h5>

          <br></br>

          <Row>
            <Col>
              <a href={proteinLink} className="link mr-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px' }}>
                Host Protein
              </a>
              &nbsp;|&nbsp;
              <a href={geneLink} className="link ml-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px' }}>
                Pathogen Protein
              </a>
            </Col>
          </Row>

        </div>
      </div>
    );
  }
}
