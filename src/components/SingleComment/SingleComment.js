import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    singleComment:{
        padding:'10px',
        border:'1px solid lightgreen',
        margin:'10px'
    },
  });

const SingleComment = (props) => {
    const {name, email, body} = props.comment;
    const classes = useStyles();
    return (
        <div className={classes.singleComment}>
            <h3>{name}</h3>
            <p>{body}</p>
            <p><small>Email:{' '+email}</small></p>
        </div>
    );
};

export default SingleComment;