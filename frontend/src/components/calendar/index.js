import React, { Component } from "react";
import fullcalendar from '../../assets/plugins/fullcalendar/dist/fullcalendar.css';
import select2 from '../../assets/plugins/select2/dist/css/select2.css';


class Calendar extends Component {
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
                            <h4 className="page-title">Calendar </h4>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div id="calendar"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="widget">
                                        <div className="widget-body">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <a href="#" data-toggle="modal" data-target="#add-category"
                                                       className="btn btn-lg btn-primary btn-block waves-effect waves-light">
                                                        <i className="fa fa-plus"/> Create New
                                                    </a>
                                                    <div id="external-events" className="m-t-20">
                                                        <br/>
                                                            <p>Drag and drop your event or click in the calendar</p>
                                                            <div className="external-event bg-inverse"
                                                                 data-class="bg-inverse" style="position: relative">
                                                                <i className="fa fa-move"/>My Event One
                                                            </div>
                                                            <div className="external-event bg-danger"
                                                                 data-class="bg-danger" style="position: relative">
                                                                <i className="fa fa-move"/>My Event Two
                                                            </div>
                                                            <div className="external-event bg-primary"
                                                                 data-class="bg-primary" style="position: relative">
                                                                <i className="fa fa-move"/>My Event Three
                                                            </div>
                                                            <div className="external-event bg-purple"
                                                                 data-class="bg-purple" style="position: relative">
                                                                <i className="fa fa-move"/>My Event Four
                                                            </div>
                                                    </div>

                                                    <div className="checkbox checkbox-primary m-t-40">
                                                        <input id="drop-remove" type="checkbox"/>
                                                            <label htmlFor="drop-remove">
                                                                Remove after drop
                                                            </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade none-border" id="event-modal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-hidden="true">&times;</button>
                                            <h4 className="modal-title"><strong>Add Event</strong></h4>
                                        </div>
                                        <div className="modal-body"/>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default waves-effect"
                                                    data-dismiss="modal">Close
                                            </button>
                                            <button type="button"
                                                    className="btn btn-success save-event waves-effect waves-light">Create
                                                event
                                            </button>
                                            <button type="button"
                                                    className="btn btn-danger delete-event waves-effect waves-light"
                                                    data-dismiss="modal">Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade none-border" id="add-category">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-hidden="true">&times;</button>
                                            <h4 className="modal-title"><strong>Add</strong> a category</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form role="form">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label className="control-label">Category Name</label>
                                                        <input className="form-control form-white"
                                                               placeholder="Enter name" type="text"
                                                               name="category-name"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="control-label">Choose Category Color</label>
                                                        <select className="form-control form-white"
                                                                data-placeholder="Choose a color..."
                                                                name="category-color">
                                                            <option value="success">Success</option>
                                                            <option value="danger">Danger</option>
                                                            <option value="primary">Primary</option>
                                                            <option value="warning">Warning</option>
                                                            <option value="inverse">Inverse</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default waves-effect"
                                                    data-dismiss="modal">Close
                                            </button>
                                            <button type="button"
                                                    className="btn btn-danger waves-effect waves-light save-category"
                                                    data-dismiss="modal">Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;