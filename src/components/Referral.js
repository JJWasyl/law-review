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
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Paper
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import ReferralListCell from "./ReferralListCell.js";
import Fab from "@material-ui/core/Fab";

export class Referral extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      referrals: props.step.answer,
      expanded: false,
      numReferrals: [false]
    };
  }

  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Card style={styles.cardRoot}>
              <CardContent style={styles.cardmain}>
                <Typography
                  variant="h4"
                  component="h2"
                  style={styles.titleSpace}
                >
                  {this.props.step.questionText}
                  {this.props.step.tooltip != null && (
                    <IconButton
                      edge="end"
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="show more"
                      style={
                        this.state.expanded ? styles.expand : styles.expandOpen
                      }
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  )}
                </Typography>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{this.props.step.tooltip}</Typography>
                  </CardContent>
                </Collapse>
                <Button
                  size={"large"}
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    this.setState(prevState => ({
                      numReferrals: (prevState.numReferrals[
                        prevState.numReferrals.length + 1
                      ] = {})
                    }));
                  }}
                >
                  Add Another Referral
                </Button>
                <Box component="span">
                  <Container maxWidth="med">
                    <List>
                      {this.state.numReferrals.map(value => (
                        <Paper elevation={3}>
                          <ReferralListCell />
                        </Paper>
                      ))}
                    </List>
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
  expand: {
    transform: "rotate(180deg)"
  },
  expandOpen: {
    transform: "rotate(0deg)"
  },
  titleSpace: {
    marginBottom: 15
  }
};

export default Referral;
