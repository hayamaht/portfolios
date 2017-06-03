import * as React from 'react';
import { Col, Row, Image, Button } from 'react-bootstrap';
import WorkItemSchema from '../schema/WorkItemSchema';

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

        workInfo.push({ name: 'Tech', value: data.tech.join(',') });

        return (
            <Row className="WorkItem">
                <Col md={7}>
                    <Image responsive={true} src={data.cover} />
                </Col>
                <Col md={5}>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
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
                    {linkButton}
                </Col>
            </Row>
        );
    }
}

export default WorkItem;