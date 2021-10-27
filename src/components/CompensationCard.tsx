import React from "react";
import { Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Check, RemoveRedEye } from '@material-ui/icons';
import "../assests/styles/components/compensationCard.css";

type compensationProps = {
    hourly: number,
    annual: number,
    availability: String,
    type: String
}

export default function CompensationCard(props: compensationProps) {

    const {hourly, annual, availability, type} = props;

    return (
        <Card className="compensation-card">
            <h3 className="compensation-card-title">Compensation & availability</h3>
            <div className="compensation-card-content">
                <div className="compensation-item">
                    <div className="compensation-item-circle">
                        ${hourly || 30}/HR
                    </div>
                    <p>FREELANCE</p>
                </div>
                <div className="compensation-item">
                    <div className="compensation-item-circle">
                        ${annual || 76000}/YR
                    </div>
                    <p>PERMANENT</p>
                </div>
                <div className="compensation-item">
                    <div className="compensation-item-circle">
                        <div className="check-div"><Check /></div>
                    </div>
                    <p>AVALIABILITY</p>
                </div>
                <div className="compensation-item">
                    <div className="compensation-item-circle">
                        {type === "full_time" && "FULL TIME"}
                    </div>
                    <p>TYPE</p>
                </div>
            </div>
            <hr />
            <Link className="link-to-profile" to="/profile"><Button className="view-full-profile-btn"><RemoveRedEye />VIEW FULL PROFILE</Button></Link>
        </Card>
    )
}