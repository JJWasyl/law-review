import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container, Button, Box } from '@material-ui/core';

export class Ending extends Component {

    back = e => {
        e.preventDefault();
        this.props.goBack();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Container maxwidth='sm'>
                        You run no risk of Stark Law infringment.
                        <Box component='span'>
                            <Container maxWidth='sm'>
                                <Button 
                                    variant='contained' 
                                    color='primary'
                                    primary={true}
                                    style={styles.button}
                                    onClick={this.back}>Go Back
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

export default Ending
