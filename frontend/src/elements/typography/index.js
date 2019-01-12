import React, {Component} from 'react';

const Typography = () => {
    return (
        <div className="wrapper">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="btn-group pull-right">
                            <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light"
                                    data-toggle="dropdown" aria-expanded="false">Settings <span className="m-l-5"><i
                                className="fa fa-cog"></i></span></button>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <h4 className="page-title">Typography</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Headings</h3>
                            </div>
                            <div className="panel-body">
                                <h1>Heading 1
                                    <small>Secondary Text</small>
                                </h1>
                                <h2>Heading 2
                                    <small>Secondary Text</small>
                                </h2>
                                <h3>Heading 3
                                    <small>Secondary Text</small>
                                </h3>
                                <h4>Heading 4
                                    <small>Secondary Text</small>
                                </h4>
                                <h5>Heading 5
                                    <small>Secondary Text</small>
                                </h5>
                                <h6>Heading 6
                                    <small>Secondary Text</small>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Paragraphs</h3>
                            </div>
                            <div className="panel-body">
                                <p className="lead">This is a lead parapraph.</p>
                                <p>Neglected <strong>principle ask rapturous</strong> consulted. Lorem lively all did
                                    feebly excuse our wooded. Old her object <del>chatty regard vulgar</del> missed.
                                </p>
                                <p>Believing neglected so so allowance existence departure in. In <span
                                    className="label label-info" data-toggle="tooltip" data-placement="left"
                                    title="This is Design">design</span> active temper be uneasy. Thirty for remove
                                    plenty regard you summer though. He preference <ins>connection astonished</ins> on
                                    of ye.
                                </p>
                                <p>As am hastily <mark>invited settled at limited</mark> civilly fortune me. Really
                                    spring in extent an by. Judge but built gay party world. Of so am he remember
                                    although required. Bachelor unpacked be advanced at. Confined in declared marianne
                                    is vicinity.
                                </p>
                                <p>Last paragraph has no bottom margin always.</p>
                                <p>Nullam quis risus eget urna mollis ornare vel eu leo.<a href="#">this is link</a> Cum
                                    sociis natoque penatibus et magnis dis parturient montes...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Inline text elements</h3>
                            </div>
                            <div className="panel-body">
                                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                <p>
                                    <del>This line of text is meant to be treated as deleted text.</del>
                                </p>
                                <p>
                                    <ins>This line of text is meant to be treated as an addition to the document.</ins>
                                </p>
                                <p>
                                    <small>This line of text is meant to be treated as fine print.</small>
                                </p>
                                <p><strong>rendered as bold text</strong></p>
                                <p><em>rendered as italicized text</em></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Example Address</h3>
                            </div>
                            <div className="panel-body">
                                <address className="ng-scope">
                                    <strong>Twitter, Inc.</strong><br/>
                                    795 Folsom Ave, Suite 600<br/>
                                    San Francisco, CA 94107<br/>
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                </address>
                                <strong>Full Name</strong><br/>
                                <a href="mailto:#">first.last@example.com</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Contextual Text Colors</h3>
                            </div>
                            <div className="panel-body">
                                <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                    nibh.</p>
                                <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor
                                    ligula.</p>
                                <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non
                                    magna.</p>
                                <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                                <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Blockquotes</h3>
                            </div>
                            <div className="panel-body">
                                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p></blockquote>
                                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p>
                                    <footer>Someone famous in<cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                                <blockquote className="blockquote-reverse"><p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in<cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Alignments</h3>
                            </div>
                            <div className="panel-body">
                                <p className="text-left">Left aligned text.</p><p className="text-center">Center aligned
                                text.</p><p className="text-right">Right aligned text.</p>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Block</h3>
                            </div>
                            <div className="panel-body">
                                <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Ordered Lists</h3>
                            </div>
                            <div className="panel-body">
                                <ol>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Facilisis in pretium nisl aliquet</li>
                                    <li>Nulla volutpat aliquam velit</li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Integer molestie lorem at massa</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Unordered Lists</h3>
                            </div>
                            <div className="panel-body">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Nulla volutpat aliquam velit
                                        <ul>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                        </ul>
                                    </li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                    <li>Eget porttitor lorem</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">List-Unstyled</h3>
                            </div>
                            <div className="panel-body">
                                <ul className="list-unstyled">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">List-Inline</h3>
                            </div>
                            <div className="panel-body">
                                <ol className="list-inline">
                                    <li>1.Lorem ipsum</li>
                                    <li>2.Consectetur</li>
                                    <li>3.Integer</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Dropcap</h3>
                            </div>
                            <div className="panel-body">
                                <p><span className="dropcap text-primary">D</span>orem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti ratione
                                    reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas
                                    quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. Ea, ipsa,
                                    in, laboriosam, dignissimos nobis quaerat vitae a facere esse neque laudantium nisi
                                    atque quos assumenda magni quae architecto fugiat libero.</p>
                                <p><span className="dropcap text-purple">D</span>orem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti ratione
                                    reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas
                                    quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. Ea, ipsa,
                                    in, laboriosam, dignissimos nobis quaerat vitae a facere esse neque laudantium nisi
                                    atque quos assumenda magni quae architecto fugiat libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Typography;