import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Container,
  Box,
  FormGroup,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField
} from "@material-ui/core";

// const healthServices = [
//     {key:'clinic',label:'Clinical Laboratory Services',value:'false'},
//     {key: 'physicalTherapy',label:'Physical Therapy Services',value:'false'},
//     {key:'radiology',label:'Radiology and Imaging Services',value:'false'}
// ]

export class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // clinic: false,
      // physicalTherapy: false,
      // radiology: false,
      // radiation: false,
      // equipment: false,
      // nutrients: false,
      // prosthetics: false,
      // homeHealth: false,
      // outpatientDrugs: false,
      // hospitalServices: false,
      // other: '',
      healthServices: [
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
          label: "Prosthetics, orthotics, and prosthetic devices and supplies",
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
      ]
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <h1>
              Does that healthcare provider furnish designated health services
              or DHS?
            </h1>
            <Box component="span">
              <Container maxWidth="sm">
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <FormGroup>
                      {this.state.healthServices.map((service, index) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={service.value}
                              onChange={() => {
                                this.setState(prevState => ({
                                  healthServices: prevState.healthServices.map(
                                    el =>
                                      el.key === service.key
                                        ? { ...el, value: !el.value }
                                        : el
                                  )
                                }));
                              }}
                              value={service.value}
                            />
                          }
                          label={
                            service.key === "other" && service.value ? (
                              <TextField
                                onChange={txt => {
                                  this.setState(prevState => ({
                                    healthServices: prevState.healthServices.map(
                                      el =>
                                        el.key === service.key
                                          ? { ...el, text: txt }
                                          : el
                                    )
                                  }));
                                  console.log(service);
                                }}
                              />
                            ) : (
                              service.label
                            )
                          }
                        />
                      ))}
                    </FormGroup>
                  </FormLabel>
                </FormControl>
              </Container>
            </Box>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Step4;
