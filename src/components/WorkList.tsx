import * as React from 'react';
import WorkItem from './WorkItem';
import WorkItemSchema from '../schema/WorkItemSchema';

export interface WorkListProps {
    cat?: string | undefined;
    works?: WorkItemSchema[] | undefined;
}

const WorkList = ({ works }: WorkListProps ) => {
    return (works) ? (
        <div className="work-llist">
            { works.map((it, i) => {
                return (
                    <WorkItem key={i} data={it} />
                );
            })}
        </div>
    ) : (
        <div className="work-list">No Data</div>
    );
};

export default WorkList;