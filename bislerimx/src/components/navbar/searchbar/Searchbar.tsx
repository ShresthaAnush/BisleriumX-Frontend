import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
    return (
        <div className="searchbar mt-3">
            <label htmlFor="searchbar">
            <ion-icon name="search-sharp"></ion-icon>
            </label>
            <input id="searchbar" placeholder="Search" />
        </div>
    );  
}
