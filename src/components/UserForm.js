import React, { Component } from 'react';
import Step1 from './Step1';

export class UserForm extends Component {
    state = {
        step: 1,
        email: '',
        physician: false,
    }

    // Goto next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Goto previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { email, physician } = this.state;
        const values = { email, physician }
        
        switch(step) {
            case 1:
                return (
                    <Step1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            
            case 2:
                return <h1>question WIP</h1>

            case 3:
                return <h1>Confirm</h1>

            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm
