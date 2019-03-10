import React, { Component } from 'react';
import '../css/AddShop.css';
import { Table } from 'reactstrap';


class MyTable extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
    }    

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

export default MyTable;
