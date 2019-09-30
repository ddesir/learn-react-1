import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Student(props) {
	return <div className='red-text'>- {props.name} is in class</div>;
}

class App extends React.Component {
	constructor(props) {
		super(props);	// required so that props work
		this.state = {
			clicks: 0,
		};
	}
	
	handleClick(event) {
		this.setState({
			clicks: this.state.clicks + 1
		});
	}
	
	render() {
		return (
			<div>
				<p>The button has been clicked { this.state.clicks } times</p>
				<button onClick={ (e) => this.handleClick(e) }>{ this.props.btnText }!!!</button>
			</div>
		);
	}
}

ReactDOM.render(
	<App btnText='Click me' />,
	document.getElementById("root")
);