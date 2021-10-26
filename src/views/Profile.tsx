import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { Grid, Avatar, Tab, Tabs } from '@material-ui/core';
import { EditLocation } from '@material-ui/icons';
import SkillItem from '../components/SkillItem';
import SwipeableViews from 'react-swipeable-views';
import VideoCard from '../components/VideoCard';
import avatarImage from "../assests/images/avatar-1.jpg"
import "../assests/styles/profile.css"

// import apolloClient from '../graphql/apolloClient';
// import { UserQuery } from "../graphql/queries/query"
import axios from 'axios';

const skills = [
    {
        skill: "React",
        exp: 7
    },
    {
        skill: "Angular",
        exp: 5
    },
    {
        skill: "PHP",
        exp: 9
    },
    {
        skill: "Node.js",
        exp: 6
    },
    {
        skill: "HTML5",
        exp: 5
    },
    {
        skill: "Git",
        exp: 7
    },
    {
        skill: "Vue.js",
        exp: 3
    }
]

export default function Profile() {

    const [index, setIndex] = useState(0)

    const handleChangeIndex = useCallback((event, value) => {
        setIndex(value)
    }, [setIndex])

    const skillsMemo = useMemo(() => {
        return skills.map((skill, id) => {
            return <SkillItem key={id} skill={skill.skill} exp={skill.exp} />
        })
    }, [])

    useEffect(() => {
        // const result = apolloClient.query({
        //     query: UserQuery,
        //     fetchPolicy: 'network-only'
        // });

        axios.get("https://api.flexhire.com/api/v1/freelancers/6278", {
            headers: {
                "Content-Type": "application/json",
                "FLEXHIRE-API-KEY": "2a3ashhf4o6dos4w"
            }
        }).then((response) => {
            console.log("res: ", response)
        }).catch((err) => {
            console.log("err: ", err)
        })

    }, [])

    return (
        <div className="home-container">
            <Grid container>
                <Grid item sm={2} xs={1}></Grid>
                <Grid item sm={8} xs={10}>
                    <div className="profile-container">
                        <div className="profile-avatar-block">
                            <div className="profile-avatar-block-left">
                                <Avatar src={avatarImage} className="profile-avatar" />
                                <div>
                                    <h3 className="user-name">Freddy G.  <span className="experience-period">Techonology (7+Years)</span></h3>
                                    <p className="user-location"><EditLocation />Moscow, Russia</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="hourly-price">$30 / hr </h4>
                            </div>
                        </div>
                        <hr />
                        <div className="skills-content">
                            {skillsMemo}
                        </div>
                        <hr />
                        <div className="vidoes-content">
                            <Tabs
                                value={index}
                                onChange={handleChangeIndex}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Video Answers" />
                                <Tab label="Work & Education" />
                            </Tabs>
                            <SwipeableViews
                                index={index}
                                onChangeIndex={setIndex}
                            >
                                <div className="video-answers-content">
                                    <Grid container>
                                        <Grid item sm={6} xs={12}>
                                            <VideoCard />
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <VideoCard />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="work-education-content"> Work & Education</div>
                            </SwipeableViews>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={2} xs={1}></Grid>
            </Grid>
        </div>
    )
}