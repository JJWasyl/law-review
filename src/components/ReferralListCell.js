import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Box } from "@material-ui/core";
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography
} from "@material-ui/core";

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
            this.props.referral.healthService !== "None of the above" ? (
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
              </Container>
            ) : null}
            {this.props.referral.healthService === "None of the above"
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
