import React, {Component} from 'react';

class NewPostItems extends Component {
	createTasks(post) {
		return <li key={post.key}>{post.text}</li>;
	}

	render() {
		var newPostEntries = this.props.entries;
		var listItems = newPostEntries.map(
			this.createTasks
		);

		return <ul className='theList'>{listItems}</ul>;
	}
}

export default NewPostItems;
