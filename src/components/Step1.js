import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box, Tooltip } from "@material-ui/core";

const physician =
  "A physician means a doctor of medicine or osteopathy, a doctor of dental surgery or dental medicine, a doctor of podiatric medicine, a doctor of optometry, or a chiropractor. A physician and the professional corporation of which he or she is a sole owner are the same for purposes of this definition.";

export class Step1 extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Tooltip title={physician} arrow>
              <h1>Are you a physician?</h1>
            </Tooltip>
            <Box component="span">
              <Container maxWidth="sm">
                <Button
                  variant="contained"
                  color="secondary"
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep("NO");
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
                    this.props.nextStep("YES");
                  }}
                >
                  Yes
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

export default Step1;
