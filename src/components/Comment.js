import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="post-comments">
        <div className="divider" />
        <div key={this.props.data.id} className="comment">
          <img src={this.props.data.author.avatar} alt="" className="photo" />
          <p>
            <span>{this.props.data.author.name}</span>
            {this.props.data.content}
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;
