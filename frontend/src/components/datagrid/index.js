import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

class DataGrid extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     showLineNumber : true,
        //     colModel : []
        // };

        this.header = [];
        this.columnKeyArray = [];
        this.dataSource = [];

    }

    render() {
        let { showLineNumber=true, colModel=[], source } = this.props;

        // let header = [];
        if (showLineNumber) {
            this.header.push(<th>#</th>);
        }

        colModel.map((item, index) => {
            this.columnKeyArray.push(item.name);
            this.header.push(<th key={item.name}>{item.display}</th>);
        });

        let dataList = [];
        let arr = [{
            firstName : 'Mark',
            lastName : 'Otto',
            userName : '@mdo'
        },{
            firstName : 'Jacob',
            lastName : 'Thornton',
            userName : '@fat'
        },{
            firstName : 'Larry',
            lastName : 'the Bird',
            userName : '@twitter'
        }];
        arr.map((item, index) => {
            if (showLineNumber) {
                dataList.push(<DataGridRowData data={item} lineNumber={index + 1} colKeyArray={this.columnKeyArray}/>);
            }
            else {
                dataList.push(<DataGridRowData data={item} colKeyArray={this.columnKeyArray}/>);
            }
        });

        return (
            <Table bordered hover>
                <thead>
                    {this.header}
                </thead>
                <tbody>
                    {dataList}
                </tbody>
            </Table>
        );
    }
}

DataGrid.propTypes = {
    source : PropTypes.string.isRequired,
    colModel : PropTypes.array.isRequired
};

class DataGridRowData extends Component {
    render() {
        let { lineNumber, data, colKeyArray=[] } = this.props;

        let columnList = [];
        colKeyArray.map(item => {
            columnList.push(<DataGridColumnData value={data[item]} />)
        });

        let template = null;
        if (lineNumber != null) {
            template = <tr><th scope="row"> { lineNumber } </th> { columnList } </tr>;
        }
        else {
            template = <tr> { columnList } </tr>;
        }

        return template;
    }
}

class DataGridColumnData extends Component {
    render() {
        let { value } = this.props;
        return (
            <td>{ value }</td>
        );
    }
}

export default DataGrid;