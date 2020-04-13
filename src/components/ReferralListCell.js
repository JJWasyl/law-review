import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ReferralYesNo from "./ReferralYesNo.js";
import ReferralCheckboxQuestion from "./ReferralCheckboxQuestion.js";
import { Container, Box, Link } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export class ReferralListCell extends Component {
  state = {
    init: false
  };
  render() {
    const noStark = (
      <Container>
        <Typography>
          <Box fontWeight="fontWeightRegular" textAlign="center" m={3}>
            The Stark Law likely does not apply for this referral.
          </Box>
        </Typography>
      </Container>
    );
    return (
      <MuiThemeProvider>
        <form noValidate autoComplete="off" disabled={true}>
          <div>
            <Container>
              <Box fontWeight="fontWeightRegular" textAlign="justify" m={3}>
                <Tooltip title={this.props.tooltip}>
                  <Typography variant="subtitle1" align="justify">
                    <Box
                      fontWeight="fontWeightRegular"
                      textAlign="justify"
                      m={3}
                    >
                      {this.props.questionText}
                    </Box>
                  </Typography>
                </Tooltip>
                <TextField
                  error={
                    (this.props.referral.entityName == null ||
                      this.props.referral.entityName === "") &&
                    this.props.referral.healthService.filter(s => {
                      return s.value === true;
                    }).length !== 0
                  }
                  fullWidth={true}
                  required={true}
                  margin="normal"
                  id="entity name"
                  label="To whom are you making this referral?"
                  onChange={event =>
                    this.props.update({ entityName: event.target.value })
                  }
                  value={this.props.referral.entityName}
                  helperText="This should be an individual healthcare provider or healthcare organization."
                />
              </Box>
            </Container>
            <ReferralYesNo
              yesno={this.props.referral.referralRole}
              yesText="I am making the referral"
              noText="I am receiving the referral"
              update={newState => this.props.update({ referralRole: newState })}
              questionText={"Please indicate your role in the referral"}
              tooltip={null}
            />
            <ReferralCheckboxQuestion
              checkboxItems={this.props.referral.healthService}
              update={newState =>
                this.props.update({ healthService: newState })
              }
              questionText="The Stark Law only prohibits referrals for certain kinds of services. Is the referral for any of the following designated health services? Please select all that apply, if any. If none apply, move on to the next question."
              tooltip={
                <Container>
                  <Typography>
                    Curious to learn more about designated health services?
                  </Typography>
                  <Link
                    href="https://www.law.cornell.edu/cfr/text/42/411.351#div8"
                    target="_blank"
                    rel="noopener"
                  >
                    {"Click here"}
                  </Link>
                </Container>
              }
            />
            {this.props.referral.healthService.filter(s => {
              return s.value === true;
            }).length !== 0 &&
              this.props.referral.entityName !== null && (
                <Container disableGutters>
                  <ReferralCheckboxQuestion
                    checkboxItems={this.props.referral.insurance}
                    update={newState =>
                      this.props.update({ insurance: newState })
                    }
                    questionText={
                      "Is the patient being referred covered by any of the following services?"
                    }
                    tooltip={
                      "Please keep in mind, other state laws may apply if the patient is covered by Medicaid, Worker’s Compensation insurance, or private insurance. For example, the Illinois Insurance Claims Fraud Prevention Act prohibits offering or paying any remuneration, directly or indirectly, to induce any person to procure clients or obtain health care services. This act applies to all types of insurance coverage, including patients that are covered by private payers (e.g., Humana or Aetna)."
                    }
                  />
                  <Divider />
                  <Box fontWeight="fontWeightRegular" textAlign="justify" m={6}>
                    <Typography variant="subtitle1" align="justify">
                      {"The Stark Law prohibits referrals between healthcare providers who share a financial relationship. Even the immediate family members of a physician making a referral cannot share a financial relationship with the referral recipient. Financial relationships include ownership interests or compensation arrangements. Please answer the following questions about your financial relationship(s) with " +
                        this.props.referral.entityName +
                        " Your responses will help a Honigman attorney determine if any exceptions to the Stark Law may apply."}
                    </Typography>
                  </Box>
                  <ReferralCheckboxQuestion
                    checkboxItems={this.props.referral.ownershipInterests}
                    update={newState =>
                      this.props.update({ ownershipInterests: newState })
                    }
                    questionText={
                      "Do you or an immediate family member have any of the following ownership interests in " +
                      this.props.referral.entityName +
                      "?"
                    }
                    tooltip={
                      "An immediate family member includes husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild."
                    }
                  />
                  <ReferralYesNo
                    yesno={this.props.referral.subsidiary}
                    yesText="Yes"
                    noText="No"
                    update={newState =>
                      this.props.update({ subsidiary: newState })
                    }
                    questionText={
                      "Do you or an immediate family member have any ownership interest in a subsidiary of " +
                      this.props.referral.entityName +
                      "?"
                    }
                    tooltip={
                      "A subsidiary is a company or other organization that is at least partially owned by another company or organization."
                    }
                  />
                  <ReferralYesNo
                    yesno={this.props.referral.compensation}
                    yesText="Yes"
                    noText="No"
                    update={newState =>
                      this.props.update({ compensation: newState })
                    }
                    questionText={
                      "The Stark Law prohibits a physician or an immediate family member from having certain compensation relationships with the entity or physician that the physician is referring to or receiving referrals from, whether in cash or kind. Do you or an immediate family member receive any payment or other benefit in cash or otherwise from " +
                      this.props.referral.entityName +
                      "?"
                    }
                    tooltip={null}
                  />
                  {this.props.referral.compensation === true && (
                    <ReferralCheckboxQuestion
                      checkboxItems={this.props.referral.compensationType}
                      update={newState =>
                        this.props.update({ compensationType: newState })
                      }
                      questionText={
                        "Do you receive any of the following from " +
                        this.props.referral.entityName +
                        "?"
                      }
                      tooltip={
                        "An immediate family member includes husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild."
                      }
                    />
                  )}
                </Container>
              )}
            {(this.props.referral.healthService === "None of the above" ||
              this.props.referral.compensation === false) &&
              noStark}
          </div>
          <Divider />
        </form>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  divider: {
    marginTop: 25
  }
};

export default ReferralListCell;
