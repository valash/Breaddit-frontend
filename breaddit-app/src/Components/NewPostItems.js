// import React, {Component} from 'react';

// class NewPostItems extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.createPosts = this.createPosts.bind(this);
// 	}
// 	delete(key) {
// 		this.props.delete(key);
// 	}
// 	createTasks(post) {
// 		return (
// 			<li
// 				onCLick={() => this.delete(post.key)}
// 				key={post.key}>
// 				{post.text}
// 			</li>
// 		);
// 	}
// 	render() {
// 		var newPostEntries = this.props.entries;
// 		var listItems = newPostEntries.map(
// 			this.createPosts
// 		);

// 		return <ul className='theList'>{listItems}</ul>;
// 	}
// }

// export default NewPostItems;
