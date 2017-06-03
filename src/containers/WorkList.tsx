import { connect } from 'react-redux';
import { StoreState } from '../types';
import WorkList from '../components/WorkList';

export function mapStateToProps({ works }: StoreState) {
    return { works };
}

export default connect(mapStateToProps)(WorkList);
