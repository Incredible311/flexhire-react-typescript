import React, { useEffect, useState, useMemo } from "react";
import { Grid, Avatar, Card, Button } from '@material-ui/core';
import { VerifiedUser, EventNote, Event, AssignmentTurnedIn } from '@material-ui/icons';
import { fetchProfile, fetchSuggestQuestions, fetchChatContracts } from "../graphql/fetchGraphql"
import CompensationCard from "../components/CompensationCard";
import "../assests/styles/dashboard.css"

export default function Dashboard() {

    const [userData, setUserData] = useState<any>();
    const [questions, setQuestions] = useState<any>();
    const [chatContracts, setChatContracts] = useState<any>();

    const verifyBadge = useMemo(() => {
        if (userData) {
            return userData.verified ? <div className="d-flex dash-verified-badge">
                <VerifiedUser /> Verified
            </div> : <div className="d-flex dash-unverified-badge">
                <VerifiedUser /> Unverified
            </div>
        }
    }, [userData])

    const userMemo = useMemo(() => {
        if (userData) {
            return <div className="user-avatar-view">
                <Avatar src={userData.avatar_url} className="avatar-img" />
                <div>
                    <h3 className="user-name">Hi {userData.first_name}, welcome to Flexhire</h3>
                    {verifyBadge}
                </div>
            </div>
        }
    }, [userData, verifyBadge])

    const compensationMemo = useMemo(() => {
        return userData && <CompensationCard
            hourly={userData.freelancer_rate}
            annual={userData.annual_compensation}
            availability={userData.profile.availability}
            type={userData.profile.availability_type[0]} />
    }, [userData])

    const suggestQuestionsMemo = useMemo(() => {
        return questions && <Card className="suggest-questions-card">
            <h3 className="card-title">Suggested Questions</h3>
            <p className="suggest-questions-count">{questions.length} available</p>
            <p className="suggest-introduction">
                Improve your profile by answering the post popular expert questions. Profiles with more answers get more views and appear first to clients in job postings.
            </p>
            {
                questions.map((question: any, id: number) => {
                    return <div key={id} className="question-div">
                        <div><div className="question-number">{id + 1}</div></div>
                        <div className="question-title">
                            {question.title}
                        </div>
                    </div>
                })
            }
        </Card>
    }, [questions])

    const chatContractsMemo = useMemo(() => {
        return chatContracts && <Card className="chat-contracts-card">
            <h3 className="card-title">New Interview Request</h3>
            <br />
            <hr />
            <div className="d-flex align-items-center request-info-item">
                <Avatar src={chatContracts[0].avatar_url} className="interview-request-avatar" />
                <div>
                    <p className="request-info-item-title1">{chatContracts[0].name}</p>
                    <p className="request-info-item-title2">{chatContracts[0].firm_role}</p>
                </div>
            </div>
            <div className="d-flex align-items-center request-info-item">
                <EventNote />
                <div>
                    <p className="request-info-item-title1">{chatContracts[0].job_title}</p>
                    <p className="request-info-item-title2">Job</p>
                </div>
            </div>
            <div className="d-flex align-items-center request-info-item">
                <Event />
                <div>
                    <p className="request-info-item-title1">{chatContracts[0].name}</p>
                    <p className="request-info-item-title2">Confirmed interview time in your local time</p>
                </div>
            </div>
            <div className="d-flex align-items-center request-info-item">
                <EventNote />
                <div>
                    <p className="request-info-item-title1">7/9 Requests from Brian Mc Sweeney</p>
                    <p className="request-info-item-title2">Click to review</p>
                </div>
            </div>
            <hr />
            <p>
                <b>{chatContracts[0].name}</b>: Hi, Andrei, Thanks for your applying to our role at Flexhire. We think your profile looks strong and could be a very interesting fit and we would like to talk to you.
            </p>
            <hr />
            <Button className="interview-accept-btn">INTERVIEW ACCEPTED</Button>
        </Card>
    }, [chatContracts])

    const noJobOfferMemo = useMemo(() => {
        return userData && <Card className="no-offer-card">
            <div className="no-offer-title"><AssignmentTurnedIn /> <h3>0</h3></div>
            <p>No job offer at the moment. When a client is interested in working with you, you'll see job offers here.</p>
        </Card>
    }, [userData])

    useEffect((): any => {
        let isSubscribed = true;
        fetchProfile().then(response => {
            isSubscribed && setUserData(response)
        })
        fetchSuggestQuestions().then(response => {
            isSubscribed && setQuestions(response)
        })
        fetchChatContracts().then(response => {
            isSubscribed && setChatContracts(response)
        })
        return () => (isSubscribed = false)

    }, [])

    return (
        <div>
            <Grid container>
                <Grid item sm={2} xs={1}></Grid>
                <Grid item sm={8} xs={10}>
                    <div className="dashboard-container">
                        {userMemo}
                        <Grid container>
                            <Grid item sm={6} xs={12}>
                                {compensationMemo}
                                {suggestQuestionsMemo}
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                {chatContractsMemo}
                                {noJobOfferMemo}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item sm={2} xs={1}></Grid>
            </Grid>
        </div>
    )
}