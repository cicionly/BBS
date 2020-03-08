import React from 'react';
class Message extends React.Component {
    render() {
        let {message,index} = this.props;
        return <li className="list-group-item">{message.username}:{message.content}
            <button className="btn btn-danger btn-xs" onClick={() => { this.props.delMessage(index) }}>删除</button>
            <span className="pull-right">{message.createAt}</span>
        </li>
    }
}
export default Message;