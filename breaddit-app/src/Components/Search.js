import React, {Component} from 'react';

class Search extends Component {
	render() {
		return (
			<form>
				<input
					style={{margin: '10px'}}
					type='text'
					name='post'
				/>
				<button>Submit</button>
			</form>
		);
	}
}

export default Search;
