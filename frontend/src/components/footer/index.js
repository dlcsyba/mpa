import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-right">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            2018 © Sun.
                        </div>
                        <div className="col-xs-6">
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
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;