import React from 'react';
import { Card } from '@material-ui/core';
import "../assests/styles/components/codeTestCard.css";

export default function CodeTestCard(){

    return (
        <Card className="code-test-card">
            <h3 className="code-test-card-title">Code Test</h3>
            <p className="code-test-introduction">Flexhire has asked you to provide a solution to the following code test. Once ready, submit the link to the project, any additional instructions and optionally a screenshot.</p>
            <div className="code-test-content">
                <h4 className="code-test-content-title">Flexhire Code Test</h4>
                <hr />
                <p className="code-test-introduction">As part of our hiring process at Flexhire, we require engineers to build a small prototype for viewing some data from the Flexhire API.</p>
                <h4>Goals of this code test</h4>
            </div>
        </Card>
    )
}