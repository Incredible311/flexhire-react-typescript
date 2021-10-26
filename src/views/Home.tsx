import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core';
import JobCard from '../components/JobCard';
import "../assests/styles/home.css"

const jobs = [
    {
        title: "Conversion Rate Optimization - Subscriptions",
        content: `We own and control an organization tasked with the responsibility of creating idea of illustrational design, and the portrait animation on t-shirts, sweat shirt, polos, sweat pants and other clothing item. We are hiring a graphic illustrator who would be responsible for the drafting and creation of graphical designs to be printed. We are in need of a graphic design who can;

        Create design banners, logos, product illustration, graphics, formats, print production in line with the requirement of the show
        - Support in the design of graphics for social media posts on show’s account and website.
        - Creation of illustrations/designs for digital campaigns to aid visibility
        - Assist with the introductory animations for the show
        - Other related roles are inclusive.
        - Support in the design of graphics for social media posts on show’s account and website.
        - Creation of illustrations/designs for digital campaigns to aid visibility
        - Assist with the introductory animations for the show
        - Other related roles are inclusive.`
    },
    {
        title: "Conversion Rate Optimization - Subscriptions",
        content: `We own and control an organization tasked with the responsibility of creating idea of illustrational design, and the portrait animation on t-shirts, sweat shirt, polos, sweat pants and other clothing item. We are hiring a graphic illustrator who would be responsible for the drafting and creation of graphical designs to be printed. We are in need of a graphic design who can.`
    },
    {
        title: "Conversion Rate Optimization - Subscriptions",
        content: `We own and control an organization tasked with the responsibility of creating idea of illustrational design, and the portrait animation on t-shirts, sweat shirt, polos, sweat pants and other clothing item. We are hiring a graphic illustrator who would be responsible for the drafting and creation of graphical designs to be printed. We are in need of a graphic design who can.`
    },
    {
        title: "Conversion Rate Optimization - Subscriptions",
        content: `We own and control an organization tasked with the responsibility of creating idea of illustrational design, and the portrait animation on t-shirts, sweat shirt, polos, sweat pants and other clothing item. We are hiring a graphic illustrator who would be responsible for the drafting and creation of graphical designs to be printed. We are in need of a graphic design who can.`
    }
]

export default function Home() {

    const jobCardsMemo = useMemo(() => {
        return jobs.map((job, id) => {
            return <JobCard key={id} title={job.title} content={job.content}/>
        })
    }, [])

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