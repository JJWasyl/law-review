import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
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
                  image={require("./media/health-care-blocks.jpg")}
                  title="Keep your work clean"
                />
                <Typography variant="h5" component="h2" style={styles.cardmain}>
                  Why am I at risk? 
                </Typography>
                <Typography variant="body2" component="p" align="justify">
                  Today's physicians face many offers of partnership or gratitude.
                  However some of them are illegal and could cost you significant 
                  fines if left unanswered.
                  <br />
                  With this short interview, we can help you screen for risky 
                  enterprises and help you avoid a confrontation with Johnny Law.
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
