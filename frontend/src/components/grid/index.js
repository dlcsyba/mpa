import React, {Component} from 'react';

class Grid extends Component {
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
                            <h4 className="page-title">Grid System </h4>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Grid Options</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>
                                                Extra small devices
                                                <small>Phones (&lt;768px)</small>
                                            </th>
                                            <th>
                                                Small devices
                                                <small>Tablets (≥768px)</small>
                                            </th>
                                            <th>
                                                Medium devices
                                                <small>Desktops (≥992px)</small>
                                            </th>
                                            <th>
                                                Large devices
                                                <small>Desktops (≥1200px)</small>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>Grid behavior</th>
                                            <td>Horizontal at all times</td>
                                            <td colSpan="3">Collapsed to start, horizontal above breakpoints</td>
                                        </tr>
                                        <tr>
                                            <th>Max container width</th>
                                            <td>None (auto)</td>
                                            <td>750px</td>
                                            <td>970px</td>
                                            <td>1170px</td>
                                        </tr>
                                        <tr>
                                            <th>Class prefix</th>
                                            <td><code>.col-xs-</code></td>
                                            <td><code>.col-sm-</code></td>
                                            <td><code>.col-md-</code></td>
                                            <td><code>.col-lg-</code></td>
                                        </tr>
                                        <tr>
                                            <th># of columns</th>
                                            <td colSpan="4">12</td>
                                        </tr>
                                        <tr>
                                            <th>Max column width</th>
                                            <td className="text-muted">Auto</td>
                                            <td>60px</td>
                                            <td>78px</td>
                                            <td>95px</td>
                                        </tr>
                                        <tr>
                                            <th>Gutter width</th>
                                            <td colSpan="4">30px (15px on each side of a column)</td>
                                        </tr>
                                        <tr>
                                            <th>Nestable</th>
                                            <td colSpan="4">Yes</td>
                                        </tr>
                                        <tr>
                                            <th>Offsets</th>
                                            <td colSpan="1" className="text-muted">N/A</td>
                                            <td colSpan="3">Yes</td>
                                        </tr>
                                        <tr>
                                            <th>Column ordering</th>
                                            <td className="text-muted">N/A</td>
                                            <td colSpan="3">Yes</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Grid Example</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="grid-structure">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="grid-container">
                                                    col-md-12
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-11">
                                                <div className="grid-container">
                                                    col-md-11
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <div className="grid-container">
                                                    col-md-1
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <div className="grid-container">
                                                    col-md-10
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="grid-container">
                                                    col-md-2
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="grid-container">
                                                    col-md-9
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="grid-container">
                                                    col-md-3
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="grid-container">
                                                    col-md-8
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="grid-container">
                                                    col-md-4
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="grid-container">
                                                    col-md-7
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="grid-container">
                                                    col-md-5
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="grid-container">
                                                    col-md-6
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="grid-container">
                                                    col-md-6
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="grid-container">
                                                    col-md-5
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="grid-container">
                                                    col-md-7
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="grid-container">
                                                    col-md-4
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="grid-container">
                                                    col-md-8
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="grid-container">
                                                    col-md-3
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="grid-container">
                                                    col-md-9
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <div className="grid-container">
                                                    col-md-2
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="grid-container">
                                                    col-md-10
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1">
                                                <div className="grid-container">
                                                    col-md-1
                                                </div>
                                            </div>
                                            <div className="col-md-11">
                                                <div className="grid-container">
                                                    col-md-11
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <div className="grid-container">
                                                    col-md-2
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="grid-container">
                                                    col-md-3
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="grid-container">
                                                    col-md-4
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="grid-container">
                                                    col-md-2
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <div className="grid-container">
                                                    col-md-1
                                                </div>
                                            </div>
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

export default Grid;