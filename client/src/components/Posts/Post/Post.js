import React from 'react';
import useStyle from './styles.js'  //style file implement

const Post = () => {
    const classes = useStyle(); // style function call
    return(
        <h1>Post</h1>
    );
}

export default Post;