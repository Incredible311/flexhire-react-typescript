import React from "react";
import { Grid } from '@material-ui/core';
import FlowCard from "../components/FlowCard";
import CodeTestCard from "../components/CodeTestCard";
import "../assests/styles/home.css"

export default function CodeTest() {
    return (
        <div className="home-container">
            <Grid container>
                <Grid item sm={2} xs={1}></Grid>
                <Grid item sm={8} xs={10}>
                    <Grid container>
                        <Grid item sm={3} xs={12}>
                            <FlowCard status={2} />
                        </Grid>
                        <Grid item sm={9} xs={12}>
                            <CodeTestCard />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={2} xs={1}></Grid>
            </Grid>
        </div>
    )
}