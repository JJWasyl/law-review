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
  Button
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
                label="To whom are you making the referral?"
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
              tooltip={null}
            />
            {this.props.referral.healthService.filter(s => {
              return s.value === true;
            }).length !== 0 && this.props.referral.entityName !== null ? (
              <Container>
                <Container>
                  <FormGroup>
                    <Divider style={styles.divider} />
                    <Typography variant="subtitle1" align="justify">
                      <Box
                        fontWeight="fontWeightRegular"
                        textAlign="justify"
                        m={3}
                      >
                        The Stark Law prohibits billing Medicare for certain
                        kinds of referrals.
                      </Box>
                    </Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.props.referral.medicareU}
                          onChange={() => {
                            this.props.update({
                              medicareU: !this.props.referral.medicareU
                            });
                          }}
                          value={this.props.referral.medicareU}
                        />
                      }
                      label={
                        "Will you be submitting a claim for the service to Medicare?"
                      }
                      fullWidth={true}
                    />
                    <FormControlLabel
                      fullWidth={true}
                      control={
                        <Checkbox
                          checked={this.props.referral.medicareE}
                          onChange={() => {
                            this.props.update({
                              medicareE: !this.props.referral.medicareE
                            });
                          }}
                          value={this.props.referral.medicareE}
                        />
                      }
                      label={
                        "Is " +
                        this.props.referral.entityName +
                        " performing the health service AND submitting a claim to Medicare for those services?"
                      }
                    />
                  </FormGroup>
                </Container>
                <ReferralCheckboxQuestion
                  checkboxItems={this.props.referral.ownershipInterests}
                  update={newState =>
                    this.props.update({ ownershipInterests: newState })
                  }
                  questionText="The Stark Law prohibits a referring physician or an
                        immediate family member from having certain ownership
                        interests in the referred entity. Do you or an immediate
                        family member have any of the following ownership
                        interests in the entity?"
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
