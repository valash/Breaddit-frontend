import React, { Component } from 'react';

class NewPost extends Component {
    render() {
        return (
            <div>
                <form className="NewPost">
                <input type="text" className="postTitle" ></input>
                <textarea cols="70" rows="25" placeholder="We're BREAD-y for your message"/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewPost;