import * as React from 'react';
import { Grid } from 'react-bootstrap';
import WorkItem from './WorkItem';
import WorkItemSchema from '../schema/WorkItemSchema';

export interface WorkListProps {
    works?: WorkItemSchema[] | undefined;
    onFetch?: () => void;
}

const WorkList = ({ works }: WorkListProps ) => {
    return (works) ? (
        <Grid className="WorkList">
            { works.map((it, i) => {
                return (
                    <WorkItem key={i} data={it} />
                );
            })}
        </Grid>
    ) : (
        <div className="WorkList">No Data</div>
    );
};

export default WorkList;