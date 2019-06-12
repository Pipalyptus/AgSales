import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class ViewProfile extends Component {
  render() {
    return (
      <div className="ViewProfile">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="home">AgSales</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              href="#Search"
              onClick={() => this.props.changePage("Search")}
            >
              Search
            </Nav.Link>
            {this.props.showCreateButton &&
            <Nav.Link
              href="#CreateProduct"
              onClick={() => this.props.changePage('CreateProduct')}
            >
              Create Product
            </Nav.Link>}
            <Nav.Link
              href="#home"
              onClick={() => this.props.logout()}
            >
              Log Out
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: &nbsp;
                <a
                  href="#Profile"
                  onClick={() => this.props.changePage('ViewProfile')}
                >
                  {this.props.userName}
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>



        <h4> Company Name: {this.props.name}</h4>
        <h4> License Number: {this.props.licenseNumber}</h4>
        <h4> Email: {this.props.email}</h4>
        <h4> Phone Number: {this.props.phoneNumber}</h4>
        <h4> Description: {this.props.description}</h4>
        <h4> Picture:</h4>
        <img 
          src={this.props.imageURL}
          alt='Grower'
        
        />

      </div>
    );
  }
}
