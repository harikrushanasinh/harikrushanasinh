import React from "react";
import "./ParentChild.scss"

function Child(cardData) {
    console.log(cardData);
    const colorIn = {
        color: 'gray',
        textDecoration: 'underline'
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2>User Information</h2>
                </div>
                <div className="card-body">
                    <div className="field">
                        <label htmlFor="name1">Name:</label>
                        <span id="name1">{cardData.name}</span>
                    </div>
                     <div className="field">
                        <label htmlFor="number1">Number:</label>
                        <span id="number1">{cardData.mobileNo}</span>
                    </div>
                    <div className="field">
                        <label htmlFor="gender1">Gender:</label>
                        <span id="gender1">{cardData.gender}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Child;