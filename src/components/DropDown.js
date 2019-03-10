import React, { Component } from 'react';

class DropDown extends Component {
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
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <div> Here is my DropDown </div>;
        };
        return ( 
            <div onClick = {this.toggleState.bind(this)}>
                Its dropDown baby {dropDownText}
            </div>
        );
    }
}
export default DropDown;