import React from "react";
import b from "./Navbar.module.css"

const Navbar = () => {
return (
    <div className={b.nav}>
        <div><a>News </a></div>
        <div><a>Music </a></div>
        <div><a>Settings </a></div>
    </div>
)

}

export default Navbar;