import React from 'react';
import Message from './Message';
class MessageList extends React.Component {
    render() {
        return (<ul className="list-group">
            {this.props.messages.map((message, index) => (
               <Message key={index} message={message} index={index} delMessage={this.props.delMessage}/>
           ))}
        </ul>);
    }
}
export default MessageList;