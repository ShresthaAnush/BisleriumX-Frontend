import React from 'react';

import "./Community.css";
import communities from "../../../data/communities/communities.json";
import Button from '../../button/Button';

export default function Community() {
    return <div className="community-section">
         <div className="title">
            <span className='hoverable'>Top 5 Community</span>
        </div>
         <div className='communities-wrapper'>
            {communities.map((community, index) => (
            <div className='community hoverable'>
                <span>{index + 1}</span>
                <ion-icon name="caret-up"></ion-icon>
                <ion-icon name="person"></ion-icon>
                <span className='name'>{community.name}</span>
            </div> 
            ))}
        </div>
         <div className="action-buttons">
                <Button primary label="Add Post"/>
         </div>
        </div>;    
}