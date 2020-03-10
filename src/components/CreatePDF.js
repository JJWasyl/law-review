import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{this.props.steps["Q4"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q4"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q5"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q5"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q6"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q6"].answer.Maybe?"You maybe at risk of Stark Law!":
                "Stark Law may not apply."
                }<br/>
                For further consultation contact:<br/> xxx xxxx xxxx <br/> <br/>               
                Q1: {this.props.steps["Q4"].questionText}<br/>
                Ans: {this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":this.props.steps["Q4"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q2: {this.props.steps["Q5"].questionText}<br/>
                Ans: {this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q5"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q3: {this.props.steps["Q6"].questionText}<br/>
                Ans: {this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q6"].answer.Maybe?"Maybe":"Null"} <br/><br/>
            </Text>
        </View>
      </Page>
    </Document>
  );

const MyDocument = () => (
    <Document>
      <Page size="A4" style={pdfstyles.page}>
        <View style={pdfstyles.section}>
          <Text>{this.props.steps["Q4"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q4"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q5"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q5"].answer.Maybe?"You maybe at risk of Stark Law!":
                this.props.steps["Q6"].answer.No?"You maybe at risk of Stark Law!":this.props.steps["Q6"].answer.Maybe?"You maybe at risk of Stark Law!":
                "Stark Law may not apply."
                }<br/>
                For further consultation contact:<br/> xxx xxxx xxxx <br/> <br/>               
                Q1: {this.props.steps["Q4"].questionText}<br/>
                Ans: {this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":this.props.steps["Q4"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q2: {this.props.steps["Q5"].questionText}<br/>
                Ans: {this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q5"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q3: {this.props.steps["Q6"].questionText}<br/>
                Ans: {this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q6"].answer.Maybe?"Maybe":"Null"} <br/><br/>
            </Text>
        </View>
      </Page>
    </Document>
  );
  ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

const App = () => (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
ReactDOM.render(<App />, document.getElementById('root'));


const App = () => (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
ReactDOM.render(<App />, document.getElementById('root'));


ReactPDF.render(<MyDocument />, `${__dirname}/StarkLawReview.pdf`);
