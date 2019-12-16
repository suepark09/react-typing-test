import React from 'react';
import Navigation from './Navbar';

import Input from './Input';
import Header from './Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
  
    return (
      <div className="App">
        <Navigation />
        <Header />
        

      <Input />
      


      </div>
    );
  }
}

export default App;
