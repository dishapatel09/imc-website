import React, { Component } from 'react';
import { render } from 'react-dom';
import Parent from './parent';
import Child from './child';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            parentTextBoxValue: ''
        };
    }
    handleParentData = (e) => {
        this.setState({ parentTextBoxValue: e })
    }

    render() {
        return (
            <div>
                <Parent handleData={this.handleParentData} />
                <Child parentTextBoxValue={this.state.parentTextBoxValue} />
            </div>
        );
    }
}

render(<App />, document.getElementById('content'));

//import Parent from './stepOne';


//class MasterForm extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            currentStep: 1,
//            email: '',
//            username: '',
//            password: ''
//        };
//    }

//    handleChange = event => {
//        const { name, value } = event.target;
//        this.setState({
//            [name]: value
//        });
//    }

//    handleSubmit = event => {
//        event.preventDefault();
//        const { email, username, password } = this.state;
//        alert(`Your registration detail: \n 
//           Email: ${email} \n 
//           Username: ${username} \n
//           Password: ${password}`);
//    }

//    _next = () => {
//        let currentStep = this.state.currentStep;
//        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
//        this.setState({
//            currentStep: currentStep
//        });
//    }

//    _prev = () => {
//        let currentStep = this.state.currentStep;
//        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
//        this.setState({
//            currentStep: currentStep
//        });
//    }

//    /*
//    * the functions for our button
//    */
//    previousButton() {
//        let currentStep = this.state.currentStep;
//        if (currentStep !== 1) {
//            return (
//                <button
//                    className="btn btn-secondary"
//                    type="button" onClick={this._prev}>
//                    Previous
//                </button>
//            );
//        }
//        return null;
//    }

//    nextButton() {
//        let currentStep = this.state.currentStep;
//        if (currentStep < 3) {
//            return (
//                <button
//                    className="btn btn-primary float-right"
//                    type="button" onClick={this._next}>
//                    Next
//                </button>
//            );
//        }
//        return null;
//    }

//    render() {
//        return (
//            <React.Fragment>
//                <h1>React Wizard Form </h1>
//                <p>Step {this.state.currentStep} </p>

//                <form onSubmit={this.handleSubmit}>
//                    {/* 
//        render the form steps and pass required props in
//      */}
//                    <Parent
//                        currentStep={this.state.currentStep}
//                        handleChange={this.handleChange}
//                        email={this.state.email}
//                    />
                    
//                    {this.previousButton()}
//                    {this.nextButton()}

//                </form>
//            </React.Fragment>
//        );
//    }
//}




//ReactDOM.render(<MasterForm />, document.getElementById('content'));
