import React from 'react';
import './App.css'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

class Header extends React.Component {

    constructor (props) {
        super(props);
        this.state = { time: '1:00' };
      }    

      decreaseTime = () => {
        this.setState({ time: this.state.time - 1 })
      }

    render() {
      return  <Jumbotron fluid className="jumbotron justify-content-center">
      <Container className="count-container">
        <Row className="char-count justify-content-md-center">
            <Col xs lg="2">
                <h1>0</h1><p className= "count-name">WORDS/MIN</p>
            </Col>
            <Col  xs lg="2">
                <h1>0</h1><p className= "count-name">CHAR/MIN</p>
            </Col>
            <Col xs lg="2">
                <h1>0</h1><p className= "count-name">% ACCURACY</p>
            </Col>
        </Row>
         <Row>
            <Col>
            <h1>{ this.state.time }</h1><p className= "count-name">TIME</p>
            </Col>

        </Row>
      </Container>
    </Jumbotron>
    }
  }
  
export default Header;