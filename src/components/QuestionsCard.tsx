import React, { useEffect, useState, useMemo } from "react";
import { Card } from '@material-ui/core';
import { Error, Comment } from '@material-ui/icons';
import { fetchJobs } from "../graphql/fetchGraphql"
import { useLocation } from 'react-router-dom';
import "../assests/styles/components/questionsCard.css"

export default function QuestionsCard() {
    const location = useLocation();
    const [jobs, setJobs] = useState<any>();
    const [id, setId] = useState<number>();

    useEffect(() => {
        fetchJobs().then(response => {
            setJobs(response)
        })
        const tId: any = new URLSearchParams(location.search).get('id');
        setId(parseInt(tId))
    }, [setJobs, setId, location])

    const questionsMemo = useMemo(() => {
        return jobs && jobs.map((job: any) => {
            if (job.id === id) {

                return job.job.questions && job.job.questions.map((question: any, idx: number) => {
                    return <div key={idx}>
                        <hr />
                        <div className="questions-item">
                            <Comment />
                            <p>{question.title}</p>
                        </div>
                    </div>
                })
            }
            return true;
        })
    }, [jobs, id])

    return (
        <Card className="questions-card">
            <h3 className="questions-card-title">Questions</h3>
            <p className="questions-introduction">
                Flexhire has asked you to answer the following questions before scheduling an in-person interview. You can use our built in recorder and teleprompter and check out sample videos for inspiration, or upload an existing video if you prefer. Although a video answer is recommended, you can answer via text as an alternative.
            </p>
            <div className="questions-alert-text">
                <Error />
                <p>Videos must be at most 1 minute long and textual answers must be at most 1500 characters long.</p>
            </div>
            <div className="questions-content">
                <div className="alert-text">
                    <Error />
                    <p>Record a brief video introduction describing who you are, where you're from, your background, education and work experience</p>

                </div>
                {questionsMemo}
            </div>
            <p>If you have any questions, you can message Biran from Flexhire.</p>
        </Card>
    )
}