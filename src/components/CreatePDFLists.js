import React, { Component,ProtoTypes } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ReactToPrint from 'react-to-print';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function date() {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
  return (
    date
  );
}

const reportRef = React.createRef();

const explanations = {};


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

    createTabularData = (question, answer, explanation) => {
      return {question, answer, explanation};
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
                    <Typography variant="h6" component="p" align="left" style={styles.body}>
                      To: {this.props.steps["Q1"].answer.name} {this.props.steps["Q1"].answer.last_name}<br/>
                      Date: {date()}<br/>
                      RE: Risk assessment for Stark Law Compliance<br/>
                      <br/>
                    </Typography>
                    <CardMedia
                      style={styles.media}
                      image={require("./media/"+ (this.getMeter() <= 1 ? "low.png" : this.getMeter() >= 3 ? "high.png" : "med.png"))}
                    />
                    <Typography variant="body1" component="p" align="justify" style={styles.body}>
                      <br/>
                      Given the information that you provided, there is a {this.getMeter() <= 1 ? <strong>Low </strong> : this.getMeter() >= 3 ? <strong>High </strong> : <strong>Moderate </strong>} 
                      chance that you are in violation with the Stark Law because:
                      <br/><br/>
                      TODO REFERALS SECTION
                      <br/><br/>
                      Please review the exceptions and contact our legal department at Honigman LLP for more clarification, determination if an exception 
                      applies and if there are Anti-Kickback violations or violations of state fraud and abuse statutes, 
                      which to not only Medicare patients, but also patients covered by Medicaid, worker’s compensation, and private insurance . 
                      <br/>
                      ______________________________________________________________________________________________
                      <br/><br/>
                      I. <u>Introduction</u>
                      <br/><br/>
                      The Stark Law, or physician self-referral laws, strictly prohibits physicians from making referrals or receiving referrals 
                      for designated health services (DHS) payable by Medicare to or from an entity or physician with which the physician or an 
                      immediate family member has a financial relationship. The Stark Law is a strict liability law meaning If a financial relationship 
                      exists, regardless of the parties' intent, the physician is precluded from referring patients to the entity for designated health 
                      services or receiving referrals for designated health services, unless the arrangement meets a statutory or regulatory exception. 
                      To stay compliant, the referral must meet an exception and some common elements include:
                      <br/><br/>
                        • Signed and written agreement specifies the services or property of the exception<br/>
                        • Reasonable arrangement at fair market value<br/>
                        • Set in advance compensation with volume and value of DHS referrals<br/>
                      <br/><br/>
                      There are over 30 exceptions to this law that the physician’s referral can fall into. However, if the physician referral does not 
                      meet any of the common expectations, penalties are severe. The violation may result in civil monetary penalties, exclusion from 
                      Medicare and Medicaid and denial or refund of payments received for the services. The civil monetary penalties could result in 
                      fines of up to three times the payer's costs plus $15,000 per claim (claim italicized). For example, if you make or receive 100 
                      inappropriate referrals, your penalties would be $1,500,000, plus additional cost. 
                      <br/><br/>
                      </Typography>
                      <Typography variant="body1" component="p" align="justify" style={styles.body}>
                      II. <u>Risk Assesment</u>
                      <br/><br/>
                      The following answers you provided have been used to determine your risk of non-compliance
                      with the Stark Law.
                      <br/><br/>
                      TODO MAKE A LIST/TABLE OF QUESTIONS AND ANSWERS?
                      <br/><br/>
                      </Typography>
                      <Typography variant="body1" component="p" align="justify" style={styles.body}>
                      III. <u>Exceptions</u>
                      <br/><br/>
                      There are steps that you can take to minimize your risk of violating the Stark Law. There are multiple exceptions to the Stark Law 
                      that permit physicians, in certain limited circumstances, to make referrals for designated health services.If your arrangement falls 
                      within one of these exceptions, it will not violate the Stark Law. On the other hand, if an arrangement fails to meet even one requirement 
                      of an exception, the referrals made pursuant to the arrangement will be prohibited referrals under the Stark Law. 
                      <br/><br/>
                      Many of the exceptions rely upon specific analysis and application of certain defined terms and we have not analyzed your arrangement 
                      to determine if an exception applies. We recommended that you speak with our team at Honigman LLP to discuss your arrangement. In general, 
                      there are exceptions for (1) rental of office space (2) rental of equipment….. etc. and each exception has different and very specific 
                      requirements that must be met. An arrangement must fall squarely in an exception to provide protection for your arrangement. 
                      <br/><br/>
                      Irrespective of the availability of an exception, a physician must, at all times, remember that their arrangement could violate other 
                      laws, such as the Anti-Kickback statute or state fraud and abuse statutes. The penalties for violation of these laws are even more 
                      severe than the Stark Law. For example, violations of the Anti-Kickback statute will lead to additional civil monetary penalties and 
                      up to five years' imprisonment. Violations of the Anti-Kickback statutes also frequently result in exclusion from participation in Medicare, 
                      Medicaid and all other federal and state plans that provide health benefits.
                      <br/><br/>
                      <strong>We have not evaluated your arrangement for compliance with these laws. We can provide you additional analysis of these laws at your request.</strong>
                      <br/><br/>
                      </Typography>
                      <Typography variant="body1" component="p" align="justify" style={styles.body}>
                      IV. <u>Conclusion</u>
                      <br/><br/>
                      This letter and the advice communicated herein do not constitute a formal legal opinion. The advice and conclusions set forth herein 
                      are only preliminary and are based upon limited factual information, as outlined at the outset of this letter. Furthermore, this letter 
                      has been provided solely for your use and it may not be relied upon by any third party. Further, please note that our conclusions are 
                      expressed on the basis of facts and assumptions stated herein and on the current state of the law. If a law is later changed, an assumption 
                      found to be unwarranted, or should the principles of law be altered by the courts, our conclusions will require reassessment. 
                      <br/><br/>
                      Please contact us if you have any questions or if you would like to discuss other compliance alternatives, including steps you can take 
                      to protect your arrangements, please do not hesitate to call a Honigman attorney.
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
    },
    body: {
      margin: 35
    }
  };
  


export default CreatePDFLists;


/*
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
*/