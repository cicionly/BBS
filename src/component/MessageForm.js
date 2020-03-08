import React from 'react';
class MessageForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let username = this.username.value;
        let content = this.content.value;
        this.props.addMessage({username,content,createAt:new Date().toLocaleString()});
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="username" className="control-label">用户名：</label>
                <input type="text" ref={a=>this.username=a} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="content" className="control-label">内容：</label>
                <input type="text" ref={a=>this.content=a} className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">提交</button>
            </div>
        </form>
    }
}
export default MessageForm;