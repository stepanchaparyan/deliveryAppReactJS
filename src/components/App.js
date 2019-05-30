import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/App.css';
import Navbar from './Navbar';
import Deliver from './Deliver';
import Header from './Header';
import AddShop from './AddShop';

class App extends Component {

	render() {
		return (
			<Router>
				<div className='main'>
					<Navbar />
					<div className='pages'>
						<Route exact path="/" component={Deliver} />
						<Route exact path="/Deliver" component={Deliver} />
						<Route exact path="/Header" render={ () => <Header items = {this.props.state.menu} />} />
						<Route exact path="/AddShop" render={ () => <AddShop shops = {this.props.state.shops} />} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
