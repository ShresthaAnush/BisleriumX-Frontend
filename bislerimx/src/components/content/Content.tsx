import React from 'react';

import "./Content.css";
import MainBar from "./main-bar/MainBar";
import SideBar from "./side-bar/SideBar";

export default function Content() {
    return <div className="content">
            <div className="bars-wrapper">
            <span className='popular-post-title'></span>
                <div className='bars-wrapper-inside'>
                 <MainBar/>
                 <SideBar/>
                </div>
            </div>
        </div>;
}