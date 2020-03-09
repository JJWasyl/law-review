import React, { Component } from "react";
import {List, ListItem, ListItemText} from 'material-ui/List'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Container, Button, Box } from "@material-ui/core";


export class CreatePDFLists extends Component 
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
                    this.steps.map
                    (
                        (step) => 
                    {  
                    if (step.questionType == "YesNoMaybe"
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
                        step.questionType == "CheckboxStep"
                    ){
                        return(
                            <ListItem>
                                <ListItemText 
                                primary={step.questionText}
                                seconday={step.answer.filter(el => el.value == true).map(el => el.label)} // DISPLAY ALL LABELS WITH VALUE true
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

export default CreatePDFLists;