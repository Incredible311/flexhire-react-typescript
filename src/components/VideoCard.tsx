import React from 'react'
// import video from "../assests/video/4k.mp4";
import { Card } from '@material-ui/core';
import "../assests/styles/components/videoCard.css"

export default function VideoCard() {
    return (
        <Card className="video-card">
            <video src={"../assests/video/4k.mp4"} width="400" controls></video>
            <p>video</p>
        </Card>
    )
}