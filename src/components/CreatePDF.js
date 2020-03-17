import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Doc from './DocService';
import PdfContainer from './PdfContainer';
import { Container, Button, Box } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class CreatePDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Still, Jaime',
      rank: 'SGT',
      description: 'Demonstrate how to export an HTML section to PDF'
    };
  }
  back = e => {
    e.preventDefault();
    this.props.goBack();
  };
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((state) => {
      state[name] = value;
      return state;
    })
  }

  createPdf = (html) => Doc.createPdf(html);

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <section className="header-bar">
          <span className="header">Export to PDF</span>
        </section>
        <PdfContainer createPdf={this.createPdf}>
          <React.Fragment>
          <Container maxwidth="sm">
            <h1>Assisted Stark Law review</h1>
          </Container>
          <Container maxWidth="sm">
            <Card style={styles.cardmain}>
              <CardContent>
                <Typography variant="h5" component="h2" style={styles.cardmain}>
                {this.props.steps["Q4"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q4"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q5"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q5"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q6"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q6"].answer.Maybe?"You maybe at risk of Stark Law!":
                "Stark Law may not apply."
                }<br/>
                For further consultation contact:<br/> xxx-xxx-xxxx <br/> <br/>                </Typography>
                <Typography variant="body2" component="p" align="justify">
                Q1: {this.props.steps["Q4"].questionText}<br/>
                Ans: {this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":this.props.steps["Q4"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q2: {this.props.steps["Q5"].questionText}<br/>
                Ans: {this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q5"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q3: {this.props.steps["Q6"].questionText}<br/>
                Ans: {this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q6"].answer.Maybe?"Maybe":"Null"} <br/><br/>

                </Typography>
              </CardContent>
            </Card>
          </Container>
          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    marginTop: 15
  },
  cardmain: {
    minWidth: 275,
    margin: 15,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
    paddingTop: '15%',
  },
};

export default CreatePDF;
