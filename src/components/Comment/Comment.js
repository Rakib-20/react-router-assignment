import React, { useEffect, useState } from 'react';
import SingleComment from '../SingleComment/SingleComment';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    comment:{
        width:'700px',
        padding:'60px 0px'
    }
  });

const Comment = (props) => {
    const postId = props.postId;
    const [comments, setComments] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[postId])

    return (
        <div className={classes.comment}>
            <h4>Comments:{' '+comments.length}</h4>
            {
                comments.map(comment => <SingleComment key={comment.id} comment={comment}></SingleComment>)
            }
        </div>
    );
};

export default Comment;