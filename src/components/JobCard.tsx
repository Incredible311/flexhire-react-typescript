import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Person, EditLocation } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import "../assests/styles/components/jobCard.css"

type jobCardProps = {
    id: number,
    title: String,
    content: String,
    company: String,
    hiringManager: String
}

export default function JobCard(props: jobCardProps) {
    const history = useHistory();

    const { id, title, content, company, hiringManager } = props;

    const [contentText, setContentText] = useState<String>()
    const [more, setMore] = useState<boolean>(true)

    const handleRoute = useCallback((path: string) => {
        history.push(path)
    }, [history])

    const handleMoreContent = useCallback(() => {
        setMore(!more);
        if (!more) {
            const text = content.slice(0, 600) + " . . .";
            setContentText(text);
        } else {
            setContentText(content);
        }
    }, [more, content, setContentText])

    const moreBtnMemo = useMemo(() => {
        if (content.length > 800) {
            return more ? <span onClick={handleMoreContent} className="more-btn">More</span> : <span onClick={handleMoreContent} className="more-btn">Less</span>
        }
    }, [content, handleMoreContent, more])

    useEffect(() => {
        if (content.length > 800) {
            const text = content.slice(0, 600) + " . . .";
            setContentText(text);
        } else {
            setContentText(content)
        }

    }, [content])

    return (
        <div className="job-card">
            <h3 className="job-card-title">{title}</h3>
            <p className="job-card-content">
                {contentText}
                {moreBtnMemo}
            </p>
            <div className="job-card-bottom">
                <div>
                    {hiringManager && <p className="manager-name"><Person />{hiringManager}</p>}
                    {company && <p className="company-name"><EditLocation />{company}</p>}
                </div>
                <div className="job-actions-div">
                    <p onClick={() => handleRoute(`/questions?id=${id}`)}>Questions</p>
                    <p onClick={() => handleRoute(`/codetest?id=${id}`)}>Code test</p>
                </div>
            </div>
        </div>
    )
}