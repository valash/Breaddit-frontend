import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
    render() {
        return (
            <div>
                Toast
                <Comment />
            </div>
        );
    }
}

export default Post;