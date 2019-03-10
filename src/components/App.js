import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import '../css/App.css';
import Navbar from './Navbar';
import DropDown from './DropDown';
import Header from './Header';
import AddShop from './AddShop';

class App extends Component {
	constructor(props) {
        super(props)
    } 
	render() {
		return (
			<BrowserRouter>
				<div className=''>
					<Navbar />
					<div className=''>
						<Route exact path="/" component={DropDown} />
						<Route path="/DropDown" component={DropDown} />
						<Route path="/Header" render={ () => <Header items = {this.props.state.menu} />} />
						<Route path="/AddShop" render={ () => <AddShop shops = {this.props.state.shops} />} />
					</div>
				</div>
			</BrowserRouter>	
		);
	}
}

export default App;
