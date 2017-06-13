import { connect } from 'react-redux';
import { StoreState } from '../types';
import WorkList, { WorkListProps } from '../components/WorkList';

export function mapStateToProps({ works }: StoreState, { cat }: WorkListProps) {
    if (cat) {
        return { works: works.filter(t => t.cat.toLocaleLowerCase() === cat) };
    }
    return { works };
}

export default connect(mapStateToProps)(WorkList);
