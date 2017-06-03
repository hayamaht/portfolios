import { WorksAction } from '../actions';
import { StoreState } from '../types';
import { FETCH_WORKS } from '../constants';

import worksData from '../data/works.js';

export function works(state: StoreState, action: WorksAction): StoreState {
    switch (action.type) {
        case FETCH_WORKS:
            if (action.cat) {
                const w = worksData.filter(it => it.cat === action.cat);
                return { ...state, works: w};
            } 
            return { ...state, works: worksData };

        default:
            return state;
    }
}
