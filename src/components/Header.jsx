import React from "react";
import "./Header.css"

function Header() {
    return (
        <header>
            <a class="logo_link" href="#">
                {/* <img class="logo_img" src="" alt="logo"></img> */}
                Logo
            </a>        
            <input class="search_bar" type="text" placeholder="Enter anime title you are searching for"></input>
            <input class="search_button" type="button" value="Search"></input>
            
        </header>
    )
}

export default Header