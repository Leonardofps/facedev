import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img className="photo" src={this.props.data.author.avatar} alt="" />
          <div className="details">
            <span>{this.props.data.author.name}</span>
            <span>{this.props.data.date}</span>
          </div>
        </div>

        <p className="post-content">{this.props.data.content}</p>

        {this.props.data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    );
  }
}

export default Post;
