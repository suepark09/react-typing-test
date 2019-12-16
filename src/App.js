import React from 'react';
import Navigation from './Navbar';

// import Input from './Input';
import Header from './Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const initialState = {
//   text: 'Hello world',
//   userInput: '',
//   symbols: 0
// }

class App extends React.Component {

  // state = initialState;
  
  render() {
  
    return (
      <div className="App">
        <Navigation />
        <Header />
      


      </div>
    );
  }
}

export default App;
