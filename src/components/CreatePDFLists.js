import React, { Component, ProtoTypes } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ReactToPrint from "react-to-print";
import AnalysisTable from "./AnalysisTable";

function date() {
  var tempDate = new Date();
  var date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate();
  return date;
}

const reportRef = React.createRef();

export class CreatePDFLists extends Component {
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
    if (this.props.steps["Q6"].answer.Yes) score += 1;
    if (this.props.steps["Q7"].answer[0].entityName) score += 1;
    if (this.props.steps["Q7"].answer.length > 1) score += 1;
    console.log(this.props.steps["Q7"]);
    return score;
  };

  createTabularData = (question, answer, explanation) => {
    return { question, answer, explanation };
  };

  isMedicare = () => {
    for (var i = 0; i < this.props.steps["Q7"].answer.length; ++i) {
      if (this.props.steps["Q7"].answer[i].insurance[0].value) return true;
    }
    return false;
  };

  whatDHS = () => {
    for (var i = 0; i < this.props.steps["Q7"].answer.length; ++i) {
      var hs = this.props.steps["Q7"].answer[i].healthService;
      if (hs[0].value) return "Clinical Laboratory Services";
      if (hs[1].value) return "Physical Therapy Services";
      if (hs[2].value) return "Radiology and Imaging Services";
      if (hs[3].value) return "Radiation Therapy Services and Supplies";
      if (hs[4].value) return "Durable medical equipment and supplies";
      if (hs[5].value)
        return "Parenteral and enteral nutrients, equipment and supplies";
      if (hs[6].value)
        return "Prosthetics, orthotics, and prosthetic devices and supplies";
      if (hs[7].value) return "Home health services";
      if (hs[8].value) return "Outpatient prescription drugs";
      if (hs[9].value) return "Inpatient and outpatient hospital services";
      if (hs[10].value) return hs[10].text;
    }
    return false;
  };

  whatFinancial = () => {
    for (var i = 0; i < this.props.steps["Q7"].answer.length; ++i) {
      if (
        this.props.steps["Q7"].answer[i].compensation ||
        this.props.steps["Q7"].answer[i].subsidiary
      )
        return this.props.steps["Q7"].answer[i].entityName;
      else {
        for (
          var j = 0;
          j < this.props.steps["Q7"].answer[i].ownershipInterests.length;
          ++j
        ) {
          if (this.props.steps["Q7"].answer[i].ownershipInterests[j].value)
            return this.props.steps["Q7"].answer[i].entityName;
        }
      }
    }
    return false;
  };

  render() {
    return (
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
                  <Typography
                    variant="h6"
                    component="p"
                    align="left"
                    style={styles.body}
                  >
                    To: {this.props.steps["Q1"].answer.name}{" "}
                    {this.props.steps["Q1"].answer.last_name}
                    <br />
                    Date: {date()}
                    <br />
                    RE: Risk assessment for Stark Law Compliance
                    <br />
                    <br />
                  </Typography>
                  <CardMedia
                    style={styles.media}
                    image={require("./media/" +
                      (this.getMeter() <= 1
                        ? "low.png"
                        : this.getMeter() >= 3
                        ? "high.png"
                        : "med.png"))}
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    align="justify"
                    style={styles.body}
                  >
                    <br />
                    Given the information that you provided, there is a{" "}
                    {this.getMeter() <= 1 ? (
                      <strong>Low </strong>
                    ) : this.getMeter() >= 3 ? (
                      <strong>High </strong>
                    ) : (
                      <strong>Moderate </strong>
                    )}
                    chance that you are in violation with the Stark Law because:
                  </Typography>
                  {this.props.steps["Q7"].answer.length > 0 ? (
                    <Typography
                      variant="body1"
                      component="p"
                      align="justify"
                      style={styles.body}
                    >
                      1. Your referral {this.isMedicare() ? "is" : "is not"} for
                      Medicare patients.
                      <br />
                      2. The referral {this.whatDHS()
                        ? "is"
                        : "is not"} for {this.whatDHS()}.<br />
                      3. There {this.whatFinancial() ? "is" : "is no"} financial
                      relationship between you (or your immediate family member)
                      and{" "}
                      {this.whatFinancial()
                        ? this.whatFinancial()
                        : " any mentioned business or entity "}
                      to which you are making or receiving the referral.
                      <br />
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      component="p"
                      align="justify"
                      style={styles.body}
                    >
                      You mentioned no referrals for Designated Health Services
                      nor any financial relationship to them.
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    component="p"
                    align="justify"
                    style={styles.body}
                  >
                    Please review the exceptions and contact our legal
                    department at Honigman LLP for more clarification,
                    determination if an exception applies and if there are
                    Anti-Kickback violations or violations of state fraud and
                    abuse statutes, which to not only Medicare patients, but
                    also patients covered by Medicaid, worker’s compensation,
                    and private insurance .
                    <br />
                    ______________________________________________________________________________________________
                    <br />
                    <br />
                    I. <u>Introduction</u>
                    <br />
                    <br />
                    The Stark Law, or physician self-referral laws, strictly
                    prohibits physicians from making referrals or receiving
                    referrals for designated health services (DHS) payable by
                    Medicare to or from an entity or physician with which the
                    physician or an immediate family member has a financial
                    relationship. The Stark Law is a strict liability law
                    meaning If a financial relationship exists, regardless of
                    the parties' intent, the physician is precluded from
                    referring patients to the entity for designated health
                    services or receiving referrals for designated health
                    services, unless the arrangement meets a statutory or
                    regulatory exception. To stay compliant, the referral must
                    meet an exception and some common elements include:
                    <br />
                    <br />
                    • Signed and written agreement specifies the services or
                    property of the exception
                    <br />
                    • Reasonable arrangement at fair market value
                    <br />
                    • Set in advance compensation with volume and value of DHS
                    referrals
                    <br />
                    <br />
                    <br />
                    There are over 30 exceptions to this law that the
                    physician’s referral can fall into. However, if the
                    physician referral does not meet any of the common
                    expectations, penalties are severe. The violation may result
                    in civil monetary penalties, exclusion from Medicare and
                    Medicaid and denial or refund of payments received for the
                    services. The civil monetary penalties could result in fines
                    of up to three times the payer's costs plus $15,000 per
                    claim (claim italicized). For example, if you make or
                    receive 100 inappropriate referrals, your penalties would be
                    $1,500,000, plus additional cost.
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="justify"
                    style={styles.body}
                  >
                    II. <u>Risk Assesment</u>
                    <br />
                    <br />
                    The following answers you provided have been used to
                    determine your risk of non-compliance with the Stark Law.
                    <br />
                    <br />
                    <AnalysisTable
                     steps={this.props.steps}
                     dhs={this.whatDHS}
                     medi={this.isMedicare}
                     />
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="justify"
                    style={styles.body}
                  >
                    III. <u>Exceptions</u>
                    <br />
                    <br />
                    There are steps that you can take to minimize your risk of
                    violating the Stark Law. There are multiple exceptions to
                    the Stark Law that permit physicians, in certain limited
                    circumstances, to make referrals for designated health
                    services.If your arrangement falls within one of these
                    exceptions, it will not violate the Stark Law. On the other
                    hand, if an arrangement fails to meet even one requirement
                    of an exception, the referrals made pursuant to the
                    arrangement will be prohibited referrals under the Stark
                    Law.
                    <br />
                    <br />
                    Many of the exceptions rely upon specific analysis and
                    application of certain defined terms and we have not
                    analyzed your arrangement to determine if an exception
                    applies. We recommended that you speak with our team at
                    Honigman LLP to discuss your arrangement. In general, there
                    are exceptions for (1) rental of office space (2) rental of
                    equipment….. etc. and each exception has different and very
                    specific requirements that must be met. An arrangement must
                    fall squarely in an exception to provide protection for your
                    arrangement.
                    <br />
                    <br />
                    Irrespective of the availability of an exception, a
                    physician must, at all times, remember that their
                    arrangement could violate other laws, such as the
                    Anti-Kickback statute or state fraud and abuse statutes. The
                    penalties for violation of these laws are even more severe
                    than the Stark Law. For example, violations of the
                    Anti-Kickback statute will lead to additional civil monetary
                    penalties and up to five years' imprisonment. Violations of
                    the Anti-Kickback statutes also frequently result in
                    exclusion from participation in Medicare, Medicaid and all
                    other federal and state plans that provide health benefits.
                    <br />
                    <br />
                    <strong>
                      We have not evaluated your arrangement for compliance with
                      these laws. We can provide you additional analysis of
                      these laws at your request.
                    </strong>
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="justify"
                    style={styles.body}
                  >
                    IV. <u>Conclusion</u>
                    <br />
                    <br />
                    This letter and the advice communicated herein do not
                    constitute a formal legal opinion. The advice and
                    conclusions set forth herein are only preliminary and are
                    based upon limited factual information, as outlined at the
                    outset of this letter. Furthermore, this letter has been
                    provided solely for your use and it may not be relied upon
                    by any third party. Further, please note that our
                    conclusions are expressed on the basis of facts and
                    assumptions stated herein and on the current state of the
                    law. If a law is later changed, an assumption found to be
                    unwarranted, or should the principles of law be altered by
                    the courts, our conclusions will require reassessment.
                    <br />
                    <br />
                    Please contact us if you have any questions or if you would
                    like to discuss other compliance alternatives, including
                    steps you can take to protect your arrangements, please do
                    not hesitate to call a Honigman attorney.
                  </Typography>
                </Box>
                <Box component="span">
                  <Container maxWidth="sm">
                    <ReactToPrint
                      trigger={() => (
                        <Button
                          variant="contained"
                          color="primary"
                          primary={"true"}
                          style={styles.button}
                        >
                          Print
                        </Button>
                      )}
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
    margin: 15
  },
  pos: {
    marginBottom: 12
  },
  media: {
    display: "block",
    margin: "auto",
    height: 140,
    paddingTop: "5",
    width: "30%"
  },
  logo: {
    height: 140,
    paddingTop: "5",
    display: "block",
    margin: "auto",
    width: "70%"
  },
  body: {
    margin: 35
  }
};

export default CreatePDFLists;
