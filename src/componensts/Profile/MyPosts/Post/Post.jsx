import React from "react";
import v from './Post.module.css'


const Post = (props) => {
    return (


        <div className={v.item}>
            <img src='https://img.freepik.com/premium-vector/sensei-logo-vector_8124-9.jpg?w=2000'></img>
            post 1 <span> {props.message}</span>
            <div><span>Like</span></div>
        </div>

    )
}

export default Post;