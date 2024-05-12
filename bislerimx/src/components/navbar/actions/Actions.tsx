import React from "react";
import "./Actions.css";
import Button from "../../button/Button";




export default function Actions() {
    return (
        <div className="actions" style={{marginTop:"20px"}}>
            <Button label="Log In" />
            <Button primary label="Sign Up" />
            <div className="profile hoverable" style={{marginRight:"20px"}}>
            <ion-icon name="person-outline" className="hoverable"></ion-icon>
            <ion-icon name="chevron-down-outline" className="hoverable"></ion-icon>
            </div>
        </div>
    );
}
