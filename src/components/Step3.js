import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box, Tooltip } from "@material-ui/core";

const healthcareProviders = "A healthcare provider can be a ... ASK LAWYERS";
export class Step3 extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Tooltip title={healthcareProviders} arrow>
              <h1>Is this referral to a different healthcare provider?</h1>
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
                  primary={true}
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

export default Step3;
