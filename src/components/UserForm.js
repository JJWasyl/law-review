import React, { Component } from "react";
import Start from "./Start";
import Help from "./Help";
import YesNoMaybe from "./YesNoMaybe.js";
import IDForm from "./IDForm.js";
import CheckboxStep from "./CheckboxStep.js";
import Referral from "./Referral.js";
import { emptySteps, emptyReferralAnswer } from "./constants";
import { MuiThemeProvider } from "material-ui/styles";
import Fab from "@material-ui/core/Fab";
import { Box } from "@material-ui/core";
import CreatePDFLists from "./CreatePDFLists";

export class UserForm extends Component {
  state = {
<<<<<<< HEAD
    step: "Start",
=======
    step: "Q7",
>>>>>>> 499707bb5da1781d6cac62c61cbdd0aefff79226
    prevSteps: ["Start"],
    email: null,
    referralIndex: 0,
    steps: emptySteps
  };

  goBack = () => {
    this.setState(prevState => ({
      step: prevState.prevSteps.pop(),
      prevSteps: prevState.prevSteps.splice(this.state.prevSteps.length - 1)
    }));
  };

  updateReferrals = (newState, index) => {
    this.setState(prevState => {
      let steps = Object.assign({}, prevState.steps);
      steps["Q7"].answer[index] = { ...steps["Q7"].answer[index], ...newState };
      return {
        ...prevState,
        steps: steps
      };
    });
  };

  addReferral = () => {
    this.setState(prevState => {
      let steps = Object.assign({}, prevState.steps);
      steps["Q7"].answer = steps["Q7"].answer.concat({
        ...emptyReferralAnswer
      });
      return {
        ...prevState,
        steps: steps
      };
    });
  };

  nextStep = answer => {
    console.log(answer);
    this.setState(prevState => {
      let steps = Object.assign({}, prevState.steps);
      steps[prevState.step].answer = answer;
      let step = prevState.steps[this.state.step].nextStep;
      let prevSteps = prevState.prevSteps.concat(prevState.step);
      return {
        ...prevState,
        steps: steps,
        step: step,
        prevSteps: prevSteps
      };
    });
  };

  render() {
    let questionComponent;
    console.log(this.state);
    if (this.state.steps[this.state.step].questionType === "Start") {
      return (
        <Start
          nextStep={() => {
            this.setState(prevState => ({
              step: prevState.steps[this.state.step].nextStep
            }));
          }}
        />
      );
    } else if (this.state.steps[this.state.step].questionType === "Help") {
      return <Help goBack={this.goBack} />;
    } else if (this.state.steps[this.state.step].questionType === "End") {
      return (
        <CreatePDFLists
          goBack={this.goBack}
          steps={this.state.steps}
          step={this.state.step}
          fname={this.state.steps["Q1"].answer.name}
        />
      );
    } else if (this.state.steps[this.state.step].questionType === "Referral") {
      questionComponent = (
        <Referral
          step={this.state.steps["Q7"]}
          update={(answer, index) => {
            this.updateReferrals(answer, index);
          }}
          addReferral={() => {
            this.addReferral();
          }}
          nextStep={() => {
            this.setState(prevState => {
              let step = prevState.steps[this.state.step].nextStep;
              let prevSteps = prevState.prevSteps.concat(prevState.step);
              return {
                ...prevState,
                step: step,
                prevSteps: prevSteps
              };
            });
          }}
        />
      );
    } else if (this.state.steps[this.state.step].questionType === "InputForm") {
      questionComponent = (
        <IDForm
          step={this.state.steps[this.state.step]}
          nextStep={answer => {
            this.nextStep(answer);
          }}
        />
      );
    } else if (
      this.state.steps[this.state.step].questionType === "YesNoMaybe"
    ) {
      questionComponent = (
        <YesNoMaybe
          step={this.state.steps[this.state.step]}
          nextStep={answer => {
            this.nextStep(answer);
          }}
        />
      );
    } else if (
      this.state.steps[this.state.step].questionType === "CheckboxStep"
    ) {
      questionComponent = (
        <CheckboxStep
          step={this.state.steps[this.state.step]}
          nextStep={answer => this.nextStep(answer)}
        />
      );
    } else {
      questionComponent = null;
    }
    return (
      <MuiThemeProvider>
        <Box component="span">
          {questionComponent}
          <Fab
            color="primary"
            aria-label="add"
            style={styles.backFab}
            onClick={this.goBack}
          >
            Back
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            style={styles.helpFab}
            onClick={() => {
              this.setState({ step: "Help" });
            }}
          >
            Help
          </Fab>
        </Box>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  helpFab: {
    margin: 0,
    right: 20,
    bottom: 20,
    position: "fixed"
  },
  backFab: {
    margin: 0,
    bottom: 20,
    left: 20,
    position: "fixed"
  }
};

export default UserForm;
