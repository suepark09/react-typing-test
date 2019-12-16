import React from 'react';
import './App.css';


  export default (props) => {
    const text = props.text.split(''); //make sample text 'Test' into an array 
    // const words = props.text.split(' '); 
    // console.log('wuts text', words)
    const userInput = props.userInput.split(''); //also make the text that you're inputting an array
    // console.log('wuts userInput', userInput)
    // let correctCharacters = []; 
    return (
      <div className="border rounded p-3 mb-4">

        {
          text.map((s, i) => { //s refers to the individual letters in the sample text
            let color;
            if(i < props.userInput.length) { //check if theres actually something to compare
              color = s === userInput[i] ? '#cce8d4' : '#f2c4d3';
            } 
            // if(i < props.userInput.length) { //check if theres actually something to compare
            //   color = s === userInput[i] ? correctCharacters.push(i) : console.log('nope')
            // } 
            
            // console.log('CPM', correctCharacters)
          return <span key={i} style={{backgroundColor: color}}>{s}</span>
          })
        }

      </div>
    )
  }