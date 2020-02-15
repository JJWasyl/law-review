import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container, Button, Box, Tooltip } from '@material-ui/core';

export class Step2 extends Component {

    continue = (e, action) => {
        e.preventDefault();
        this.props.nextStep(action);
    }

    end = e => {
        e.preventDefault();
        this.props.jumpToEnd();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Container maxwidth='sm'>
                        <h1>Are you trying to refer one of your patients to a different entity?</h1>
                        <Box component='span'>
                            <Container maxWidth='sm'>
                                <Button 
                                    variant='contained' 
                                    color='primary'
                                    primary={true}
                                    style={styles.button}
                                    onClick={(e) => {this.continue(e, 'YES')}}>Yes
                                </Button>

                                <Button 
                                    variant='contained' 
                                    color='secondary'
                                    style={styles.button}
                                    onClick={this.end}>No
                                </Button>
                            </Container>
                        </Box>
                    </Container>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Step2
