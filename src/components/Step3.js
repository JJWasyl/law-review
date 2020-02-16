import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container, Button, Box, Tooltip, 
        FormGroup, FormControl, Checkbox,
        FormHelperText, FormControlLabel, FormLabel } from '@material-ui/core';

const healthEntities = [
    'sPractice',
    'SProp',
    'agency',
    'corp',
    'partner',
    'llc',
    'found',
    'nonProf',
    'health',
]


export class Step3 extends Component {
    state = {
        sPractice: false,
        SProp: false,
        agency: false,
        corp: false,
        partner: false,
        llc: false,
        found: false,
        nonProf: false,
        health: false,
        noneAbove: true,
    }

    handleCheck = name => event => {
        this.setState({ ...this.state, [name]: event.target.checked});
    }
    
    render() {
        //const error = boxList.filter(v => v).length < 1;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Container maxwidth='sm'>
                        <h1>What type of entity is it?</h1>
                        <Box component='span'>
                            <Container maxWidth='sm'>
                                <FormControl component='fieldset'>
                                    <FormLabel component='legend'>
                                    Select one
                                    <FormGroup>
                                        {healthEntities.map(n => 
                                            <FormControlLabel
                                                control={<Checkbox 
                                                    checked={false} 
                                                    onChange={this.handleCheck(n)}
                                                    value={n}/>}
                                            />)
                                            .reduce((prev, curr) => [prev, ' ', curr])}
                                        <FormControlLabel
                                            control={<Checkbox 
                                                checked={true}
                                                onChange={this.handleCheck('noneAbove')}
                                                value='None'/>}
                                        />
                                    </FormGroup>
                                    </FormLabel>
                                </FormControl>
                            </Container>
                        </Box>
                    </Container>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Step3
