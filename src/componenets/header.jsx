import React from "react";

export default function Header(){
    return(
        <nav className="flex flex-row justify-between">
            <ol>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact us</li>
            </ol>
        </nav>
    )
}