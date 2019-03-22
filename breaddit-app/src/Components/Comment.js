import React, {Component} from 'react';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {comments: []};
		this.commentCreate = this.commentCreate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addComment = this.addComment.bind(this);
	}
	commentCreate(event) {
		event.preventDefault();
		this.setState({comments: [event.target.value]});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({comments: []});
		console.log(this.state.comments);
	}
	addComment = () => {
		this.setState(() => {
			this.setState({
				comments: [
					...this.state.comments,
					this.state.comments
				]
			});
		});
	};
	render() {
		return (
			<div className='card' style={{border: 'none'}}>
				{/* Need to find a way to push input into this array i just created so that multiple comments can appear on the page */}
				<div
					className='card-title'
					style={{
						fontSize: 'xx-large',
						marginTop: '50px'
					}}>
					I am from the Comment Component!
				</div>
				<form
					className='makeComment'
					onSubmit={this.handleSubmit}
					style={{
						display: 'grid'
					}}>
					<textarea
						placeholder='comment'
						maxLength='125'
						onChange={this.commentCreate}
						value={this.state.comments}
						style={{
							height: '100px',
							marginBottom: '10px'
						}}
					/>
					<input
						type='submit'
						value='Add Comment'
						onClick={this.addComment}
						style={{
							width: 'fit-content',
							marginTop: '10px',
							margin: 'auto',
							borderRadius: '6px',
							border: '0.8px solid grey'
						}}
					/>
				</form>
				<p>New comments should appear here:</p>
				{this.state.comments}
			</div>
		);
	}
}

export default Comment;
