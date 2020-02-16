import React, { Component } from 'react';
import dialogueTree from './helpStructs.js';
import Step1 from './Step1';
import Step2 from './Step2'
import Ending from './Ending'
import AppBar from 'material-ui/AppBar';
import { MuiThemeProvider } from 'material-ui/styles';

export class UserForm extends Component {
    state = {
        step: 'Step1',
        prevStep: '',
        email: '',
        physician: false,
    }

    // Goto next step can work for 'next' and 'previous'
    nextStep = (action) => {
        const { step } = this.state;
        this.setState({
            prevStep: step,
            step: dialogueTree[step][action]
        });
    }

    // Return to previously viewed step
    goBack = () => {
        const { step, prevStep } = this.state;
        this.setState({
            step: prevStep,
            prevStep: ''
        });
    }

    // Goto 'no-risk' ending
    jumpToEnd = () => {
        const { step } = this.state;
        this.setState({
            prevStep: step,
            step: 'End'
        })
    }

    // Auto save for textfield input
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { email, physician } = this.state;
        const values = { email, physician }
        const components = [
            <Ending
            goBack={this.goBack}
            values={values}
            />,

            <Step1
                nextStep={this.nextStep}
                jumpToEnd={this.jumpToEnd}
                values={values}
            />,
            <Step2
                nextStep={this.nextStep}
                jumpToEnd={this.jumpToEnd}
                values={values}
            />
        ]

        const ourSteps = components.map((comp) => {
            return(<MuiThemeProvider>
            <AppBar title="Stark Law review" />
            {comp}
            </MuiThemeProvider>)
        }); 

        switch (step) {
            case 'Step1':
                return (ourSteps[1])

            case 'Step2':
                return (ourSteps[2])

            case 'End':
                return (ourSteps[0])
        }
    }
}

export default UserForm
