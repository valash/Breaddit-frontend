// import React, {Component} from 'react';
// import NewPostItems from './NewPostItems.js';

// class NewPost2 extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			posts: []
// 		};
// 		this.addPost = this.addPost.bind(this);
// 		this.deletePost = this.deletePost.bind(this);
// 	}

// 	addPost(e) {
// 		if (this._inputElement.value !== ' ') {
// 			var newPost = {
// 				text: this._inputElement.value,
// 				key: Date.now()
// 			};

// 			this.setState((prevState) => {
// 				return {
// 					posts: prevState.posts.concat(newPost)
// 				};
// 			});

// 			this._inputElement.value = ' ';
// 		}
// 		console.log(this.state.posts);

// 		e.preventDefault();
// 	}
// 	deletePost(key) {
// 		var filteredPosts = this.state.posts.filter(
// 			function(post) {
// 				return post.key !== key;
// 			}
// 		);
// 		this.setState({
// 			posts: filteredPosts
// 		});
// 	}
// 	render() {
// 		return (
// 			<div className='newPostMain'>
// 				<div className='header'>
// 					<form onSubmit={this.addPost}>
// 						<input
// 							ref={(a) =>
// 								(this._inputElement = a)
// 							}
// 							placeholder='new toast'
// 						/>
// 						<button type='submit'>add</button>
// 					</form>
// 				</div>
// 				<NewPostItems
// 					entries={this.state.posts}
// 					delete={this.deletePost}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default NewPost2;
