import React, { Component } from 'react';
import '../css/AddShop.css';
import { Form, Input, Button } from 'reactstrap';
import MyTable from './MyTable';


class AddShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            address: '',
            shops: []
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.shops.push(...this.props.shops);
        console.log(this.state.shops);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeCity(event) {
        this.setState({city: event.target.value});
    }
    handleChangeAddress(event) {
        this.setState({address: event.target.value});
    }

    emptyInputs() {
        this.setState({
            name: '',
            city: '',
            address: '',
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let newshop = {
            name: this.state.name,
            city: this.state.city,
            address: this.state.address
        };
        this.state.shops.push(newshop);
        this.setState({shops : this.state.shops});
        this.emptyInputs();
        console.log(this.state.shops);
    }

	render() {
		return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChangeName}/>
                <Input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChangeCity}/>
                <Input type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChangeAddress}/>
                <Button type="submit" value="Submit" color="primary" size="lg" block>Save</Button>
            </Form>
            <MyTable shops={this.state.shops} />
            </div>		
		);
	}
}

export default AddShop;
