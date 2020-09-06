import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header:{
        backgroundColor: 'grey',
        color: 'gold',
        textAlign: 'center',
        height: '200px',
        marginTop: '0px',
        paddingTop: '50px',
        boxSizing: 'border-box'
    }
  });

const Header = () => {
    const classes = useStyles();
    return (
       <Box>
           <div className={classes.header}>
               <h1>Social Connecting website</h1>
           </div>
       </Box>
    );
};

export default Header;