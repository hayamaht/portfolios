import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import App from '../components/App';

export function mapDispatchProps(dispatch: Dispatch<actions.WorksAction>) {
    return {
        onFetch: (cat?: string) => dispatch(actions.fetchWorks(cat)),
    };
}

export default connect(null, mapDispatchProps)(App);