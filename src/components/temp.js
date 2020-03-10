import React, { Component } from "react";
import {List, ListItem, ListItemText} from 'material-ui/List'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Container, Button, Box } from "@material-ui/core";


export class temp extends Component 
{
    back = e => {
        e.preventDefault();
        this.props.goBack();
      };
    
    render() 
    {
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Dialog
                    open="true"
                    fullWidth="true"
                    maxWidth='sm'
                    >
                    <AppBar title="User Responses"/>
                    <List>
                    {
                    this.props.step
                    (
                      step=> 
                    {  
                        if (step.questionType === "YesNoMaybe"
                        ){
                            return(
                                <ListItem>
                                    <ListItemText 
                                    primary={step.questionText} 
                                    secondary={step.answer.Yes?"Yes": step.answer.No?"No":"Maybe"}
                                    />
                                </ListItem>
                            );
                            }
                        else if (
                            step.questionType === "CheckboxStep"
                        ){
                            return(
                                <ListItem>
                                    <ListItemText 
                                    primary={step.questionText}
                                    seconday={step.answer.filter(el => el.value === true).map(el => el.label)} // DISPLAY ALL LABELS WITH VALUE true
                                    />
                                </ListItem>
                            );
                        }
                    }
                    )
                    }
                    </List>
                    <br />
                    </Dialog>
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

  for (step in this.props.steps){
            
    if(this.props.steps["Start"].questionType === "Start"){
        return(
        document.write("Start")
        )
    }
    else if(this.props.steps[step].questionType === "YesNoMaybe"){
        return(
        document.write("YesNo")
        )

    }

export default temp;



document.write(this.props.steps["Q4"].questionText),
            document.write(this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":"Maybe"),
            document.write(this.props.steps["Q5"].questionText),
            document.write(this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":"Maybe"),
            document.write(this.props.steps["Q6"].questionText),
            document.write(this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":"Maybe")
