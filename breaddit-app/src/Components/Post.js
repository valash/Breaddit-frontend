import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.deleteIt = this.deleteIt.bind(this);
  }
  componentDidMount() {
    const postId = this.props.match.params._id;
    // console.log(this.props.match.params);
    fetch(`https://breaddit123.herokuapp.com/breaddit/${postId}`)
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }
  deleteIt(_id) {
    const postId = this.props.match.params._id;
    console.log("Bye bye!");
    // event.preventDefault();
    fetch(`https://breaddit123.herokuapp.com/breaddit/${postId}`, {
      method: "DELETE"
    }).then(res => res);
  }
  render() {
    return (
      <div
        className="card text-center"
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "10%"
        }}
      >
        <div className="card-body">
          {this.props.title}
          {this.props.body}

          <Comment
            comments={this.props.comments}
            commentCreate={this.props.commentCreate}
          />
          <div
            className="card-footer text-muted"
            style={{
              textAlign: "center",
              background: "none",
              borderRadius: "none",
              height: "55px"
            }}
          >
            <p className="pull-left">
              <span
                className="glyphicon glyphicon-thumbs-down"
                style={{
                  margin: "9px"
                }}
              />
              Burn It
            </p>
            <p className="pull-right">
              <span
                className="glyphicon glyphicon-thumbs-up"
                style={{
                  margin: "9px"
                }}
              />
              Butter It
            </p>
            <input type="button" value="Delete Post" onClick={this.deleteIt} />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
