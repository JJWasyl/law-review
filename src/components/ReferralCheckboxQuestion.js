import React, { Component } from "react";
import {
  Container,
  Box,
  FormGroup,
  Divider,
  Tooltip,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  Collapse,
  CardContent
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

export class ReferralCheckboxQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  render() {
    return (
      <Container>
        <Divider style={styles.divider} />
        <Typography variant="subtitle1" align="justify">
          <Box fontWeight="fontWeightRegular" textAlign="justify" m={3}>
            {this.props.questionText}
            {this.props.tooltip && (
              <IconButton
                edge="end"
                onClick={() => {
                  this.setState(prevState => ({
                    expanded: !prevState.expanded
                  }));
                }}
                aria-expanded={this.state.expanded}
                aria-label="show more"
              >
                <HelpIcon />
              </IconButton>
            )}
          </Box>
        </Typography>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="subtitle1">{this.props.tooltip}</Typography>
          </CardContent>
        </Collapse>
        <FormGroup>
          {this.props.checkboxItems.map((interest, index) => (
            <Tooltip
              title={interest.tooltip != null && interest.tooltip}
              disableHoverListener={interest.tooltip == null}
            >
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
            </Tooltip>
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
