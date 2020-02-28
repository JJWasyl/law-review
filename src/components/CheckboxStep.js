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
  Button
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

export class CheckboxStep extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      healthServices: props.step.answer,
      expanded: false
    };
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
              <Typography variant="h4" component="h2" style={styles.titleSpace}>    
                  {this.props.step.questionText}
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
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      <FormGroup>
                        {this.state.healthServices.map((service, index) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={service.value}
                                onChange={() => {
                                  this.setState(prevState => ({
                                    healthServices: prevState.healthServices.map(
                                      el =>
                                        el.key === service.key
                                          ? { ...el, value: !el.value }
                                          : el
                                    )
                                  }));
                                }}
                                value={service.value}
                              />
                            }
                            label={
                              service.key === "other" && service.value ? (
                                <TextField
                                  onChange={txt => {
                                    this.setState(prevState => ({
                                      healthServices: prevState.healthServices.map(
                                        el =>
                                          el.key === service.key
                                            ? { ...el, text: txt }
                                            : el
                                      )
                                    }));
                                    console.log(service);
                                  }}
                                />
                              ) : (
                                service.label
                              )
                            }
                          />
                        ))}
                        <Button
                          variant="contained"
                          color="primary"
                          style={styles.button}
                          primary={"true"}
                          onClick={() => {
                            var checked =
                              this.state.healthServices.filter(el => el.value)
                                .length > 0;
                            this.props.nextStep(this.state.healthServices);
                          }}
                        >
                          Next
                        </Button>
                      </FormGroup>
                    </FormLabel>
                  </FormControl>
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
    marginBottom: 15
  }
}

export default CheckboxStep;
