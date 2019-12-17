import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Text from './Text';
import getText from './getText';
import './App.css';

const initialState = {
    text: getText(),
    userInput: ''
}
//===STOP
// const text = initialState.text.split('')
// const userInput = initialState.userInput.split('')

class Input extends React.Component {

        state = initialState;
      
        onRestart = () => {
            this.setState(initialState)
            this.props.resetTimer();
        }
  
        //targets each character being typed which would then update the state accordingly
        userInputChange = (e) => {
            const value = e.target.value;
        
            this.setState({
                userInput: value
            })
            this.props.countDown() //Starts Timer

            let characterCount = 0 //being passed as an argument to incrememt value
            let wordCount = 0
            let accuracyCount = 0

            //COUNT WORD

            for(let i = 0; i < this.state.text.length; i++) {
                const word = this.state.text.split(' ')[i]

                if(i < value.length) {
                    if (word === value.split(' ')[i]) {
                        wordCount = wordCount + 1;
                    }
                }
            }

            this.props.words(wordCount)

            //COUNT CHARACTERS

            for(let i = 0; i < this.state.text.length; i++) { //looping through 
                const s = this.state.text[i] //s is the index for every single letter
                if(i < value.length) { //check if theres actually something to compare
                    if (s === value[i]) { 
                    characterCount = characterCount + 1; 
                      }
                  } 
            }
            this.props.characters(characterCount)

            //COUNT ACCURACY

            for(let i = 0; i < this.state.text.length; i++) {
                const word = this.state.text.split(' ')[i]

                if(i < value.length) {
                    if (word === value.split(' ')[i]) {
                        accuracyCount = ( ((wordCount / word.length) * 100 ) / 100 ).toFixed(2);
                        console.log('wut is accuracy count', (wordCount / word.length))
                    }
                }
            }

            this.props.accuracy(accuracyCount)
        

        }
    //!!!! BELOW IS THE BOX SECTION WHERE YOU START TYPING !!!!!

    render() {

      return  <React.Fragment>
          <Container className="text-box-container">
        <Row className="search-container">
        <Text className="text-box" text={this.state.text} userInput={this.state.userInput} />
        <textarea
            className="form-control mb-3" 
            placeholder="Start typing..."
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