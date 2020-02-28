import React from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from "material-ui";
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from "material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <React.Fragment>
          <AppBar position="static" style={styles.appBar} color="primary">
            <Typography variant="h5" align="left" style={styles.appBarTitle}>
            <LocalHospitalIcon style={styles.menuButton}/>
              Stark Law Review
            </Typography>
          </AppBar>
          <UserForm />
        </React.Fragment>
      </div>
    </MuiThemeProvider>
  );
}

const styles = {
  appBar: {
    padding: 10,
    flexGrow: 1,
    marginBottom: 15
  },
  appBarTitle: {
    padding: 0
  },
  menuButton: {
    marginRight: 15,
    marginLeft: 35,
    marginTop: 5
  },
};

export default App;
