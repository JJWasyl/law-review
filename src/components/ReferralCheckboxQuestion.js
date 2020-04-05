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
        <Tooltip title={this.props.tooltip}>
          <Typography variant="subtitle1" align="justify">
            <Box fontWeight="fontWeightRegular" textAlign="justify" m={3}>
              {this.props.questionText}
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
                    this.props.update(
                      this.props.checkboxItems.map(el =>
                        el.key === interest.key
                          ? { ...el, value: !el.value }
                          : el
                      )
                    );
                  }}
                  value={interest.value}
                />
              }
              label={
                interest.key === "other" && interest.value ? (
                  <TextField
                    value={interest.text}
                    onChange={event => {
                      this.props.update(
                        this.props.checkboxItems.map(el =>
                          el.key === interest.key
                            ? { ...el, text: event.target.value }
                            : el
                        )
                      );
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
