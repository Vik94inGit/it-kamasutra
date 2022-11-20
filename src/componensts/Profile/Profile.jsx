import React from "react";
import MyPost from "./MyPosts/MyPosts";
import v from './Profile.module.css'



const Profile = () => {
    return (
        <div className={v.content}>
            <img src='https://img.freepik.com/free-photo/beautiful-beach-sea_74190-3820.jpg?w=2000'></img>
            <div>ava + description</div>
            < MyPost />
        </div>   

    )
}

export default Profile;