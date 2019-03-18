import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>Post Title  </h2>
                {/* props for title */}
                Toast
                <Comment />
            </div>
        );
    }
}

export default Post;