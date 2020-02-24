import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box, Tooltip } from "@material-ui/core";

export class Step5 extends Component {
  render() {
    const immediateFamily =
      " Immediate family means husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild.";
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Tooltip title={immediateFamily} arrow>
              <h1>
                What type of financial relationship do you or your immediate
                family membership have with the health care provider?
              </h1>
            </Tooltip>
            <Box component="span">
              <Container maxWidth="sm">
                <Button
                  variant="contained"
                  color="secondary"
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep("YES");
                  }}
                >
                  An Ownership Relationship
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  primary={"true"}
                  style={styles.button}
                  onClick={() => {
                    this.props.nextStep("NO");
                  }}
                >
                  A Compensation Relationship
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

export default Step5;
