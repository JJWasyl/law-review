import React, { Component } from "react";
import {List, ListItem, ListItemText} from 'material-ui/List'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export class CreatePDFLists extends Component 
{
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.goBack();
      };
    
    render() 
    {
        return(
            <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <h1>Welcome to the assisted Stark Law review</h1>
          </Container>
          <Container maxWidth="sm">
            <Card style={styles.cardmain}>
              <CardContent>
                <Typography variant="h5" component="h2" style={styles.cardmain}>
                User Response
                </Typography>
                <Typography variant="body2" component="p" align="justify">
                Q1: {this.props.steps["Q4"].questionText}<br/>
                Ans: {this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":"Maybe"} <br/><br/>
                Q2: {this.props.steps["Q5"].questionText}<br/>
                Ans: {this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":"Maybe"} <br/><br/>
                Q3: {this.props.steps["Q6"].questionText}<br/>
                Ans: {this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":"Maybe"} <br/><br/>

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
                      Submit
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
  


export default CreatePDFLists;