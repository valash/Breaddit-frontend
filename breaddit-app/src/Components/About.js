import React, {Component} from 'react';
import Chase from './aboutImages/Chase.jpg';
import Joey from './aboutImages/Joey.jpg';
import VA from './aboutImages/VA.jpg';
import Alsia from './aboutImages/Alsia.jpg';

class About extends Component {
	render() {
		return (
			<div
				className='card-deck'
				style={{
					textAlign: 'center',
					marginTop: '18%'
				}}>
				<div className='card'>
					<img
						className='card-img-top'
						src={Alsia}
						alt='Alsia pic'
						style={{
							height: '180px',
							width: '267px:',
							marginLeft: 'auto'
						}}
					/>
					<div className='card-body'>
						<h5 className='card-title'>
							Alsia
						</h5>
						<p className='card-text'>
							This is a wider card with
							supporting text below as a
							natural lead-in to additional
							content. This card has even
							longer content than the first to
							show that equal height action.
						</p>
					</div>
				</div>
				<div className='card'>
					<img
						className='card-img-top'
						src={Chase}
						alt='Chase pic'
						style={{
							height: '180px',
							width: '267px:',
							marginLeft: 'auto'
						}}
					/>
					<div className='card-body'>
						<h5 className='card-title'>
							Chase
						</h5>
						<p className='card-text'>
							This is a wider card with
							supporting text below as a
							natural lead-in to additional
							content. This card has even
							longer content than the first to
							show that equal height action.
						</p>
					</div>
				</div>
				<div className='card'>
					<img
						className='card-img-top'
						src={VA}
						alt='VA pic'
						style={{
							height: '180px',
							width: '267px:',
							marginLeft: 'auto'
						}}
					/>
					<div className='card-body'>
						<h5 className='card-title'>
							Virginia
						</h5>
						<p className='card-text'>
							This is a wider card with
							supporting text below as a
							natural lead-in to additional
							content. This card has even
							longer content than the first to
							show that equal height action.
						</p>
					</div>
				</div>
				<div className='card'>
					<img
						className='card-img-top'
						src={Joey}
						alt='Joey pic'
						style={{
							height: '180px',
							width: '267px:',
							marginLeft: 'auto'
						}}
					/>
					<div className='card-body'>
						<h5 className='card-title'>Joey</h5>
						<p className='card-text'>
							This is a wider card with
							supporting text below as a
							natural lead-in to additional
							content. This card has even
							longer content than the first to
							show that equal height action.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
