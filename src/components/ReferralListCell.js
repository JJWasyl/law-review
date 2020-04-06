import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { ownershipInterests, compensation, healthServices } from "./constants";
import ReferralCheckboxQuestion from "./ReferralCheckboxQuestion.js";
import {
  Container,
  Box,
  Grid,
  Switch,
  ButtonGroup,
  Button,
  Link
} from "@material-ui/core";
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography
} from "@material-ui/core";

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
              <Tooltip title={this.props.tooltip}>
                <Typography variant="subtitle1" align="justify">
                  <Box fontWeight="fontWeightRegular" textAlign="justify" m={3}>
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
            </Container>
            <ReferralCheckboxQuestion
              checkboxItems={this.props.referral.healthService}
              update={newState =>
                this.props.update({ healthService: newState })
              }
              questionText="Which health service does the entity provide?"
              tooltip={
                <Container>
                  <Typography>
                    Curious to learn more about designated health services?
                  </Typography>
                  <Link href="https://www.law.cornell.edu/cfr/text/42/411.351#div8">
                    {"Click here"}
                  </Link>
                </Container>
              }
            />
            {this.props.referral.healthService.filter(s => {
              return s.value === true;
            }).length !== 0 && this.props.referral.entityName !== null ? (
              <Container>
                <ReferralCheckboxQuestion
                  checkboxItems={this.props.referral.insurance}
                  update={newState =>
                    this.props.update({ insurance: newState })
                  }
                  questionText="The Stark Law prohibits billing Medicare for certain
                        kinds of referrals. Is the patient being referred covered by any of the following services?"
                  tooltip={
                    "Please keep in mind, other state laws may apply if the patient is covered by Medicaid, worker’s compensation insurance, or private insurance. For example, the Illinois Insurance Claims Fraud Prevention Act prohibits makes it unlawful to offer or pay any remuneration, directly or indirectly, to induce any person to procure clients or obtain health care services. This act applies to all types of insurance coverage, including patients that are covered by private payers (e.g., Humana or Aetna)."
                  }
                />
                <ReferralCheckboxQuestion
                  checkboxItems={this.props.referral.ownershipInterests}
                  update={newState =>
                    this.props.update({ ownershipInterests: newState })
                  }
                  questionText={
                    "The Stark Law generally prohibits a physician making or receiving a referral for designated health services if he or she has an ownership or compensation relationship with the referred or referring entity, unless an exception applies. For example, an ownership interest may arise if you have an ownership interest arising from equity, debt or other means. Do you or an immediate family member have any of the following ownership interests in " +
                    this.props.referral.entityName +
                    "?"
                  }
                  tooltip={
                    "An immediate family member includes husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild."
                  }
                />
                <Container>
                  <FormGroup>
                    <Divider style={styles.divider} />
                    <Tooltip title="An “immediate family member” includes husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild.">
                      <Typography variant="subtitle1" align="justify">
                        <Box
                          fontWeight="fontWeightRegular"
                          textAlign="justify"
                          m={3}
                        >
                          The Stark Law prohibits a referring physician or an
                          immediate family member from having certain
                          compensation relationships with the referred entity.
                          Do you or an immediate family member receive any
                          payment or other benefit in cash or otherwise from the
                          entity you are referring to?
                        </Box>
                      </Typography>
                    </Tooltip>
                    <FormControlLabel
                      fullWidth={true}
                      control={
                        <Grid
                          component="label"
                          container
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>No</Grid>
                          <Grid item>
                            <Switch
                              checked={this.props.referral.compensation}
                              onChange={() => {
                                this.props.update({
                                  compensation: !this.props.referral
                                    .compensation
                                });
                              }}
                              value={this.props.referral.compensation}
                            />
                          </Grid>
                          <Grid item>Yes</Grid>
                        </Grid>
                      }
                    />
                  </FormGroup>
                </Container>
                {this.props.referral.compensation === true ? (
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
                ) : null}
              </Container>
            ) : null}
            {this.props.referral.healthService === "None of the above" ||
            this.props.referral.compensation === false
              ? noStark
              : null}
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
