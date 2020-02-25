import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box, Tooltip } from "@material-ui/core";

export class YesNoMaybe extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            {this.props.step.tooltip != null ? (
              <Tooltip title={this.props.step.tooltip} arrow>
                <h1>{this.props.step.questionText}</h1>
              </Tooltip>
            ) : (
              <h1>{this.props.step.questionText}</h1>
            )}
            <Box component="span">
              <Container maxWidth="sm">
                <Button
                  variant="contained"
                  color="secondary"
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep({ Yes: false, No: true, Maybe: false });
                  }}
                >
                  No
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  primary={"true"}
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep({ Yes: true, No: false, Maybe: false });
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  primary={"true"}
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep({ Yes: false, No: false, Maybe: true });
                  }}
                >
                  Maybe
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

export default YesNoMaybe;
