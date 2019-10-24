import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default class CustomNav extends Component {
    render () {
        return(
            <Navbar fixed='top' bg="dark" variant="dark">
                <LinkContainer to='/'>
                    <Navbar.Brand>App Name</Navbar.Brand>
                </LinkContainer>
                <Nav className="pr-0">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/companies'>
                        <Nav.Link>Companies</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/about'>
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Container className="justify-content-center mr-5 pr-5">
                    <Form inline>
                        <FormControl type="text" placeholder="Search a brand here" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
                <Nav className="pl-5">
                    <Nav.Link href="#login">Login/Logout</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}