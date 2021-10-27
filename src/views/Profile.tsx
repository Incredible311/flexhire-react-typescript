import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { Grid, Avatar, Tab, Tabs } from '@material-ui/core';
import { VerifiedUser, School, Work } from '@material-ui/icons';
import SubTypeItem from '../components/SubTypeItem';
import SkillItem from '../components/SkillItem';
import SwipeableViews from 'react-swipeable-views';
import VideoCard from '../components/VideoCard';
import { fetchProfile } from '../graphql/fetchGraphql'
import "../assests/styles/profile.css"

export default function Profile() {

    const [userData, setUserData] = useState<any>()
    const [index, setIndex] = useState(0)

    const handleChangeIndex = useCallback((event, value) => {
        setIndex(value)
    }, [setIndex])

    const verifyBadge = useMemo(() => {
        if (userData) {
            return userData.verified ? <div className="d-flex verified-badge">
                <VerifiedUser /> Verified
            </div> : <div className="d-flex unverified-badge">
                <VerifiedUser /> Unverified
            </div>
        }
    }, [userData])

    const subTypesMemo = useMemo(() => {
        return userData && userData.profile.freelancer_subtypes.map((subtype: any, id: number) => {
            return <SubTypeItem title={subtype.name} key={id} />
        })
    }, [userData])

    const skillsMemo = useMemo(() => {
        return userData && userData.user_skills.map((skill: any, id: number) => {
            return <SkillItem key={id} skill={skill.name} exp={skill.experience} />
        })
    }, [userData])

    const workEducationMemo = useMemo(() => {
        return userData && userData.timeline_entries.map((timeline: any, id: number) => {
            return <div className="timeline-div">
                <div className="timeline-icon">
                    {
                        timeline.entry_type === "work" ? <Work /> : <School />
                    }
                </div>
                <div>
                    <h4 className="timeline-title">{timeline.title}</h4>
                    <p className="timeline-date">{timeline.date_start} ~ {timeline.date_end}</p>
                    <p className="timeline-description">{timeline.description}</p>
                </div>
            </div>
        })
    }, [userData])

    useEffect(() => {
        fetchProfile().then(response => {
            setUserData(response)
        })

    }, [setUserData])

    const profileMemo = useMemo(() => {
        return userData && <div className="profile-container">
            <div className="profile-top-block">
                <Grid container>
                    <Grid item sm={4} xs={12} className="verify-tag-block">
                        {verifyBadge}
                        <p className="time-zone-text">{userData.timezone}</p>
                    </Grid>
                    <Grid item sm={4} xs={12} className="d-flex justify-center">
                        <Avatar src={userData.avatar_url} className="profile-avatar" />
                    </Grid>
                    <Grid item sm={4} xs={12}></Grid>
                </Grid>
                <div>
                    <h3 className="user-name">{userData.first_name} {userData.last_name} - {userData.profile.freelancer_type} </h3>
                    <h3 className="user-experience">{userData.profile.total_experience} Years Experience</h3>
                </div>
                <div className="d-flex justify-center flex-wrap">
                    {subTypesMemo}
                </div>
                <p className="profile-introduction-text">{userData.profile.text_introduction}</p>
                <div className="skills-content">
                    {skillsMemo}
                </div>
            </div>

            <hr />
            <div className="vidoes-content">
                <Tabs
                    value={index}
                    onChange={handleChangeIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    className="tabs-container"
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
                    <div className="work-education-content">
                        {workEducationMemo}
                    </div>
                </SwipeableViews>
            </div>
        </div >
    }, [userData, index, handleChangeIndex, skillsMemo, subTypesMemo, verifyBadge, workEducationMemo])

    return (
        <div className="home-container">
            <Grid container>
                <Grid item sm={2} xs={1}></Grid>
                <Grid item sm={8} xs={10}>
                    {profileMemo}
                </Grid>
                <Grid item sm={2} xs={1}></Grid>
            </Grid>
        </div>
    )
}