import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		fetch('https://breaddit123.herokuapp.com/breaddit')
			.then((result) => {
				return result.json();
			})
			.then((data) =>
				this.setState(
					{
						posts: data
					},
					() => console.log(this.state)
				)
			);
	}
	render() {
		const {posts} = this.state;
		return (
			<div
				className='card-body'
				style={{textAlign: 'center'}}>
				<h1
					style={{
						marginTop: '30p'
					}}>
					B R E A D I T T
				</h1>
				<h3>
					{posts.map((post) => (
						<Link to={'/post/' + post._id}>
							<div
								className='card-body'
								style={{
									borderRadius: '1px',
									boxShadow:
										'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19',
									textAlign: 'center',
									width: '60%',
									marginTop: '40px',
									marginLeft: '20%',
									backgroundColor:
										' rgba(255, 255, 255, 0.8)'
								}}
								key={post}>
								<div
									className='card-header'
									style={{
										textAlign:
											'-webkit-left'
									}}>
									{post.title}
								</div>
								<div
									className='card-body'
									style={{
										height: '50px',
										margin: '12px'
									}}>
									{post.body}
								</div>
								<div
									className='card-footer text-muted'
									style={{
										textAlign: 'center',
										background: 'none',
										borderRadius:
											'none',
										height: '55px',
										border: 'none'
									}}>
									<p className='pull-left'>
										<span
											className='glyphicon glyphicon-thumbs-down'
											style={{
												margin:
													'9px'
											}}
										/>
										Burn It
									</p>
									<p className='pull-right'>
										<span
											className='glyphicon glyphicon-thumbs-up'
											style={{
												margin:
													'9px'
											}}
										/>
										Butter It
									</p>
								</div>
							</div>
						</Link>
					))}
				</h3>
			</div>
		);
	}
}

export default Homepage;
