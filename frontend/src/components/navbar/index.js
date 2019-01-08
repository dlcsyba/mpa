import React, { Component } from "react";
import { Link } from 'react-router-dom';
import avatar_1 from '../../assets/images/users/avatar-1.jpg';
import './style.css';

class NavBar extends Component {
    render() {
        return (
            <header id="topnav">
                <div className="navbar-custom">
                    <div className="container">
                        <div id="navigation">
                            {/*Navigation Menu*/}
                            <ul className="navigation-menu">
                                <li className="active">
                                    <Link to="/mpa/home"><i className="md md-home"/> <span> Dashboard </span> </Link>
                                </li>
        
                                <li className="has-submenu">
                                    <a href="#"><i className="md md-palette "/><span> Elements </span> </a>
                                    <ul className="submenu">
                                        <li><Link to="/elements/typography">Typography</Link></li>
                                        <li><Link to="/elements/buttons">Buttons</Link></li>
                                        <li><Link to="/elements/panels">Panels</Link></li>
                                        <li><Link to="/elements/checkbox-radio">Checkboxs-Radios</Link></li>
                                        <li><Link to="/elements/tabs-accordions">Tabs &amp; Accordions</Link></li>
                                        <li><Link to="/elements/modals">Modals</Link></li>
                                        <li><Link to="/elements/bootstrap-ui">BS Elements</Link></li>
                                        <li><Link to="/elements/progressbars">Progress Bars</Link></li>
                                        <li><Link to="/elements/notification">Notification</Link></li>
                                        <li><Link to="/elements/sweet-alert">Sweet-Alert</Link></li>
                                    </ul>
                                </li>
        
                                <li className="has-submenu">
                                    <a href="#"><i className="md md-invert-colors-on"/> <span> Components </span> </a>
                                    <ul className="submenu">
                                        <li><Link to="/components/grid">Grid</Link></li>
                                        <li><Link to="/components/portlets">Portlets</Link></li>
                                        <li><Link to="/components/widgets">Widgets</Link></li>
                                        <li><Link to="/components/nestable-list">Nesteble</Link></li>
                                        <li><Link to="/components/ui-sliders">Sliders </Link></li>
                                        <li><Link to="/components/gallery">Gallery </Link></li>
                                        <li><Link to="/components/pricing">Pricing Table </Link></li>
                                        <li><Link to="/components/calendar">Calendar </Link></li>
                                    </ul>
                                </li>
        
                                <li className="has-submenu">
                                    <a href="#"><i className="md md-redeem"/> <span> Other </span> </a>
                                    <ul className="submenu">
                                        <li className="has-submenu">
                                            <Link to="#">Icons</Link>
                                            <ul className="submenu">
                                                <li><Link to="/icons/material-icon">Material Design</Link></li>
                                                <li><Link to="/icons/ion-icons">Ion Icons</Link></li>
                                                <li><Link to="/icons/font-awesome">Font awesome</Link></li>
                                            </ul>
                                        </li>
        
                                        <li className="has-submenu">
                                            <Link to="#">Forms</Link>
                                            <ul className="submenu">
                                                <li><Link to="/forms/form-elements">General Elements</Link></li>
                                                <li><Link to="/forms/form-validation">Form Validation</Link></li>
                                                <li><Link to="/forms/form-advanced">Advanced Form</Link></li>
                                                <li><Link to="/forms/form-wizard">Form Wizard</Link></li>
                                                <li><Link to="/forms/form-editor">WYSIWYG Editor</Link></li>
                                                <li><Link to="/forms/code-editor">Code Editors</Link></li>
                                                <li><Link to="/forms/form-uploads">Multiple File Upload</Link></li>
                                                <li><Link to="/forms/form-xeditable">X-editable</Link></li>
                                            </ul>
                                        </li>
        
                                        <li className="has-submenu">
                                            <a href="#">Tables</a>
                                            <ul className="submenu">
                                                <li><Link to="/tables/tables">Basic Tables</Link></li>
                                                <li><Link to="/tables/table-datatable">Data Table</Link></li>
                                                <li><Link to="/tables/tables-editable">Editable Table</Link></li>
                                                <li><Link to="/tables/responsive-table">Responsive Table</Link></li>
                                            </ul>
                                        </li>
        
                                        <li className="has-submenu">
                                            <a href="#">Charts</a>
                                            <ul className="submenu">
                                                <li><Link to="/charts/morris-chart">Morris Chart</Link></li>
                                                <li><Link to="/charts/chartjs">Chartjs</Link></li>
                                                <li><Link to="/charts/flot-chart">Flot Chart</Link></li>
                                                <li><Link to="/charts/peity-chart">Peity Charts</Link></li>
                                                <li><Link to="/charts/charts-sparkline">Sparkline Charts</Link></li>
                                                <li><Link to="/charts/chart-radial">Radial charts</Link></li>
                                                <li><Link to="/charts/other-chart">Other Chart</Link></li>
                                            </ul>
                                        </li>
        
                                        <li className="has-submenu">
                                            <a href="#">Maps</a>
                                            <ul className="submenu">
                                                <li><Link to="/maps/gmap"> Google Map</Link></li>
                                                <li><Link to="/maps/vector-map"> Vector Map</Link></li>
                                            </ul>
                                        </li>
        
                                        <li className="has-submenu">
                                            <a href="#">Mail</a>
                                            <ul className="submenu">
                                                <li><Link to="/mail/inbox">Inbox</Link></li>
                                                <li><Link to="/mail/email-compose">Compose Mail</Link></li>
                                                <li><Link to="/mail/email-read">View Mail</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
        
                                <li className="has-submenu">
                                    <a href="#"><i className="md md-pages"/><span>Pages </span> </a>
                                    <ul className="submenu megamenu">
                                        <li>
                                            <ul>
                                                <li><Link to="/pages/profile">Profile</Link></li>
                                                <li><Link to="/pages/timeline">Timeline</Link></li>
                                                <li><Link to="/pages/invoice">Invoice</Link></li>
                                                <li><Link to="/pages/email-template">Email template</Link></li>
                                                <li><Link to="/pages/contact">Contact-list</Link></li>
                                                <li><Link to="">Login</Link></li>
                                                <li><Link to="/mpa/to_register">Register</Link></li>
                                                <li><Link to="/mpa/to_recoverpw">Recover Password</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><Link to="/pages/lock-screen">Lock Screen</Link></li>
                                                <li><Link to="/pages/blank">Blank Page</Link></li>
                                                <li><Link to="/pages/maintenance">Maintenance</Link></li>
                                                <li><Link to="/pages/coming-soon">Coming-soon</Link></li>
                                                <li><Link to="/pages/404">404 Error</Link></li>
                                                <li><Link to="/pages/404_alt">404 alt</Link></li>
                                                <li><Link to="/pages/500">500 Error</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="has-submenu">
                                    <a href="#"><i className="md md-pages"/><span>资产管理 </span> </a>
                                    <ul className="submenu">
                                        <li><Link to="/book-purchase-list">购书清单</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu">
                                    <a href="#"><i className="md md-pages"/><span>开发工具 </span> </a>
                                    <ul className="submenu">

                                    </ul>
                                </li>
                            </ul>
                            {/*End navigation menu*/}
                        </div>
                        <div className="menu-extras">
                            <ul className="nav navbar-nav navbar-right pull-right">
                                <li>
                                    <form role="search" className="navbar-left app-search pull-left hidden-xs">
                                         <input type="text" placeholder="Search..." className="form-control"/>
                                        <a href="#"><i className="fa fa-search"/></a>
                                    </form>
                                </li>
                                <li className="dropdown hidden-xs">
                                    <a href="#" data-target="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                        <i className="md md-notifications"/> <span className="badge badge-xs badge-danger">3</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-lg">
                                        <li className="text-center notifi-title">Notification</li>
                                        <li className="list-group">
                                           {/*list item*/}
                                           <a href="javascript:void(0);" className="list-group-item">
                                              <div className="media">
                                                 <div className="pull-left">
                                                    <em className="fa fa-user-plus fa-2x text-info"/>
                                                 </div>
                                                 <div className="media-body clearfix">
                                                    <div className="media-heading">New user registered</div>
                                                    <p className="m-0">
                                                       <small>You have 10 unread messages</small>
                                                    </p>
                                                 </div>
                                              </div>
                                           </a>
                                            <a href="javascript:void(0);" className="list-group-item">
                                              <div className="media">
                                                 <div className="pull-left">
                                                    <em className="fa fa-diamond fa-2x text-primary"/>
                                                 </div>
                                                 <div className="media-body clearfix">
                                                    <div className="media-heading">New settings</div>
                                                    <p className="m-0">
                                                       <small>There are new settings available</small>
                                                    </p>
                                                 </div>
                                              </div>
                                            </a>
                                            <a href="javascript:void(0);" className="list-group-item">
                                              <div className="media">
                                                 <div className="pull-left">
                                                    <em className="fa fa-bell-o fa-2x text-danger"/>
                                                 </div>
                                                 <div className="media-body clearfix">
                                                    <div className="media-heading">Updates</div>
                                                    <p className="m-0">
                                                       <small>There are
                                                          <span className="text-primary">2</span> new updates available</small>
                                                    </p>
                                                 </div>
                                              </div>
                                            </a>
                                            <a href="javascript:void(0);" className="list-group-item">
                                              <small>See all notifications</small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
        
                                <li className="dropdown user-box">
                                    <a href="" className="dropdown-toggle waves-effect waves-light profile " data-toggle="dropdown" aria-expanded="true">
                                        <img src={{avatar_1}} style={{height: '60px'}} alt="user-img" className="img-circle user-img"/>
                                        <div className="user-status away"><i className="zmdi zmdi-dot-circle"/></div>
                                    </a>
        
                                    <ul className="dropdown-menu">
                                        <li><a href="javascript:void(0)"><i className="md md-face-unlock"/> 信息</a></li>
                                        <li><a href="javascript:void(0)"><i className="md md-settings"/> 设置</a></li>
                                        <li><a href="javascript:void(0)"><i className="md md-lock"/> 锁定</a></li>
                                        <li><a href="javascript:void(0)"><i className="md md-settings-power"/> 登出</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="menu-item">
                                {/*Mobile menu toggle*/}
                                <a className="navbar-toggle">
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                {/*End mobile menu toggle*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;