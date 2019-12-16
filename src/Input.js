import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Text from './Text';
import './App.css';

const initialState = {
    text: 'Hello world',
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

            //somehow grab trigger for starting the timer in header component
        }

        // handleSubmit(e) {
        //     console.log('something has been submitted')
        //     e.preventDefault()
        // }
    
        //CREATING TEXT SECTION WHERE YOU TYPE
    render() {

      return  <Container className="text-box-container">
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
    }
  }
  
export default Input;