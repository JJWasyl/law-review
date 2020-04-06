import React, { Component } from "react";
import {
  Container,
  Box,
  FormGroup,
  Divider,
  Typography,
  FormControlLabel,
  Collapse,
  CardContent,
  Grid,
  Switch
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

export class ReferralYesNo extends Component {
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
          <FormControlLabel
            fullWidth={true}
            control={
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>No</Grid>
                <Grid item>
                  <Switch
                    checked={this.props.yesno}
                    onChange={() => {
                      this.props.update(!this.props.yesno);
                    }}
                    value={this.props.yesno}
                  />
                </Grid>
                <Grid item>Yes</Grid>
              </Grid>
            }
          />
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
export default ReferralYesNo;
