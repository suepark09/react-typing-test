import React from 'react';
import Navigation from './Navbar';
import Text from './Text';
// import Input from './Input';
import Header from './Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
  
    return (
      <div className="App">
        <Navigation />
        <Header />
        
      <Text />
      {/* <Input /> */}
      


      </div>
    );
  }
}

export default App;