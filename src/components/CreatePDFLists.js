import React, { Component,ProtoTypes } from "react";
import {List, ListItem, ListItemText} from 'material-ui/List'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactToPrint from 'react-to-print';

function date() {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
  return (
    date
  );
}

const reportRef = React.createRef();

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
   
    getMeter = () => {
      var score = 0;
      //if (this.props.steps["Q2"].answer.Yes) score+=1;
      //if (this.props.steps["Q3"].answer.Yes) score+=1;
      if (this.props.steps["Q4"].answer.Yes) score+=1;
      if (this.props.steps["Q5"].answer.Yes) score+=1;
      if (this.props.steps["Q6"].answer.Yes) score+=1;
      if (this.props.steps["Q7"].answer[0].entityName) score+=1;
      
      return score;
    }

    render() 
    {
      return(
        <MuiThemeProvider>
          <React.Fragment>
            <Container maxwidth="sm">
              <h1>Your Stark Law Report</h1>
            </Container>
            <Container maxWidth="md">
              <Card style={styles.cardmain}>
                <CardContent>
                  <Box component="span" id="report" ref={reportRef}>
                    <CardMedia
                      style={styles.logo}
                      image={require("./media/logo-og.png")}
                    />
                    <Typography variant="h6" component="p" align="left">
                      To: {this.props.steps["Q1"].answer.name} {this.props.steps["Q1"].answer.last_name}<br/>
                      Date: {date()}<br/>
                      RE: Risk assessment for Stark Law Compliance<br/>
                      <br/>
                    </Typography>
                    <CardMedia
                      style={styles.media}
                      image={require("./media/"+ (this.getMeter() <= 1 ? "low.png" : this.getMeter() >= 3 ? "high.png" : "med.png"))}
                    />
                    <Typography variant="body1" component="p" align="justify">
                      <br/>
                      Given the information that you provided, there is a {this.getMeter() <= 1 ? <strong>Low </strong> : this.getMeter() >= 3 ? <strong>High </strong> : <strong>Moderate </strong>} 
                      chance that you are in violation with the Stark Law because:
                      <br/><br/>
                      TODO REFERALS SECTION
                      <br/><br/>
                      Please review the exceptions and contact our legal department at Honigman LLP for more
                      clarification, determination if an exception applies and if there are anti-kickback violations.
                      <br/>
                      ______________________________________________________________________________________________
                      <br/><br/>
                      I. <u>Introduction</u>
                      <br/><br/>
                      The Stark Law, or physician self-referral laws, strictly prohibits physicians from making referrals
                      for designated health services (DHS) payable by Medicare to an entity with which the physician
                      or an immediate family member has a financial relationship. The Stark Law is a strict liability
                      law meaning that a physician can violate the law without any intention to do so. To stay
                      compliant, the referral must meet an exception and some common elements include:
                      <br/><br/>
                      TODO BULLETPOINTS
                      <br/><br/>
                      There are over 30 exceptions to this law that the physician’s referral can fall into. However, if
                      the physician referral does not meet any of the common expectations, civil penalties of up to
                      $15,000 dollars and 3x government overpayment per referral.
                      <br/><br/>
                      II. <u>Risk Assesment</u>
                      <br/><br/>
                      The following answers you provided have been used to determine your risk of non-compliance
                      with the Stark Law.
                      <br/>
                      TODO MAKE A LIST/TABLE OF QUESTIONS AND ANSWERS?
                      <br/><br/>
                      III. <u>Exceptions</u>
                      <br/><br/>
                      Many of exceptions rely upon specific analysis and application of certain defined terms that can
                      become very complicated. We recommended that you speak with our team at Honigman LLP for
                      a detailed legal opinion about compliance and if a certain exception applies. In general, these
                      exceptions are set forth below:
                      <br/>
                      <strong>Direct compensation exceptions</strong> usually include a (1) signed written agreement by both parties,
                      (2) a 1-year term, (3) compensation that is set in advance and does not vary with volume or value
                      of referrals to other businesses and (4) is commercially reasonable. Some of the specific
                      exceptions include:
                      <br/>
                      TODO LIST
                      <br/><br/>
                      <strong>Indirect compensation expectations</strong> usually include:
                      <br/><br/>
                      TODO LIST
                      <br/><br/>
                      <strong>Service-level exceptions</strong> usually include:
                      <br/><br/>
                      TODO List
                      <br/><br/>
                      IV. <u>Conclusion</u>
                      <br/><br/>
                      This letter and the advice communicated herein do not constitute a formal legal opinion. The
                      advice and conclusions set forth herein are only preliminary and are based upon limited factual
                      information, as outlined at the outset of this letter. Furthermore, this letter has been provided
                      solely for your use and It may not be relied upon by any third party. Further, please note that our
                      conclusions are expressed on the basis of facts and assumptions stated herein and on the current
                      state of the law. If a law is later changed, an assumption found to be unwarranted, or should the
                      principles of law be altered by the courts, our conclusions will require reassessment. Please
                      contact us with any questions that you may
                    </Typography>
                    <Typography variant="body2" component="p" align="justify">
                    <br/>
                    Q1: {this.props.steps["Q4"].questionText}<br/>
                    Ans: {this.props.steps["Q4"].answer.Yes?"Yes. At risk": this.props.steps["Q4"].answer.No?"No. No risk":this.props.steps["Q4"].answer.Maybe?"Maybe. Might be at risk":"Null"} <br/><br/>
                    Q2: {this.props.steps["Q5"].questionText}<br/>
                    Ans: {this.props.steps["Q5"].answer.Yes?"Yes. At risk": this.props.steps["Q5"].answer.No?"No. No risk":this.props.steps["Q5"].answer.Maybe?"Maybe. Might be at risk":"Null"} <br/><br/>
                    Q3: {this.props.steps["Q6"].questionText}<br/>
                    Ans: {this.props.steps["Q6"].answer.Yes?"Yes. At risk": this.props.steps["Q6"].answer.No?"No. No risk":this.props.steps["Q6"].answer.Maybe?"Maybe. Might be at risk":"Null"} <br/><br/>
                    Q4: {this.props.steps["Q7"].questionText}<br/>
                    Ans: <br/>
                    {this.props.steps["Q7"].answer[0].entityName? 
                    "[1]  Entity Name: ".concat(this.props.steps["Q7"].answer[0].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[0].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[0].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[0].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[0].ownershipInterests[0].value?this.props.steps["Q7"].answer[0].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[0].ownershipInterests[1].value?this.props.steps["Q7"].answer[0].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[0].ownershipInterests[2].value?this.props.steps["Q7"].answer[0].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[0].ownershipInterests[3].value?this.props.steps["Q7"].answer[0].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[0].ownershipInterests[4].value?this.props.steps["Q7"].answer[0].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[0].ownershipInterests[5].value?this.props.steps["Q7"].answer[0].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[0].ownershipInterests[6].value?this.props.steps["Q7"].answer[0].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[1]? 
                    "[2]   Entity Name: ".concat(this.props.steps["Q7"].answer[1].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[1].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[1].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[1].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[1].ownershipInterests[0].value?this.props.steps["Q7"].answer[1].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[1].ownershipInterests[1].value?this.props.steps["Q7"].answer[1].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[1].ownershipInterests[2].value?this.props.steps["Q7"].answer[1].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[1].ownershipInterests[3].value?this.props.steps["Q7"].answer[1].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[1].ownershipInterests[4].value?this.props.steps["Q7"].answer[1].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[1].ownershipInterests[5].value?this.props.steps["Q7"].answer[1].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[1].ownershipInterests[6].value?this.props.steps["Q7"].answer[1].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[2]? 
                    "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[2].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[2].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[2].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[2].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[2].ownershipInterests[0].value?this.props.steps["Q7"].answer[2].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[1].value?this.props.steps["Q7"].answer[2].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[2].value?this.props.steps["Q7"].answer[2].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[3].value?this.props.steps["Q7"].answer[2].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[4].value?this.props.steps["Q7"].answer[2].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[5].value?this.props.steps["Q7"].answer[2].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[6].value?this.props.steps["Q7"].answer[2].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[2]? 
                    "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[2].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[2].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[2].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[2].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[2].ownershipInterests[0].value?this.props.steps["Q7"].answer[2].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[1].value?this.props.steps["Q7"].answer[2].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[2].value?this.props.steps["Q7"].answer[2].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[3].value?this.props.steps["Q7"].answer[2].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[4].value?this.props.steps["Q7"].answer[2].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[5].value?this.props.steps["Q7"].answer[2].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[2].ownershipInterests[6].value?this.props.steps["Q7"].answer[2].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[3]? 
                    "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[3].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[3].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[3].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[3].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[3].ownershipInterests[0].value?this.props.steps["Q7"].answer[3].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[3].ownershipInterests[1].value?this.props.steps["Q7"].answer[3].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[3].ownershipInterests[2].value?this.props.steps["Q7"].answer[3].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[3].ownershipInterests[3].value?this.props.steps["Q7"].answer[3].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[3].ownershipInterests[4].value?this.props.steps["Q7"].answer[3].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[3].ownershipInterests[5].value?this.props.steps["Q7"].answer[3].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[3].ownershipInterests[6].value?this.props.steps["Q7"].answer[3].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[4]? 
                    "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[4].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[4].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[4].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[4].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[4].ownershipInterests[0].value?this.props.steps["Q7"].answer[4].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[4].ownershipInterests[1].value?this.props.steps["Q7"].answer[4].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[4].ownershipInterests[2].value?this.props.steps["Q7"].answer[4].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[4].ownershipInterests[3].value?this.props.steps["Q7"].answer[4].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[4].ownershipInterests[4].value?this.props.steps["Q7"].answer[4].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[4].ownershipInterests[5].value?this.props.steps["Q7"].answer[4].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[4].ownershipInterests[6].value?this.props.steps["Q7"].answer[4].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[5]? 
                    "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[5].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[5].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[5].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[5].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[5].ownershipInterests[0].value?this.props.steps["Q7"].answer[5].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[5].ownershipInterests[1].value?this.props.steps["Q7"].answer[5].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[5].ownershipInterests[2].value?this.props.steps["Q7"].answer[5].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[5].ownershipInterests[3].value?this.props.steps["Q7"].answer[5].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[5].ownershipInterests[4].value?this.props.steps["Q7"].answer[5].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[5].ownershipInterests[5].value?this.props.steps["Q7"].answer[5].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[5].ownershipInterests[6].value?this.props.steps["Q7"].answer[5].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    {this.props.steps["Q7"].answer[6]? 
                    "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[6].entityName,",    ",
                    "Health Services: ",this.props.steps["Q7"].answer[6].healthService,",    ",
                    "Compensation: ", this.props.steps["Q7"].answer[6].compensation, ",    ",
                    "Compensation Type: ", this.props.steps["Q7"].answer[6].compensationType,",    ",
                    "Ownership: ",
                    this.props.steps["Q7"].answer[6].ownershipInterests[0].value?this.props.steps["Q7"].answer[6].ownershipInterests[0].label+", ":"",
                    this.props.steps["Q7"].answer[6].ownershipInterests[1].value?this.props.steps["Q7"].answer[6].ownershipInterests[1].label+", ":"",
                    this.props.steps["Q7"].answer[6].ownershipInterests[2].value?this.props.steps["Q7"].answer[6].ownershipInterests[2].label+", ":"",
                    this.props.steps["Q7"].answer[6].ownershipInterests[3].value?this.props.steps["Q7"].answer[6].ownershipInterests[3].label+", ":"",
                    this.props.steps["Q7"].answer[6].ownershipInterests[4].value?this.props.steps["Q7"].answer[6].ownershipInterests[4].label+", ":"",
                    this.props.steps["Q7"].answer[6].ownershipInterests[5].value?this.props.steps["Q7"].answer[6].ownershipInterests[5].label+", ":"",
                    this.props.steps["Q7"].answer[6].ownershipInterests[6].value?this.props.steps["Q7"].answer[6].ownershipInterests[6].label+", ":"",
                    ):""}<br/>
                    </Typography>
                  </Box>
                  <Box component="span">
                    <Container maxWidth="sm">
                      <ReactToPrint
                      trigger={() => 
                        <Button
                          variant="contained"
                          color="primary"
                          primary={"true"}
                          style={styles.button}
                        >
                          Print
                        </Button>
                      }
                      content={() => reportRef.current}
                      />
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
      display: "block",
      margin: "auto",
      height: 140,
      paddingTop: '5',
      width: '30%',
    },
    logo: {
      height: 140,
      paddingTop: '5',
      display: "block",
      margin: "auto",
      width: "70%"
    }
  };
  


export default CreatePDFLists;