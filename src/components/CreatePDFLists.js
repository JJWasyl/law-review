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

export class CreatePDFLists extends Component {


render() {
    //Dummy
    var value = this.props;
    return(
        <MuiThemeProvider >
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="Q1 " secondary={value[0]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="A1 " secondary={value[1]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Q2 " secondary={value[2]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="A2 " secondary={value[3]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Q3 " secondary={value[4]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="A3 " secondary={value[5]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Q4 " secondary={value[6]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="A4 " secondary={value[7]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Q5 " secondary={value[8]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="A5 " secondary={value[9]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Q6 " secondary={value[10]} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="A6 " secondary={value[11]} /> 
            </ListItem>
          </List>
          <br />

          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
}  
}

export default CreatePDFLists;