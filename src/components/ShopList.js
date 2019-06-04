import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

class ShopList extends Component {
    render() {
		return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody> 
                {
                    this.props.shops.map((shop, i) => {
                        return ( 
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{shop.name}</td>
                                <td>{shop.city}</td>
                                <td>{shop.address}</td>
                            </tr>
                        )
                    }
                    )
                }
                </tbody>
            </Table> 
		);
	}
}

const mapStateToProps = (state) => {
    return {
        shops: state.shopsList.shops
    }
}

export default connect(mapStateToProps)(ShopList);