import React from 'react';
import './App.css';
import Input from './Input';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

class Header extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            seconds: '60',
            characters: 0,
            words: 0,
            accuracy: 0,
            started: false
        }
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.addCPM = this.addCPM.bind(this);
        this.addWPM = this.addWPM.bind(this);
        this.addAccuracy = this.addAccuracy.bind(this); 
        console.log('++++', this.state.characters + 1)
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

                if (this.state.words > 50) {
                    alert(
                        ` Ura wizard! You type with a speed of ${this.state.words} WPM, ${this.state.characters} CPM, with ${this.state.accuracy}% accuracy!`
                        )
                }  if (this.state.words < 10)  {
                    alert(
                        ` ura turtle! You type with a speed of ${this.state.words} WPM, ${this.state.characters} CPM, with ${this.state.accuracy}% accuracy!`
                        )
                }
              
            }

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    startCountDown() {
            if(!this.state.started) {
                this.setState({started: true});
                this.intervalHandle = setInterval(this.tick, 1000);
                // console.log('wuts seconds', this.state.seconds)
            }          
    }

    resetTimer() {
        this.setState({ seconds: 0, characters: 0, words: 0 });
     }

    addCPM(count) { //waiting until you complete loop in input.js or it'll fire multiple times and not register the incorrect characters
        this.setState({ characters: count });
 
    }

    addWPM(count) {
        this.setState({ words: count });
    }

    addAccuracy(count) {
        this.setState({accuracy: count });
    }

    render() {
    
    const { seconds }  = this.state
    const { words } = this.state
    const { characters } = this.state
    const { accuracy } = this.state
    // const userInput = props.userInput.split('')
    // console.logIO
      return  <React.Fragment>
          <Jumbotron fluid className="jumbotron justify-content-center">
            <Container className="count-container">
                <Row className="char-count justify-content-md-center">
                    < Col xs lg="2">
    <h1>{ words }</h1><p className= "count-name">WORDS/MIN</p>
                    </Col>
                    <Col xs lg="2">
    <h1>{ characters } </h1><p className= "count-name">CHAR/MIN</p>
                    </Col>
                    <Col xs lg="2">
    <h1>{ accuracy }</h1><p className= "count-name">% ACCURACY</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{ seconds < 10 ? `0${seconds}` : seconds }</h1><p className= "count-name">TIME</p>
                        {/* <button onClick={this.startCountDown}>Test Timer</button> */}
                     </Col>
                </Row>
            </Container>
        </Jumbotron>
        <Input countDown={ this.startCountDown } resetTimer={ this.resetTimer } characters={ this.addCPM } words={ this.addWPM } accuracy={ this.addAccuracy }/>
      </React.Fragment>
    }
  }

  
export default Header;