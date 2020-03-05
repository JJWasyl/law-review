import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export class Start extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <h1>Welcome to the assisted Stark Law review</h1>
          </Container>
          <Container maxWidth="sm">
            <Card style={styles.cardmain}>
              <CardContent>
                <CardMedia 
                  style={styles.media}
                  image={require("./media/stark_doc.png")}
                  title="Keep your work clean"
                />
                <Typography variant="h5" component="h2" style={styles.cardmain}>
                  What is the Stark Law?
                </Typography>
                <Typography variant="body2" component="p" align="justify">
                  The Stark Law prohibits a physician from making a referral for designated health 
                  services to an entity payable by Medicare if the physician or an immediate family 
                  member has a financial relationship with that entity. Violation of the Stark law 
                  may result in large monetary penalties. 
                  <br />
                  Physicians need to consult lawyers to recognize illegal compensation 
                  for services or referrals that may not be immediately apparent. However Hiring a
                  lawyer can be expensive, which is why <strong> CLEAR STATE </strong> offers an
                  easy way to get you started on your legal review!
                </Typography>
                <Box component="span">
                  <Container maxWidth="sm">
                    <Button
                      variant="contained"
                      color="primary"
                      primary={"true"}
                      style={styles.button}
                      onClick={this.props.nextStep}
                    >
                      Begin
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
    marginTop: 15
  },
  cardmain: {
    minWidth: 275,
    margin: 15,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
    paddingTop: '15%',
  },
};

export default Start;
