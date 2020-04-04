import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Container,
  Box,
  FormGroup,
  Divider,
  Tooltip,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField
} from "@material-ui/core";

export class ReferralCheckboxQuestion extends Component {
  render() {
    return (
      <Container>
        <Divider style={styles.divider} />
        <Tooltip title="An “immediate family member” includes husband or wife, birth or adoptive parent, child or sibling; stepparent, stepchild, stepbrother, or stepsister; father-in-law, mother-inlaw, son-in-law, daughter-inlaw, brother-inlaw, or sister-inlaw; grandparent or grandchild; and spouse of a grandparent or grandchild.">
          <Typography variant="subtitle1" align="justify">
            <Box fontWeight="fontWeightRegular" textAlign="justify" m={3}>
              {this.props.tooltip}
            </Box>
          </Typography>
        </Tooltip>
        <FormGroup>
          {this.props.checkboxItems.map((interest, index) => (
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
          ))}
        </FormGroup>
      </Container>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default ReferralCheckboxQuestion;
