import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export class Start extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <h1>Welcome to the assisted Stark Law review</h1>
          </Container>
          <Container maxWidth="md">
            <Card style={styles.cardmain}>
              <CardContent>
                <CardMedia 
                  style={styles.media}
                  image={require("./media/stark_doc.png")}
                  title="Keep your work clean"
                />
                <Typography variant="h5" component="h2" style={styles.cardmain}>
                  What is the Stark Law?
                </Typography>
                <Typography variant="body2" component="p" align="justify">
                <strong>You should use the Clear State tool IF ALL of the following apply:</strong>
                <br/> 
                • You are a physician or acting on behalf of one.
                <br/> 
                • You are making or receiving a referral to a SPECIFIC healthcare provider or entity.
                <br/> 
                • You want to know if that SPECIFIC referral will violate the Stark Law.
                <br/><br/>
                <strong>Stark Law Overview</strong>
                <br/>
                The Stark Law prohibits a physician from making or receiving a referral for certain 
                “designated health services” for Medicare-covered patients if the physician or one of their 
                immediate family members has a financial relationship with the medical provider or entity 
                that makes or receives the referral. 
                <br/><br/>
                The Stark Law is a “strict liability” law, meaning that a physician can be penalized for 
                even unintentionally violating the Stark Law. Violation of the Stark Law may result in civil 
                monetary penalties and exclusion from Medicare, Medicaid, and other federal and state 
                insurance plans that provide health benefits. The civil monetary penalties are severe. 
                Violating the Stark Law, including failing to meet even one element of an exception, 
                may mean that all improperly collected monies must be returned. Each instance of health 
                service arising from a prohibited referral will be subject to civil monetary penalties of 
                up to $15,000 per claim. For example, if a physician makes one-hundred inappropriate claims, 
                their penalties would be at least $1,500,000, without considering penalties under similar 
                statutes, recouped claims, and attorneys’ fees. There are steps that can be taken to minimize those risks.
                <br/><br/>
                Unfortunately, it’s not always easy to determine whether the Stark Law applies to a given referral. 
                Health care providers must navigate many complicated regulations and a myriad of state fraud and abuse 
                statutes that are only sometimes similar to the federal rules. Thus, physicians usually hire lawyers 
                to review their referral for legal compliance. But hiring a lawyer can be time consuming and expensive. 
                Furthermore, it can be difficult to find the right lawyer. Many lawyers do not have meaningful experience 
                advising on the Stark Law. This can lead to frustration, errors, and even higher legal fees.
                <br/><br/>
                Never fear, Clear State is here! Using the Clear State tool, a physician will gain insight into 
                whether the Stark Law applies to their referrals without having to first consult a lawyer. After 
                the physician inputs their information, they’ll receive a report that predicts the likelihood of 
                whether the Stark Law applies to the physician’s situation. The report is NOT legal advice, but it 
                enables a more efficient conversation about the physician’s referrals with a Honigman lawyer. 
                <br/><br/>
                Please note that there are other laws besides the Stark Law that apply to physician referrals. 
                For example, the Anti-Kickback Statute is a federal law that prohibits receiving any kind of 
                compensation or reward from the medical providers they refer to or receive referrals from. 
                Additionally, each state has its own set of laws that apply to physician referrals. In its current 
                iteration, the Clear State tool only analyzes whether physician referrals violate the Stark Law. 
                Physicians will need to consult with a lawyer about the other physician referral laws.
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
                      Begin
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
    height: 210,
    paddingTop: '15%',
  },
};

export default Start;
