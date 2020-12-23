import React from "react";
import {
    NavItem,
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavbarBrand,
    Container,
    NavLink
}from "reactstrap";

class AppNavBar extends React.Component{

    state = {
        isOpen : false  
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar color="light" light expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/amaan-ahmad">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavBar;