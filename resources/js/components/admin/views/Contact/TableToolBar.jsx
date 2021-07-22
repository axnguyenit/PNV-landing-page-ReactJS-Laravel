import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';

const useToolbarStyles = makeStyles({
    root: {
      paddingLeft: '20px',
      paddingRight: '10px',
    },
    title: {
      flex: '1 1 100%',
    },
});

const TableToolbar = () => {
    const classes = useToolbarStyles();
  
    return (
      <Toolbar
        className={classes.root}
      >
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Contact
          </Typography>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
      </Toolbar>
    );
};


export default TableToolbar;