import React, { Component } from 'react';
import '../css/AddShop.css';
import ShopList from './ShopList';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'reactstrap';
import * as actionCreator from '../store/Actions/actions';
import { DebounceInput } from 'react-debounce-input';

class AddShop2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
        console.log(this.state);
    }

    handleSumbit = (e) => {
        this.props.addShop(this.state);
        this.setState({
            name: '',
            city: '',
            address: '',
        });
    }

    render() {
        return (
            <React.Fragment>
                <ShopList />
                <div className='inputs'>
                    <DebounceInput debounceTimeout={500} onChange={this.handleChange} value={this.state.name} name='name' placeholder="Name" type="text" className='input' />
                    <DebounceInput debounceTimeout={500} onChange={this.handleChange} value={this.state.city} name='city' placeholder="City" type="text" className='input' />
                    <DebounceInput debounceTimeout={500} onChange={this.handleChange} value={this.state.address} name='address' placeholder="Address" type="text" className='input' />
                </div>  
                <div className='addButton'>
                    <Button id='addButton' onClick={this.handleSumbit} color="info" size="md">Add </Button>  
                </div> 
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shops: state.shopsList.shops
    }
}

const mapDispachToProps = (dispach) => {
    return {
        addShop: (newShop) => dispach(actionCreator.addNewShopAsync(newShop))
    }
}

export default connect(mapStateToProps, mapDispachToProps) (AddShop2);