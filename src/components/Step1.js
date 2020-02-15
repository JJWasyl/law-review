import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Container, Button, Box } from '@material-ui/core';

export class Step1 extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Stark Law review"/>
                    <Container maxwidth='sm'>
                        <h1>Are you a physician?</h1>
                        <Box component='span' padding={10}>
                            <Container maxWidth='sm'>
                                <Button 
                                    variant='contained' 
                                    color='primary'
                                    primary={true}
                                    style={styles.button}
                                    onClick={this.continue}>Yes
                                </Button>
                                
                                <Button 
                                    variant='contained' 
                                    color='secondary'
                                    style={styles.button}
                                    onClick={this.continue}>No
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

export default Step1
