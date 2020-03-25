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


import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
export class CreatePDFLists extends Component 
{
    
    const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text>{this.props.steps["Q4"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q4"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q5"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q5"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q6"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q6"].answer.Maybe?"You maybe at risk of Stark Law!":
                "Stark Law may not apply."
                }<br/>
                For further consultation contact:<br/> xxx-xxx-xxxx <br/> <br/>               
                Q1: {this.props.steps["Q4"].questionText}<br/>
                Ans: {this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":this.props.steps["Q4"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q2: {this.props.steps["Q5"].questionText}<br/>
                Ans: {this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q5"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q3: {this.props.steps["Q6"].questionText}<br/>
                Ans: {this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q6"].answer.Maybe?"Maybe":"Null"} <br/><br/>
            </Text>
        </View>
        </Page>
    </Document>
    );
    
    ReactPDF.render(<MyDocument />, `${__dirname}/StarkLawReview.pdf`);
    
    const App = () => (
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
      );
    ReactDOM.render(<App />, document.getElementById('root'));
}    
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});




