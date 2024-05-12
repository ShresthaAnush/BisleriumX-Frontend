import React from 'react';

import './Posts.css';


import posts from "../../../data/posts/posts.json";
import Button from '../../button/Button';



export default function Posts() {
    return (
    <div className="posts-wrapper">
        {posts.map((post, index) => (
            <div className='post'>
                <div className="post-sidebar">
                    <ion-icon name="arrow-up-circle" className="upvote"></ion-icon>
                    <span>{post.upvotes}</span>
                    <ion-icon name="arrow-down-circle"className="downvote"></ion-icon>
                </div>

                <div className="post-title">
                    <img src="/assests/images/logo.png" style={{width:"270px"}}/>
                    <span className="post-1">r/{post.subreddit.name}</span>
                <span className='post-user'>Posted By</span>
                <span className="post-user underline">u/{post.username}</span>
                <div className="spacer"  style={{marginLeft:"40%"}}>
                        <Button label="+ JOIN" /> </div>
                </div>
                    
                <div className="post-body">
                <img src="/assests/images/post-1.png" style={{width:"570px"}}/>
                </div>
                <div className="post-footer">
                        <div className='comments footer-action'>
                            <ion-icon name="chatbox-ellipses"></ion-icon>
                            <span>{post.comments} Comments </span>
                        </div>
                         
                        <div className='share footer-action' style={{marginLeft:"20px"}}>
                            <ion-icon name="share-social"></ion-icon>
                            <span>Share</span>
                        </div>

                        <div className='save footer-action' style={{marginLeft:"20px"}}>
                            <ion-icon name="bookmarks"></ion-icon>
                            <span>Save</span>
                        </div>
                    </div>
            </div>
        ))}
    </div>
    );
};
