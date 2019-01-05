import React, { Component } from "react";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatText : ''
        };
    }

    save() {

    }

    render() {
        const list = [{
            userName: 'John Deo',
            content: 'Hello!',
            time: '10:00'
        },{
            userName: 'Smith',
            content: 'Hi, How are you? What about our next meeting?',
            time: '10:01'
        },{
            userName: 'John Deo',
            content: 'Yeah everything is fine',
            time: '10:01'
        },{
            userName: 'Smith',
            content: 'Wow that\'s great',
            time: '10:02'
        }];

        let itemList = list.map((item, index) => <ChatItem user={item.userName} content={item.content} time={item.time} index={index} key={'chatItem_' + index}/>);

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Chat</h3>
                </div>
                <div className="panel-body">
                    <div className="chat-conversation">
                        <ul className="conversation-list nicescroll">
                            {itemList}
                        </ul>
                        <div className="row">
                            <div className="col-sm-9 chat-inputbar">
                                <input type="text" className="form-control chat-input" onKeyPress={(ev) => {}}
                                       value={this.state.chatText} placeholder="Enter your text"/>
                            </div>
                            <div className="col-sm-3 chat-send">
                                <button type="submit" onClick={() => this.save()}
                                        className="btn btn-info btn-block waves-effect waves-light">Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ChatItem extends Component {

    render() {
        const {user, content, time, index} = this.props;
        return (
            <li className={['clearfix', index % 2 === 0 && 'odd'].join(' ')}>
                <div className="chat-avatar">
                    {/*<img src="mpa/images/avatar-1.jpg" alt="male"/>*/}
                        <i>{time}</i>
                </div>
                <div className="conversation-text">
                    <div className="ctext-wrap">
                        <i>{user}</i>
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Chat;