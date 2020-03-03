import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {List, ListItem, ListItemText} from 'material-ui/List'
//import jsPDF from 'jspdf'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import { render } from "react-dom";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { PDFDownloadLink } from "@react-pdf/renderer";

export class CreatePDFLists extends Component 
{
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
                    <AppBar title="User Responses" />
                    <List>
                    {
                    this.props.steps.map
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
        )
    }
}


export default CreatePDFLists;