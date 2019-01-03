import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);


        this.addTodo = this.addTodo.bind(this);
        this.archives = this.archives.bind(this);

        let todoData = [
        {
            id: '1',
            text: 'Design One page theme',
            done: false
        },
        {
            id: '2',
            text: 'Build a js based app',
            done: true
        },
        {
            id: '3',
            text: 'Creating component page',
            done: true
        },
        {
            id: '4',
            text: 'Testing??',
            done: true
        },
        {
            id: '5',
            text: 'Hehe!! This is looks cool!',
            done: false
        },
        {
            id: '6',
            text: 'Build an angular app',
            done: true
        }];

        let remaining = 0;
        todoData.map(item => {
            if (!item.done) {
                remaining ++;
            }
        });

        this.state = {
            remaining : remaining,
            todoText : '',
            todoList : todoData
        };
    }

    addTodo() {
        this.setState({
            remaining: this.state.remaining + 1,
            todoList: this.state.todoList.slice().concat({
                id : this.state.todoList.length,
                text: this.state.todoText,
                done: false
            })
        });
    }

    archives() {
        // e.preventDefault();
    }

    render() {
        let todoList = this.state.todoList.map(item => {
            return <ToDoItem id={item.id} text={item.text} done={item.done}/>;
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Todo</h3>
                </div>
                <div className="panel-body todoapp">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4 id="todo-message">{this.state.remaining} of {this.state.todoList.length} remaining</h4>
                        </div>
                        <div className="col-sm-6">
                            <a href=""
                               className="pull-right btn btn-primary btn-sm waves-effect waves-light"
                               id="btn-archive">Archive</a>
                        </div>
                    </div>

                    <ul className="list-group no-margn nicescroll todo-list" style={{'max-height': '288px'}}>
                        {todoList}
                    </ul>

                    <form name="todo-form" id="todo-form" role="form" className="m-t-20">
                        <div className="row">
                            <div className="col-sm-9 todo-inputbar">
                                <input type="text" value={this.state.todoText}
                                       className="form-control" placeholder="Add new todo"/>
                            </div>
                            <div className="col-sm-3 todo-send">
                                <button className="btn-primary btn-block btn waves-effect waves-light"
                                        type="button" onClick={this.addTodo}>Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

class ToDoItem extends Component {
    render() {
        const {id, text, done=false} = this.props;
        let checkbox = null;
        if (done) {
            checkbox = <input className="todo-done" id={id} type="checkbox" checked/>;
        }
        else {
            checkbox = <input className="todo-done" id={id} type="checkbox"/>;
        }

        return (
            <li className="list-group-item">
                <div className="checkbox checkbox-primary">
                    {checkbox}
                    <label htmlFor={id}>{text} </label>
                </div>
            </li>
        );
    }
}

export default ToDo;