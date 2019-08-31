import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'John Hedfield',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: '01 Out 2019',
        content: 'Hey guys, i started a new bootcamp from RocketSeat !',
        comments: [
          {
            id: 1,
            author: {
              name: 'Robert Junior',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            content: "It's amazing ! What programming languages you'll learn ?"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'James Harden',
          avatar: 'https://i.pravatar.cc/150?img=11'
        },
        date: '01 Out 2019',
        content: "I'm so happy, cuz today was a good day !",
        comments: [
          {
            id: 2,
            author: {
              name: 'Ana Garden',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            content: 'Cool :)'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
