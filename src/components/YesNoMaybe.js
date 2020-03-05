import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box, Tooltip } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

export class YesNoMaybe extends Component {
  state = {
    expanded: false,
  }

  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <Card style={styles.cardRoot}>
              <CardContent style={styles.cardmain}>
                <Typography variant="h3" component="h2" style={styles.titleSpace}>    
                  {this.props.step.questionText}
                </Typography>
                <Typography variant="h3" component="h2" style={styles.titleSpace} align="justify">
                  {this.props.step.tooltip != null && 
                    <IconButton
                      edge="end"
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="show more"
                      style={this.state.expanded ? styles.expand : styles.expandOpen}
                    >
                      <ExpandMoreIcon />
                    </IconButton>}
                </Typography>               
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      {this.props.step.tooltip}
                    </Typography>
                  </CardContent>
                </Collapse>
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
                      color="default"
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
    margin: 15,
  },
  expand: {
    transform: 'rotate(180deg)',
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },
  titleSpace: {
    marginBottom: 15,
    display: "inline-block"
  },
};

export default YesNoMaybe;
