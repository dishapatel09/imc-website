import React, { Component } from 'react';
import Button from 'react-uikit-button';

class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = { TextBoxValue: "" }
    }

    SubmitValue = (e) => {
        this.props.handleData(this.state.TextBoxValue)
    }

    onChange = (e) => {
        this.setState({ TextBoxValue: e.target.value })
    }
    render() {
        return (
            <div className="">
                <input type="text" name="TextBox" onChange={this.onChange}
                />
                <Button onClick={this.SubmitValue}>Submit Value</Button>
            </div>
        );
    }
}

export default Parent;
