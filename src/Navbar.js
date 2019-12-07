import React from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css'

class Navigation extends React.Component {
    render() {
      return  <Navbar fixed="top">
      <Navbar.Brand href="#home" className="logo">
        Typing Test
      </Navbar.Brand>
    </Navbar>
    }
  }
  
export default Navigation;