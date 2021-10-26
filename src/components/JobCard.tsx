import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {Person, EditLocation} from '@material-ui/icons';
import "../assests/styles/components/jobCard.css"

type jobCardProps = {
    title: String,
    content: String
}

export default function JobCard(props: jobCardProps) {

    const {title, content} = props;

    const [contentText, setContentText] = useState<String>()
    const [more, setMore] = useState<boolean>(true)

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
                <p className="manager-name"><Person />Dan Gurghian</p>
                <p className="company-name"><EditLocation />Apollo Group</p>
            </div>
        </div>
    )
}