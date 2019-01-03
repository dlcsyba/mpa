import React, { Component } from "react";

class Inbox extends Component {
    render() {

        const itemList = [{
            author : 'Chadengle',
            text : 'Hey! there I\'m available...',
            date : '13:40 PM'
        },{
            author : 'Tomaslau',
            text : 'I\'ve finished it! See you so...',
            date : '13:34 PM'
        },{
            author : 'Stillnotdavid',
            text : 'This theme is awesome!',
            date : '13:17 PM'
        },{
            author : 'Kurafire',
            text : 'Nice to meet you',
            date : '12:20 PM'
        },{
            author : 'Shahedk',
            text : 'Hey! there I\'m available...',
            date : '10:15 AM'
        },{
            author : 'Adhamdannaway',
            text : 'This theme is awesome!',
            date : '9:56 AM'
        },{
            author : 'Arashasghari',
            text : 'Hey! there I\'m available...',
            date : '10:15 AM'
        },{
            author : 'Joshaustin',
            text : 'I\'ve finished it! See you so...',
            date : '9:56 AM'
        }];

        const listItems = itemList.map((item) =>
                            <InboxItem author={item.author} itemText={item.text} itemDate={item.date}/>
                        );

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">Inbox</h4>
                </div>
                <div className="panel-body">
                    <div className="inbox-widget nicescroll mx-box">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }
}

class InboxItem extends Component {
    render() {
        const { author, itemText, itemDate } = this.props;

        return (
            <a href="#">
                <div className="inbox-item">
                    <div className="inbox-item-img">
                        <img src="mpa/images/users/avatar-3.jpg" className="img-circle" alt=""/>
                    </div>
                    <p className="inbox-item-author">{author}</p>
                    <p className="inbox-item-text">{itemText}</p>
                    <p className="inbox-item-date">{itemDate}</p>
                </div>
            </a>
        );
    }
}

export default Inbox;