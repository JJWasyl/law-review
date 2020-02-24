import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";

export class Help extends Component {
  back = e => {
    e.preventDefault();
    this.props.goBack();
  };

  dummy = e => {
    e.preventDefault();
    console.log("I called your mom to pick you up");
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <h1>Stuck?</h1>
            We can provide personal help with your Stark Law case.
            <Box component="span">
              <Container maxWidth="sm">
                <Button
                  variant="contained"
                  color="primary"
                  primary={"true"}
                  style={styles.button}
                  onClick={this.back}
                >
                  Go Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  primary={"true"}
                  style={styles.button}
                  onClick={this.dummy}
                >
                  Contact Us
                </Button>
              </Container>
            </Box>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Help;
