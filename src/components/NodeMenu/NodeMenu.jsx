import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NodeMenu.scss';

export class NodeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (Object.keys(this.props.nodeData).length === 0) {
      return (<div>No node selected</div>);
    }

    let type = 'Human Protein';
    let ncbiLink = `https://www.uniprot.org/uniprotkb/${this.props.nodeData.name.toLowerCase()}/entry`;
    let uniLink;

    if (this.props.nodeData.nodeType === 'Pathogen Protein') {
      type = 'MPXV Protein';

      uniLink = `https://www.ncbi.nlm.nih.gov/search/all/?term=${this.props.nodeData.name.toLowerCase()}`;
      
    }

    return (
      <div>
        <div className="node-menu-container text-left px-3 pt-2 pb-4">
          <h6 className="node-type">{type}</h6>
          <h4 className="node-name"><b>{this.props.nodeData.name}</b></h4>
          <h5 className="no-name"> Degree: {this.props.nodeData.degree}</h5>
          <Row>
            <Col>
              <a href={uniLink} className="link mr-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}> NCBI </a>
              &nbsp;|&nbsp;
              <a href={ncbiLink} className="link ml-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}> UniProt </a>
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            
          </Col>
        </Row>
      </div>
    );
  }
}
