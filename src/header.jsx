import React from "react"
import logo from "./images/react-logo-small.svg"
import "./header.css"

export default function Navbar() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="react-logo"></img>
                <h3 className="logoText">ReactFacts</h3>
            </div>
            <div className="extraTitle">
                <h4>React Course - Project 1 </h4>  
            </div>
        </div>
    )
}