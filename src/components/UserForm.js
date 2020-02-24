import React, { Component } from "react";
import dialogueTree from "./helpStructs.js";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Ending from "./Ending";
import Start from "./Start";
import Help from "./Help";
import AppBar from "material-ui/AppBar";
import { MuiThemeProvider } from "material-ui/styles";
import Fab from '@material-ui/core/Fab';
import { Box } from '@material-ui/core';

export class UserForm extends Component {
  state = {
    step: "100",
    prevStep: null,
    email: null,
    referralEntity: []
  };

  // Goto next step can work for 'next' and 'previous'
  nextStep = action => {
    const { step } = this.state;
    this.setState({
      prevStep: step,
      step: dialogueTree[step][action]
    });
  };

  // Return to previously viewed step
  goBack = () => {
    const { step, prevStep } = this.state;
    this.setState({
      step: prevStep,
      prevStep: step,
    });
  };

  // Jump to help screen
  needHelp = () => {
    const { step } = this.state;
    this.setState({
      prevStep: step,
      step: "102"
    });
  };

  // Auto save for textfield input
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, referralEntity } = this.state;
    const values = { email, referralEntity };
    const components = {
      "1": <Step1
        nextStep={this.nextStep}
        jumpToEnd={this.jumpToEnd}
        values={values}
      />,
      "2": <Step2
        nextStep={this.nextStep}
        jumpToEnd={this.jumpToEnd}
        values={values}
      />,
      "3": <Step3
        nextStep={this.nextStep}
        jumpToEnd={this.jumpToEnd}
        values={values}
      />,
      "4": <Step4
        nextStep={this.nextStep}
        jumpToEnd={this.jumpToEnd}
        values={values}
      />,
      "5": <Step5
        nextStep={this.nextStep}
        jumpToEnd={this.jumpToEnd}
        values={values}
      />,
      "6": <Step6
        nextStep={this.nextStep}
        jumpToEnd={this.jumpToEnd}
        values={values}
      />,
      "100": <Start
        nextStep={this.nextStep}
        jumpToEnd={this.nextStep}
        values={values}
      />,
      "101": <Ending goBack={this.goBack} values={values} />,
      "102": <Help goBack={this.goBack} values={values} />,
    };
    
    const wrappedComps = objectMap(components, function(comp) {
      var self = this;
      return (
        <MuiThemeProvider>
          <Box component="span">
            <AppBar title="Stark Law review" />
            {comp}
            <Fab color="primary" 
              aria-label="add" 
              style={styles.fab}
              onClick={() => {self.needHelp()}}>
              Help
            </Fab>
          </Box>
        </MuiThemeProvider>  
      );
    });
    console.log(step);
    return wrappedComps[step];
  }
}

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

const styles = {
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  }
};

export default UserForm;
