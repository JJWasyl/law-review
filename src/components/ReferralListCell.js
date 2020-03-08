import React, { Component } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Container, Box, Tooltip } from "@material-ui/core";
import {
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Button,
  Typography
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "90%"
      }
    }
  })
);

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
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      medicareU: null,
      medicareE: null,
      entityName: null,
      healthService: null,
      ownershipInterests: [
        {
          key: "stock",
          label: "Stock",
          value: false
        },
        {
          key: "stockOptions",
          label: "Stock Options",
          value: false
        },
        {
          key: "LLC",
          label:
            "Membership interest in a limited liability corporation (“LLC”)",
          value: false
        },
        {
          key: "partnershipShares",
          label: "Partnership Shares",
          value: false
        },
        {
          key: "loans",
          label: "Loans",
          value: false
        },
        {
          key: "bonds",
          label: "Bonds",
          value: false
        },
        {
          key: "other",
          label: "Other",
          value: false
        },
        {
          key: "none",
          label: "None of the above",
          value: false
        }
      ]
    };
  }

  handleEntityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ entityName: event.target.value });
    console.log(this.state.entityName);
  };

  handleHealthServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ healthService: event.target.value });
    console.log(event.target.value);
  };
  handleMedicareUChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({ medicareU: !prevState.medicareU }));
  };
  handleMedicareEChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({ medicareE: !prevState.medicareE }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <form noValidate autoComplete="off">
          <div>
            <Container>
              <TextField
                fullWidth={true}
                required={true}
                margin="normal"
                id="entity name"
                label="To whom are you making the referral?"
                onChange={this.handleEntityNameChange}
                helperText="entity name"
              />
            </Container>
            <Container>
              <TextField
                id="health-service"
                select
                label="Select"
                value={this.state.healthServicse}
                onChange={this.handleHealthServiceChange}
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
            <Container>
              {this.state.healthService !== null &&
              this.state.healthService !== "None of the above" ? (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.medicareU}
                        onChange={this.handleMedicareUChange}
                        value={this.state.medicareU}
                      />
                    }
                    label={
                      "The Stark Law prohibits billing Medicare for certain kinds of referrals. Will you be submitting a claim for the service to Medicare?"
                    }
                    fullWidth={true}
                  />
                  <FormControlLabel
                    fullWidth={true}
                    control={
                      <Checkbox
                        checked={this.state.medicareE}
                        onChange={this.handleMedicareEChange}
                        value={this.state.medicareE}
                      />
                    }
                    label={
                      "Is " +
                      this.state.entityName +
                      " performing the health service AND submitting a claim to Medicare for those services?"
                    }
                  />
                </FormGroup>
              ) : null}
            </Container>
            {this.state.healthService !== null &&
            this.state.healthService !== "None of the above" ? (
              <Container>
                <Divider />
                <Typography>
                  <Box fontWeight="fontWeightRegular" textAlign="left" m={3}>
                    The Stark Law prohibits a referring physician or an
                    immediate family member from having certain ownership
                    interests in the referred entity. Do you or an immediate
                    family member have any of the following ownership interests
                    in the entity?
                  </Box>
                </Typography>
                <FormGroup>
                  {this.state.ownershipInterests.map((interest, index) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={interest.value}
                          onChange={() => {
                            this.setState(prevState => ({
                              ownershipInterests: prevState.ownershipInterests.map(
                                el =>
                                  el.key === interest.key
                                    ? { ...el, value: !el.value }
                                    : el
                              )
                            }));
                          }}
                          value={interest.value}
                        />
                      }
                      label={
                        interest.key === "other" && interest.value ? (
                          <TextField
                            onChange={txt => {
                              this.setState(prevState => ({
                                ownershipInterests: prevState.ownershipInterests.map(
                                  el =>
                                    el.key === interest.key
                                      ? { ...el, text: txt }
                                      : el
                                )
                              }));
                            }}
                          />
                        ) : (
                          interest.label
                        )
                      }
                    />
                  ))}
                </FormGroup>
              </Container>
            ) : null}
          </div>
          <Divider />
        </form>
      </MuiThemeProvider>
    );
  }
}
export default ReferralListCell;
