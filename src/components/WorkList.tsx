import * as React from 'react';
import { Grid } from 'react-bootstrap';
import WorkItem from './WorkItem';
import WorkItemSchema from '../schema/WorkItemSchema';

class WorkList extends React.Component<{}, null> {
    render() {
        const works: WorkItemSchema[] = [{
            name: 'ABC',
            cover: 'images/a.jpg',
            description: 'aasdasdasd',
            tech: ['WordPress', 'PHP', 'MySQL'],
            type: 'Web',
        }];
        return (
            <Grid>
                { works.map((it, i) => {
                    return (
                        <WorkItem key={i} data={it} />
                    );
                })}
            </Grid>
        );
    }
}

export default WorkList;