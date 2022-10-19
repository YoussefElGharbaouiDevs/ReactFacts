import React from "react"
import './main.css'

export default function Main() {
    return (
        <main>
            <h1 className="Title">Fun facts about React </h1>
            <ul className="list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of entreprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}