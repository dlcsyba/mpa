import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-right">
                <Container>
                    <Row>
                        <Col xs="6">2018 © Sun.</Col>
                        <Col xs="6">
                            <ul className="pull-right list-inline m-b-0">
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;