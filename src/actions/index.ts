import * as constants from '../constants';

export interface FetchWorks {
    type: constants.FETCH_WORKS;
    cat?: string | undefined;
}

export type WorksAction = FetchWorks;

export function fetchWorks(cat?: string): WorksAction { 
    return { 
        type: constants.FETCH_WORKS,
        cat,
    }; 
}
