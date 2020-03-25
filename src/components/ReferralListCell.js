import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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

const compensation = [
  {
    key: "cash",
    label: "Salary or other cash payments",
    value: false
  },
  {
    key: "goods",
    label: "Free or discounted goods, equipment or services",
    value: false
  },
  {
    key: "rent",
    label: "Free or discounted rent",
    value: false
  },
  {
    key: "loanForgiveness",
    label: "Forgiveness of amounts owed",
    value: false
  },
  {
    key: "tickets",
    label: "Trips or tickets",
    value: false
  },
  {
    key: "bonuses",
    label: "Bonuses",
    value: false
  },
  {
    key: "charity",
    label: "Charitable donations",
    value: false
  },
  {
    key: "other",
    label: "Other net economic benefit",
    value: false
  }
];

const healthServices = [
  {
    key: "clinic",
    label: "Clinical Laboratory Services",
    value: false
  },
  {
    key: "physicalTherapy",
    label: "Physical Therapy Services",
    value: false
  },
  {
    key: "radiology",
    label: "Radiology and Imaging Services",
    value: false
  },
  {
    key: "radiation",
    label: "Radiation Therapy Services and Supplies",
    value: false
  },
  {
    key: "equipment",
    label: "Durable medical equipment and supplies",
    value: false
  },
  {
    key: "nutrients",
    label: "Parenteral and enteral nutrients, equipment and supplies",
    value: false
  },
  {
    key: "prosthetics",
    label: "Prosthetics, orthotics, and prosthetic devices and supplies",
    value: false
  },
  {
    key: "homeHealth",
    label: "Home health services",
    value: false
  },
  {
    key: "outpatientDrugs",
    label: "Outpatient prescription drugs",
    value: false
  },
  {
    key: "hospitalServices",
    label: "Inpatient and outpatient hospital services",
    value: false
  },
  {
    key: "other",
    label: "Other",
    value: false,
    text: ""
  },
  {
    key: "none",
    label: "None of the above",
    value: true,
    text: ""
  }
];
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
                  this.props.referral.healthService != null
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
                helperText="entity name"
              />
            </Container>
            <Container>
              <TextField
                id="health-service"
                select
                label="Select"
                value={this.props.referral.healthService}
                onChange={event => {
                  this.props.update({ healthService: event.target.value });
                }}
                helperText="Which health service does the entity provide?"
                variant="filled"
              >
                {healthServices.map(option => (
                  <MenuItem key={option.key} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Container>
            {this.props.referral.healthService !== null &&
            this.props.referral.healthService !== "None of the above" &&
            this.props.referral.entityName != null &&
            this.props.referral.entityName !== "" ? (
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
                <Container>
                  <Divider style={styles.divider} />
                  <Typography variant="subtitle1" align="justify">
                    <Box
                      fontWeight="fontWeightRegular"
                      textAlign="justify"
                      m={3}
                    >
                      The Stark Law prohibits a referring physician or an
                      immediate family member from having certain ownership
                      interests in the referred entity. Do you or an immediate
                      family member have any of the following ownership
                      interests in the entity?
                    </Box>
                  </Typography>
                  <FormGroup>
                    {this.props.referral.ownershipInterests.map(
                      (interest, index) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={interest.value}
                              onChange={() => {
                                this.props.update({
                                  ownershipInterests: this.props.referral.ownershipInterests.map(
                                    el =>
                                      el.key === interest.key
                                        ? { ...el, value: !el.value }
                                        : el
                                  )
                                });
                              }}
                              value={interest.value}
                            />
                          }
                          label={
                            interest.key === "other" && interest.value ? (
                              <TextField
                                value={interest.text}
                                onChange={event => {
                                  this.props.update({
                                    ownershipInterests: this.props.referral.ownershipInterests.map(
                                      el =>
                                        el.key === interest.key
                                          ? { ...el, text: event.target.value }
                                          : el
                                    )
                                  });
                                }}
                              />
                            ) : (
                              interest.label
                            )
                          }
                        />
                      )
                    )}
                  </FormGroup>
                </Container>
                <Container>
                  <FormGroup>
                    <Divider style={styles.divider} />
                    <Typography variant="subtitle1" align="justify">
                      <Box
                        fontWeight="fontWeightRegular"
                        textAlign="justify"
                        m={3}
                      >
                        The Stark Law prohibits a referring physician or an
                        immediate family member from having certain compensation
                        relationships with the referred entity. Do you or an
                        immediate family member receive any payment or other
                        benefit in cash or otherwise from the entity you are
                        referring to?
                      </Box>
                    </Typography>
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
                  <Container>
                    <TextField
                      id="compensationType"
                      select
                      label="Select"
                      value={this.props.referral.compensationType}
                      onChange={event => {
                        this.props.update({
                          compensationType: event.target.value
                        });
                      }}
                      helperText={
                        "Do you receive any of the following from " +
                        this.props.referral.entityName +
                        "?"
                      }
                      variant="filled"
                    >
                      {compensation.map(option => (
                        <MenuItem key={option.key} value={option.label}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Container>
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
