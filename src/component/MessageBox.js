import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import "./message.css";

class MessageBox extends React.Component{
    constructor(){
        super();
        this.state = {
            messages:[]
        }
    }

    addMessage = (message) => {
        let messages = [...this.state.messages,message];
        this.setState({messages});
    }

    delMessage = (index) => {
        this.state.messages.splice(index,1);
        this.setState({message:[...this.state.messages]});
    }

    render(){
        return <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading"><h4 className="text-center">欢迎来到留言板</h4></div>
                        <div className="panel-body">
                           <MessageList messages={this.state.messages} delMessage={this.delMessage}/>
                        </div>
                        <div className="panel-footer">
                            <MessageForm addMessage={this.addMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default MessageBox;