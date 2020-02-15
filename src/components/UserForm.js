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
        this.setState({[input]: e.target.value});
    }

    wrapComponent = (Component) => {
        return(
            <MuiThemeProvider>
                <AppBar title="Stark Law review"/>
                <Component/>
            </MuiThemeProvider>
        )
    }

    render() {
        const { step } = this.state;
        const { email, physician } = this.state;
        const values = { email, physician }
        
        switch(step) {
            case 'Step1':
                return (
                    <this.wrapComponent Component={
                        <Step1 
                            nextStep={this.nextStep}
                            jumpToEnd={this.jumpToEnd}
                            values={values}
                        />
                    }/>
                )

            case 'Step2':
                return (
                    <this.wrapComponent Component={
                        <Step2 
                            nextStep={this.nextStep}
                            jumpToEnd={this.jumpToEnd}
                            values={values}
                        />
                    }/>
                )

            case 'End':
                return (
                    <this.wrapComponent Component={
                        <Ending 
                            goBack={this.goBack}
                            values={values}
                        />
                    }/>
                )
        }
    }
}

export default UserForm
