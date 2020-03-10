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
        var step = []
        for (step in this.props.steps){
     
            if(this.props.steps[step].questionType === "Start"){
                return(
                document.write("Start")
                )
            }
            else if(this.props.steps[step].questionType === "YesNoMaybe"){
                return(
                document.write("YesNo")
                )

            }

        }
    }
}


export default CreatePDFLists;