import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/App.css';
import Navbar from './Navbar';
import Deliver from './Deliver';
import Header from './Header';
import AddShop from './AddShop';
import AddShop2 from './AddShop2';

class App extends Component {

	render() {
		return (
			<Router>
				<div className='main'>
					<Navbar />
					<div className='pages'>
						<Route exact path="/" render={ () => <Deliver />} />
						<Route exact path="/Deliver" render={ () => <Deliver />} />
						<Route exact path="/Header" render={ () => <Header />} />
						<Route exact path="/AddShop" render={ () => <AddShop />} />
						<Route exact path="/AddShop2" render={ () => <AddShop2 />} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
