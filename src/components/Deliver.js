import React, { Component } from 'react';

class Deliver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
    }

    toggleState() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        console.log('isOpened', this.state.isOpened);
        let deliverText;
        if (this.state.isOpened) {
            deliverText = <div> Here is my Deliver </div>;
        };
        return ( 
            <div onClick = {this.toggleState.bind(this)}>
                Its deliver baby {deliverText}
            </div>
        );
    }
}
export default Deliver;