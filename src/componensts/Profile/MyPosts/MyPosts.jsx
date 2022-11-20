import React from "react";
import v from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPost = () => {
    return (
            <div> 
                My posts
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            <div className={v.posts}>
          <Post/>
                <Post message="Hi, whats up?"/>
                <Post message="Hi! I'm fine, thank you!"/>
                <Post />

            </div>
        </div>   

    )
}

export default MyPost;