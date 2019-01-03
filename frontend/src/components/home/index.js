import React, { Component } from "react";
import Inbox from '../mail/inbox';
import Chat from '../chat';
import ToDo from '../todo';

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-group pull-right">
                                <button type="button"
                                        className="btn btn-primary dropdown-toggle waves-effect waves-light"
                                        data-toggle="dropdown" aria-expanded="false">Settings <span className="m-l-5"><i
                                    className="fa fa-cog"/></span></button>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"/>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            <h4 className="page-title">Welcome !</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            <div className="mini-stat clearfix bx-shadow bg-info">
                                <span className="mini-stat-icon"><i className="ion-social-usd"/></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter">15852</span>
                                    Total Sales
                                </div>
                                <div className="tiles-progress">
                                    <div className="m-t-20">
                                        <h5 className="text-uppercase text-white m-0">Last week's Sales <span
                                            className="pull-right">235</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            <div className="mini-stat clearfix bg-purple bx-shadow">
                                <span className="mini-stat-icon"><i className="ion-ios7-cart"/></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter">956</span>
                                    New Orders
                                </div>
                                <div className="tiles-progress">
                                    <div className="m-t-20">
                                        <h5 className="text-uppercase text-white m-0">Last week's Orders <span
                                            className="pull-right">59</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-lg-3">
                            <div className="mini-stat clearfix bg-primary bx-shadow">
                                <span className="mini-stat-icon"><i className="ion-android-contacts"/></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter">5210</span>
                                    New Users
                                </div>
                                <div className="tiles-progress">
                                    <div className="m-t-20">
                                        <h5 className="text-uppercase text-white m-0">Last month's Users <span
                                            className="pull-right">136</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-lg-3">
                            <div className="mini-stat clearfix bg-success bx-shadow">
                                <span className="mini-stat-icon"><i className="ion-eye"/></span>
                                <div className="mini-stat-info text-right">
                                    <span className="counter">20544</span>
                                    Unique Visitors
                                </div>
                                <div className="tiles-progress">
                                    <div className="m-t-20">
                                        <h5 className="text-uppercase text-white m-0">Last month's Visitors <span
                                            className="pull-right">1026</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portlet">
                                <div className="portlet-heading">
                                    <h3 className="portlet-title text-dark text-uppercase">
                                        Website Stats
                                    </h3>
                                    <div className="portlet-widgets">
                                        <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"/></a>
                                        <span className="divider"/>
                                        <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i
                                            className="ion-minus-round"/></a>
                                        <span className="divider"/>
                                        <a href="#" data-toggle="remove"><i className="ion-close-round"/></a>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div id="portlet1" className="panel-collapse collapse in">
                                    <div className="portlet-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div id="website-stats" style={{position: 'relative',height: '320px'}}/>
                                                <div className="row text-center m-t-30">
                                                    <div className="col-sm-4">
                                                        <h4 className="counter">86,956</h4>
                                                        <small className="text-muted"> Weekly Report</small>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h4 className="counter">86,69</h4>
                                                        <small className="text-muted">Monthly Report</small>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h4 className="counter">948,16</h4>
                                                        <small className="text-muted">Yearly Report</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="portlet">
                                <div className="portlet-heading">
                                    <h3 className="portlet-title text-dark text-uppercase">
                                        Selling Stats
                                    </h3>
                                    <div className="portlet-widgets">
                                        <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"/></a>
                                        <span className="divider"/>
                                        <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i
                                            className="ion-minus-round"/></a>
                                        <span className="divider"/>
                                        <a href="#" data-toggle="remove"><i className="ion-close-round"/></a>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div id="portlet2" className="panel-collapse collapse in">
                                    <div className="portlet-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div id="pie-chart">
                                                    <div id="pie-chart-container" className="flot-chart"
                                                         style={{height: '320px'}}>
                                                    </div>
                                                </div>

                                                <div className="row text-center m-t-30">
                                                    <div className="col-sm-6">
                                                        <h4 className="counter">86,956</h4>
                                                        <small className="text-muted"> Weekly Report</small>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h4 className="counter">86,69</h4>
                                                        <small className="text-muted">Monthly Report</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <Inbox />
                        </div>

                        <div className="col-lg-4">
                            <Chat />
                        </div>

                        <div className="col-lg-4">
                            <ToDo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;