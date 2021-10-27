import React, {useMemo} from 'react';
import { Card } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import "../assests/styles/components/flowCard.css"

type flowCardProps = {
    status: number
}

const flows = ["Pre-Iterview Request", "Questions", "Code Test"]

export default function FlowCard(props: flowCardProps) {
    
    const { status } = props;

    const flowsMemo = useMemo(() => {
        return flows.map((flow: String, id: number) => {
            return <div className={id === status ? "active-flow-item" : "flow-item"}>
                <div>
                    <div className="flow-number">{id === status ? <Check /> : id + 1}</div>
                </div>
                <div className="flow-title">
                    {flow}
                </div>
            </div>
        })
    }, [status])

    return (
        <Card className="flow-card">
            {flowsMemo}
        </Card>
    )
}