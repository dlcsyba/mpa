import React, { Component } from 'react';
import { Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import * as i18n from 'react-intl-universal';
import DataGrid from '../../components/datagrid'

class BookPurchaseList extends Component {
    render() {
        let colModal = [{
            name: 'firstName',
            display: '名'
        },{
            name: 'lastName',
            display: '姓'
        },{
            name: 'userName',
            display: '用户名'
        }];
        return (
            <div className="wrapper">
                <div className="container">
                    <Form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3">
                                    <FormGroup>
                                        <Label for="bookName">{ i18n.get('BOOK_NAME') }</Label>
                                        <Input type="text" name="bookName" id="bookName" placeholder={ i18n.get('BOOK_NAME') } />
                                    </FormGroup>
                                </div>
                                <div className="col-md-3">
                                    <FormGroup>
                                        <Label for="author">{ i18n.get('AUTHOR') }</Label>
                                        <Input type="text" name="author" id="author" placeholder={ i18n.get('AUTHOR') } />
                                    </FormGroup>
                                </div>
                                <div className="col-md-3">
                                    <FormGroup>
                                        <Label for="beginDate">{ i18n.get('BEGIN_DATE') }</Label>
                                        <Input type="date" name="beginDate" id="beginDate" placeholder={ i18n.get('BEGIN_DATE') } />
                                    </FormGroup>
                                </div>
                                <div className="col-md-3">
                                    <FormGroup>
                                        <Label for="endDate">{ i18n.get('END_DATE') }</Label>
                                        <Input type="date" name="endDate" id="endDate" placeholder={ i18n.get('END_DATE') } />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="col-md-12 pull-right">
                                <Button color="primary" size="sm">{ i18n.get('QUERY') }</Button>{' '}
                                <Button color="secondary" size="sm">{ i18n.get('RESET') }</Button>
                            </div>
                        </div>
                    </Form>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{ i18n.get('BOOK_LIST') }</h3>
                        </div>
                        <div className="panel-body">
                            <DataGrid colModel={colModal} showLineNumber={true} source=''/>
                        </div>
                    </div>
                    {/*<div className="panel panel-fixed">*/}
                        {/*<div className="panel-heading">*/}
                            {/*<span className="panel-heading-button pull-right"><i*/}
                                {/*className="ion-chevron-up"></i></span>*/}
                            {/*<h3 className="panel-title">COMMON_DETAIL</h3>*/}
                        {/*</div>*/}
                        {/*<div className="panel-body" style={{display: 'none'}}>*/}

                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default BookPurchaseList;