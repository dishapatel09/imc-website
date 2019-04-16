import React, { Component } from 'react';



class Child extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="App">
                <p>{this.props.parentTextBoxValue}</p>
            </div>
        );
    }
}

export default Child;
