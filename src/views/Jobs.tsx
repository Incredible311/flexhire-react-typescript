import React, { useMemo, useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import JobCard from '../components/JobCard';
import { fetchJobs } from "../graphql/fetchGraphql"
import "../assests/styles/home.css"

export default function Home() {

    const [jobs, setJobs] = useState<any>()

    const jobCardsMemo = useMemo(() => {
        return jobs && jobs.map((job: any, id: number) => {
            return <JobCard
                key={id}
                id={job.id}
                title={job.job_title}
                content={job.description}
                company={job.company_name}
                hiringManager={job.hiring_manager}
                />
        })
    }, [jobs])

    useEffect(() => {
        fetchJobs().then(response => {
            setJobs(response)
        })

    }, [setJobs])

    return (
        <div className="home-container">
            <Grid container>
                <Grid item sm={2} xs={1}></Grid>
                <Grid item sm={8} xs={10}>
                    <div className="jobs-container">
                        <h3 className="jobs-title">Jobs</h3>
                        <hr />
                        {
                            jobCardsMemo
                        }
                    </div>
                </Grid>
                <Grid item sm={2} xs={1}></Grid>
            </Grid>
        </div>
    )
}