import React from 'react';
import './App.css'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

class Header extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            seconds: '60',
            symbols: 0
        }
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
      }    

tick () {
       
            const { seconds } = this.state
            
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

            if (seconds === 0) {
                clearInterval(this.intervalHandle);
                alert(
                `you type with a speed of ${this.state.symbols} WPM`
                )
            }

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

      startCountDown() {
            this.intervalHandle = setInterval(this.tick, 1000);
        }

    render() {
    
    const { seconds }  = this.state
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
    <h1>{ seconds < 10 ? `0${seconds}` : seconds }</h1><p className= "count-name">TIME</p>
    <button onClick={this.startCountDown}>Test Timer</button>
            </Col>

        </Row>
      </Container>
    </Jumbotron>
    }
  }

  
export default Header;