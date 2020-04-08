import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

export class IDForm extends Component {
  state = {
    error: {
      name: false,
      last_name: false
    },
    ID_details: {
      name: "",
      last_name: "",
      specialization: "",
      location: "",
      employer: ""
    }
  };

  errOnChange = (e, field) => {
    if (e.target.value !== "") {
      let state_copy = Object.assign({}, this.state);
      state_copy.errortext = "";
      state_copy.error[field] = false;
      state_copy.ID_details[field] = e.target.value;
      this.setState(state_copy);
    } else {
      let state_copy = Object.assign({}, this.state);
      state_copy.errortext = "Field Required";
      state_copy.error[field] = true;
      state_copy.ID_details[field] = "";
      this.setState(state_copy);
    }
  };

  onChange = (e, field) => {
    let state_copy = Object.assign({}, this.state);
    state_copy.ID_details[field] = e.target.value;
    this.setState(state_copy);
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Card style={styles.cardRoot}>
              <CardContent style={styles.cardmain}>
                <Box component="span">
                  <form noValidate autoComplete="off">
                    <Container maxWidth="sm" style={styles.textfields}>
                      <TextField
                        required={!this.state.error.name}
                        error={this.state.error.name}
                        id="standard-required"
                        label="Name"
                        placeholder="Name"
                        helperText={this.state.error.name ? "Required" : " "}
                        onChange={e => this.errOnChange(e, "name")}
                        style={{ margin: 8 }}
                      />
                      <TextField
                        required={!this.state.error.last_name}
                        error={this.state.error.last_name}
                        id="standard-required"
                        label="Last Name"
                        placeholder="Last Name"
                        helperText={
                          this.state.error.last_name ? "Required" : " "
                        }
                        onChange={e => this.errOnChange(e, "last_name")}
                        style={{ margin: 8 }}
                      />
                      <TextField
                        id="standard-full-width"
                        fullWidth
                        placeholder="Area of Speciality"
                        style={{ margin: 8 }}
                        onChange={e => this.onChange(e, "specialization")}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                      <TextField
                        id="standard-full-width"
                        fullWidth
                        placeholder="Location"
                        style={{ margin: 8 }}
                        onChange={e => this.onChange(e, "location")}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                      <TextField
                        id="standard-full-width"
                        fullWidth
                        placeholder="Employer"
                        style={{ margin: 8 }}
                        onChange={e => this.onChange(e, "employer")}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Container>
                  </form>
                  <Container maxWidth="sm">
                    <Button
                      variant="contained"
                      color="primary"
                      primary={"true"}
                      style={styles.button}
                      onClick={() => {
                        console.log(this.state);
                        if (
                          this.state.ID_details.name !== "" &&
                          this.state.ID_details.last_name !== ""
                        ) {
                          this.props.nextStep({
                            ...this.state.ID_details
                          });
                        } else {
                          let state_copy = Object.assign({}, this.state);
                          if (this.state.ID_details.name === "") {
                            state_copy.error.name = true;
                          }
                          if (this.state.ID_details.last_name === "") {
                            state_copy.error.last_name = true;
                          }
                          this.setState(state_copy);
                        }
                      }}
                    >
                      Next
                    </Button>
                  </Container>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  cardRoot: {
    margin: 15
  },
  cardmain: {
    minWidth: 275,
    margin: 15
  },
  textfields: {
    display: "flex",
    flexWrap: "wrap"
  },
  titleSpace: {
    marginBottom: 15,
    display: "inline-block"
  }
};

export default IDForm;
