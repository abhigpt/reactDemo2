import React from 'react';
import {Nav,NavItem,Navbar,Badge} from 'react-bootstrap';
class Menu extends React.Component{
  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/about">
            About
          </NavItem>
          <NavItem eventKey={2} href="/contacts">
            Contact
          </NavItem>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/admin">
            Admin
          </NavItem>
          <NavItem eventKey={2} href="/cart">
            Cart
          </NavItem>

        </Nav>
      </Navbar>
    );
  }
}

export default Menu
