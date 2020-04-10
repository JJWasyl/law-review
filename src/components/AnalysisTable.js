import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    table: {
        minWidth: 650,
    },
    table_row: {
        whiteSpace: 'normal',
        wordWrap: 'break-word'
    }
}

function createData(question, explanation) {
  return {question, explanation};
}

export class AnalysisTable extends Component {

  getQ6Exp = () => {
    if (this.props.steps["Q6"].answer.Yes) return "This is in direct violation of the Stark Law.";
    if (this.props.steps["Q6"].answer.No) return "Based on the information you answered, since you are not referring patients to an entity or physician or not receiving referrals for patients from an entity or physician that provides health care services you are not in violation of the Stark Law.";
    if (this.props.steps["Q6"].answer.Maybe) return "Based on the information you answered, since you are unsure if you are referring patients to an entity that provides health care services you may or may not be in violation of the Stark Law.";
    return "Default";
  };

  getDHSExp = () => {
    var dhs = this.props.dhs();
    if (dhs) return dhs;
    return "Based on the information you provided, the Stark Law likely does not apply because the Stark Law only prohibits referrals for certain kinds of services known as “designated health services” or “DHS.” However, other laws may apply to your arrangement (e.g., state Stark Laws, the Anti-Kickback Statute, Fee Splitting Statutes, and the Code of Medical Ethics). Please contact a Honigman attorney to confirm";
  };

  getMediExp = () => {
    var medi = this.props.medi();
    if (medi) return "Yes";
    return "Based on the information you answered, since the claim for the service was not billed to Medicare, you are not in violation of the Stark Law. It is critical to  keep in mind, as described further in the memo, other state laws may apply if the patient is covered by Medicaid, Worker’s Compensation Insurance, or private insurance. For example, the Illinois Insurance Claims Fraud Prevention Act prohibits offering or paying any remuneration, directly or indirectly, to induce any person to procure clients or obtain health care services. This act applies to all types of insurance coverage, including patients that are covered by private payers (e.g., Humana or Aetna).";
  };

  getInsExp = () => {
    for (var i = 0; i < this.props.steps["Q7"].answer.length; ++i) {
    var ins = this.props.steps["Q7"].answer[i].insurance;
      if (ins[1] || ins[2] || ins[3]) return "Yes";
    }
    return "Based on the information you provided,  the federal Stark Law likely does not apply. However, some states also prohibit billing Medicaid, Worker's Compensation Insurance, or private insurance companies for a prohibited referral. Please contact a Honigman attorney to confirm whether  state law applies to your arrangement.";
  };

  render() {
      
    const rows = [
      createData(this.props.steps["Q6"].questionText, this.getQ6Exp()),
      createData("The Stark Law only prohibits referrals for certain kinds of services known as “designated health services” or “DHS.” Is the referral for any of the following designated health services? ",
                 this.getDHSExp()),
      createData("The Stark Law prohibits billing Medicare for certain kinds of referrals. Is the patient covered by Medicare?",
                 this.getMediExp()),
      createData("Is the patient covered by Medicaid, Worker's Compensation, or Private Insurance?",
                 this.getInsExp()),
    ];

    return (
        <TableContainer component={Paper}>
        <Table style={styles.table} aria-label="simple table">
            <TableHead>
            <TableRow style={styles.table_row}>
                <TableCell>Question</TableCell>
                <TableCell align="left">Explanation</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name} style={styles.table_row}>
                <TableCell component="th" scope="row" align="justify">
                    {row.question}
                </TableCell>
                <TableCell align="justify">{row.explanation}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
  }
}

export default AnalysisTable;