import React, { Component } from "react";
import Ending from "./Ending";
import Start from "./Start";
import Help from "./Help";
import YesNoMaybe from "./YesNoMaybe.js";
import IDForm from "./IDForm.js";
import CheckboxStep from "./CheckboxStep.js";
import Referral from "./Referral.js";
import { MuiThemeProvider } from "material-ui/styles";
import Fab from "@material-ui/core/Fab";
import { Box } from "@material-ui/core";

export class UserForm extends Component {
  state = {
    step: "Start",
    prevSteps: ["Start"],
    email: null,
    referralIndex: 0,
    steps: {
      Start: {
        questionType: "Start",
        get nextStep() {
          return "Q7";
        }
      },
      Q1: {
        questionType: "InputForm",
        answer: {
          name: null,
          last_name: null,
          specialization: null,
          location: null
        },
        get nextStep() {
          return this.answer.name && this.answer.last_name ? "Q4" : "Q4"; //yeah I know this makes no sense, sue me
        }
      },
      Q4: {
        questionText: "Do you own your own practice?",
        questionType: "YesNoMaybe",
        answer: {
          Yes: null,
          No: null,
          Maybe: null
        },
        get nextStep() {
          return this.answer.Yes | this.answer.Maybe ? "Q5" : "Q6";
        },
        tooltip: null
      },
      Q5: {
        questionText: "Are you the sole owner of the practice?",
        questionType: "YesNoMaybe",
        answer: {
          Yes: null,
          No: null,
          Maybe: null
        },
        get nextStep() {
          return "Q6";
        },
        tooltip: null
      },
      Q6: {
        questionText:
          "Are you referring patients to another entity that provides health care services?",
        questionType: "YesNoMaybe",
        answer: {
          Yes: null,
          No: null,
          Maybe: null
        },
        get nextStep() {
          return this.answer.Yes | this.answer.Maybe ? "End" : "End";
        },
        tooltip:
          "An entity includes individual healthcare providers or healthcare organizations."
      },
      /*
      Step4: {
        questionText:
          "Does that healthcare provider furnish designated health services or DHS?",
        questionType: "CheckboxStep",
        answer: [
          {
            key: "clinic",
            label: "Clinical Laboratory Services",
            value: false
          },
          {
            key: "physicalTherapy",
            label: "Physical Therapy Services",
            value: false
          },
          {
            key: "radiology",
            label: "Radiology and Imaging Services",
            value: false
          },
          {
            key: "radiation",
            label: "Radiation Therapy Services and Supplies",
            value: false
          },
          {
            key: "equipment",
            label: "Durable medical equipment and supplies",
            value: false
          },
          {
            key: "nutrients",
            label: "Parenteral and enteral nutrients, equipment and supplies",
            value: false
          },
          {
            key: "prosthetics",
            label:
              "Prosthetics, orthotics, and prosthetic devices and supplies",
            value: false
          },
          {
            key: "homeHealth",
            label: "Home health services",
            value: false
          },
          {
            key: "outpatientDrugs",
            label: "Outpatient prescription drugs",
            value: false
          },
          {
            key: "hospitalServices",
            label: "Inpatient and outpatient hospital services",
            value: false
          },
          {
            key: "other",
            label: "Other",
            value: false,
            text: ""
          }
        ],
        get nextStep() {
          return this.answer.filter(el => el.value).length > 0
            ? "Step5"
            : "End";
        },
        tooltip: null
      },
      Step5: {
        questionText:
          "Do you or one of your immediate family members have a financial relationship with the health care provider you are referring to?",
        questionType: "YesNoMaybe",
        answer: {
          Yes: null,
          No: null,
          Maybe: null
        },
        get nextStep() {
          return this.answer.Yes | this.answer.Maybe ? "Step6" : "End";
        },
        tooltip:
          "Immediate family means husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild."
      },
      Step6: {
        questionText:
          "Do you or your immediate family membership have an ownership realtionship with the health care provider?",
        questionType: "YesNoMaybe",
        answer: {
          Yes: null,
          No: null,
          Maybe: null
        },
        get nextStep() {
          return this.answer.Yes | this.answer.Maybe ? "Step7" : "End";
        },
        tooltip:
          "Immediate family means husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild."
      },
      */
      Q7: {
        questionType: "Referral",
        questionText: "To which entities are you making the referral?",
        answer: [
          {
            medicareU: null,
            medicareE: null,
            entityName: null,
            healthService: null,
            ownershipInterests: [
              {
                key: "stock",
                label: "Stock",
                value: false
              },
              {
                key: "stockOptions",
                label: "Stock Options",
                value: false
              },
              {
                key: "LLC",
                label:
                  "Membership interest in a limited liability corporation (“LLC”)",
                value: false
              },
              {
                key: "partnershipShares",
                label: "Partnership Shares",
                value: false
              },
              {
                key: "loans",
                label: "Loans",
                value: false
              },
              {
                key: "bonds",
                label: "Bonds",
                value: false
              },
              {
                key: "other",
                label: "Other",
                value: false
              },
              {
                key: "none",
                label: "None of the above",
                value: false
              }
            ]
          }
        ],
        get nextStep() {
          return this.answer.length !== 0 ? "Q8" : "End";
        }
      },
      Q8: {
        questionText:
          "Does that healthcare provider furnish designated health services or DHS?",
        questionType: "CheckboxStep",
        answer: [
          {
            key: "clinic",
            label: "Clinical Laboratory Services",
            value: []
          },
          {
            key: "physicalTherapy",
            label: "Physical Therapy Services",
            value: []
          },
          {
            key: "radiology",
            label: "Radiology and Imaging Services",
            value: []
          },
          {
            key: "radiation",
            label: "Radiation Therapy Services and Supplies",
            value: []
          },
          {
            key: "equipment",
            label: "Durable medical equipment and supplies",
            value: []
          },
          {
            key: "nutrients",
            label: "Parenteral and enteral nutrients, equipment and supplies",
            value: []
          },
          {
            key: "prosthetics",
            label:
              "Prosthetics, orthotics, and prosthetic devices and supplies",
            value: []
          },
          {
            key: "homeHealth",
            label: "Home health services",
            value: []
          },
          {
            key: "outpatientDrugs",
            label: "Outpatient prescription drugs",
            value: []
          },
          {
            key: "hospitalServices",
            label: "Inpatient and outpatient hospital services",
            value: []
          },
          {
            key: "other",
            label: "Other",
            value: [],
            text: ""
          }
        ],
        get nextStep() {
          return this.answer.filter(el => el.value).length > 0
            ? "Step7"
            : "End";
        },
        tooltip: null
      },
      End: {
        questionType: "End"
      },
      Help: {
        questionType: "Help"
      }
    }
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
        medicareU: null,
        medicareE: null,
        entityName: null,
        healthService: null,
        ownershipInterests: [
          {
            key: "stock",
            label: "Stock",
            value: false
          },
          {
            key: "stockOptions",
            label: "Stock Options",
            value: false
          },
          {
            key: "LLC",
            label:
              "Membership interest in a limited liability corporation (“LLC”)",
            value: false
          },
          {
            key: "partnershipShares",
            label: "Partnership Shares",
            value: false
          },
          {
            key: "loans",
            label: "Loans",
            value: false
          },
          {
            key: "bonds",
            label: "Bonds",
            value: false
          },
          {
            key: "other",
            label: "Other",
            value: false
          },
          {
            key: "none",
            label: "None of the above",
            value: false
          }
        ]
      });
      return {
        ...prevState,
        steps: steps
      };
    });
  };
  render() {
    if (this.state.steps[this.state.step].questionType === "Referral") {
      console.log(this.state.steps["Q7"].answer);
      return (
        <MuiThemeProvider>
          <Box component="span">
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
                  let steps = Object.assign({}, prevState.steps);
                  let step = prevState.steps[this.state.step].nextStep;
                  let prevSteps = prevState.prevSteps.concat(prevState.step);
                  return {
                    ...prevState,
                    steps: steps,
                    step: step,
                    prevSteps: prevSteps
                  };
                });
              }}
            />
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
    } else if (this.state.steps[this.state.step].questionType === "InputForm") {
      return (
        <MuiThemeProvider>
          <Box component="span">
            <IDForm
              step={this.state.steps[this.state.step]}
              nextStep={answer => {
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
              }}
            />
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
    } else if (
      this.state.steps[this.state.step].questionType === "YesNoMaybe"
    ) {
      return (
        <MuiThemeProvider>
          <Box component="span">
            <YesNoMaybe
              step={this.state.steps[this.state.step]}
              nextStep={answer => {
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
              }}
            />
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
    } else if (
      this.state.steps[this.state.step].questionType === "CheckboxStep"
    ) {
      return (
        <MuiThemeProvider>
          <Box component="span">
            <Fab
              color="primary"
              aria-label="add"
              style={styles.backFab}
              onClick={this.goBack}
            >
              Back
            </Fab>
            <CheckboxStep
              step={this.state.steps[this.state.step]}
              nextStep={answer => {
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
              }}
            />
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
    } else if (this.state.steps[this.state.step].questionType === "End") {
      return <Ending goBack={this.goBack} />;
    } else if (this.state.steps[this.state.step].questionType === "Help") {
      return <Help goBack={this.goBack} />;
    } else return null;
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
