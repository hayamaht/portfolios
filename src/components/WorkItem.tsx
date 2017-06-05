import * as React from 'react';
import { Col, Row, Image, Button, Label } from 'react-bootstrap';
import WorkItemSchema from '../schema/WorkItemSchema';

import './WorkItem.css';

interface WorkItemProps {
    data: WorkItemSchema;
}

interface WorkInfo {
    name: string;
    value: string;
}

class WorkItem extends React.Component<WorkItemProps, null> {
    render() {
        const { data } = this.props;

        const linkButton = (data.url) ? (
            <Button bsStyle="primary" bsSize="large" href={data.url}>VIEW</Button>
        ) : null;

        const workInfo: WorkInfo[] = [];
        
        if (data.client) {
            workInfo.push({ name: 'Client', value: data.client });
        }

        if (data.date) {
            workInfo.push({ name: 'Date', value: data.date.toDateString() });
        }

        return (
            <Row className="WorkItem">
                <Col md={7}>
                    <div className="cover">
                        <a href="#">
                            <Image responsive={true} src={data.cover} />
                        </a>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="workContent">
                        <h3>{data.name}</h3>
                        <h4 className="cat"><Label>{data.cat}</Label></h4>
                        <p className="desc">{data.description}</p>
                        <ul className="workInfo">
                            {workInfo.map((it, i) => {
                                return (
                                    <li key={i}>
                                        <span>{it.name}: </span>
                                        <span>{it.value}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <h4 className="tech">
                            {data.tech.map((it, i) => {
                                return (
                                    <Label bsStyle="info" key={i}>{it}</Label>
                                );
                            })}
                        </h4>
                    </div>
                    <div className="workUrl">
                        {linkButton}
                    </div>
                </Col>
            </Row>
        );
    }
}

export default WorkItem;