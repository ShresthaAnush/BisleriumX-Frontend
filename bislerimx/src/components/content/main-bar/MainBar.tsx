import React from 'react';

import './MainBar.css';
import Posts from '../posts/Posts';

export default function MainBar() {
    return <div className="main-bar">
            <div className='update-card'>

            <div className="update-card">
                <div className="top-section">

                    <span>UPDATE FROM BISLERIUMX</span>
                    <ion-icon name="close-circle" className='hoverable'></ion-icon>
                </div>
                <div className="body">
                    <span className="title">Hello to everyone</span>
                    <span className="description"> Visit our website for exciting offer.</span>
                    <img/>
                </div>

            </div>
            </div>

            <Posts />
        </div>
}