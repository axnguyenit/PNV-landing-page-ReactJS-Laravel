import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// ==========================================================
import Quote from "../../components/Typography/Quote.js";

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    typo: {
      marginBottom: "40px",
      position: "relative",
    },
});
  
  
  
const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow hover onClick={() => setOpen(!open)} className={classes.root}>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.amount + ' ' + row.currency_code}</TableCell>
          <TableCell align="right">{row.donation_for}</TableCell>
          <TableCell align="right">{row.donation_type}</TableCell>
          <TableCell align="right">{row.created_at}</TableCell>
        </TableRow>
      </React.Fragment>
    );
}

export default Row;