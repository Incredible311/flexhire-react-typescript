import React, { useEffect, useState, useMemo } from "react";
import { Grid, Avatar, Card } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import { fetchProfile, fetchSuggestQuestions, fetchChatContracts } from "../graphql/fetchGraphql"
import "../assests/styles/dashboard.css"

export default function Dashboard() {

    const [userData, setUserData] = useState<any>();
    const [questions, setQuestions] = useState<any>();
    const [chatContracts, setChatContracts] = useState<any>();

    const verifyBadge = useMemo(() => {
        if (userData) {
            return userData.verified ? <div className="d-flex verified-badge">
                <VerifiedUser /> Verified
            </div> : <div className="d-flex unverified-badge">
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
        </Card>
    }, [chatContracts])

    useEffect(() => {
        fetchProfile().then(response => {
            setUserData(response)
        })
        fetchSuggestQuestions().then(response => {
            setQuestions(response)
        })
        fetchChatContracts().then(response => {
            setChatContracts(response)
        })
    }, [setUserData, setQuestions, setChatContracts])

    return (
        <div>
            <Grid container>
                <Grid item sm={2} xs={1}></Grid>
                <Grid item sm={8} xs={10}>
                    <div className="dashboard-container">
                        {userMemo}
                        <Grid container>
                            <Grid item sm={6} xs={12}>
                                {suggestQuestionsMemo}
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                {chatContractsMemo}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item sm={2} xs={1}></Grid>
            </Grid>
        </div>
    )
}