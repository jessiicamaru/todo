import { constants } from '../store';
import { addData, editData } from './fetchData';

const initState = {
    jobs: [],
    todoInput: '',
    toggleAll: false,
    filter: 'All',
};

function reducer(state, action) {
    switch (action.type) {
        case constants.SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };

        case constants.ADD_JOBS:
            const jobs = addData(action.payload);
            return {
                ...state,
                jobs: jobs,
            };

        case constants.SET_TOGGLE_JOB:
            const afterEditJobs = editData(action.id, { finished: !action.finished });

            return {
                ...state,
                jobs: afterEditJobs,
            };

        case constants.SET_TOGGLE_ALL:
            if (!action.payload) {
                state.jobs = state.jobs.map((job) => {
                    return {
                        name: job.name,
                        finished: true,
                    };
                });
            } else {
                state.jobs = state.jobs.map((job) => {
                    return {
                        name: job.name,
                        finished: false,
                    };
                });
            }
            return {
                ...state,
                toggleAll: !action.payload,
            };
        case constants.SET_CLEAR_ALL:
            state.jobs = state.jobs.map((job) => {
                return {
                    name: job.name,
                    finished: false,
                };
            });
            return {
                ...state,
                toggleAll: false,
            };
        case constants.SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
export { initState };
