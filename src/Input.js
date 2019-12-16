import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Text from './Text';
import getText from './getText';
import './App.css';

const initialState = {
    text: getText(),
    userInput: '',
    symbols: 0
}

class Input extends React.Component {

        state = initialState;

        onRestart = () => {
            this.setState(initialState)
        }

        //targets each character being typed which would then update the state accordingly
        userInputChange = (e) => {
            const value = e.target.value;
            this.setState({
                userInput: value
            })
            this.props.countDown()
        }

    //!!!! BELOW IS THE BOX SECTION WHERE YOU START TYPING !!!!!

    render() {

      return  <React.Fragment>
          <Container className="text-box-container">
        <Row className="search-container">
        <Text className="text-box" text={this.state.text} userInput={this.state.userInput}/>
        <textarea
            className="form-control mb-3" 
            placeholder="start typing..."
            value={this.state.userInput}
            onChange={this.userInputChange}
        >
        </textarea>

        <div className="text-right">
            <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
        </div>
        </Row>
      </Container>
      </React.Fragment>
    }
  }
  
export default Input;