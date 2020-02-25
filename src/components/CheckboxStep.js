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
  TextField,
  Button
} from "@material-ui/core";

export class CheckboxStep extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      healthServices: props.step.answer
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
                      <Button
                        variant="contained"
                        color="primary"
                        primary={"true"}
                        onClick={() => {
                          var checked =
                            this.state.healthServices.filter(el => el.value)
                              .length > 0;
                          this.props.nextStep(this.state.healthServices);
                        }}
                      >
                        Next
                      </Button>
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

export default CheckboxStep;
