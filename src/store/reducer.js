import { constants } from '../store';
import { addData } from './fetchData';

const initFilter = JSON.parse(localStorage.getItem('TODO_FILTER')) || { toggleAll: false, filter: 'All', itemLeft: 0 };

const initState = {
    jobs: [],
    todoInput: '',
    toggleAll: false,
    filter: 'All',
    itemLeft: 0,
    ...initFilter,
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
            state.jobs.forEach((job, index) => {
                if (job.id === action.id) {
                    job.finished = !job.finished;
                }
            });
            return {
                ...state,
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
            const toggleAllStorage = {
                filter: state.filter,
                toggleAll: !action.payload,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(toggleAllStorage));
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
            const clearAllStorage = {
                toggleAll: false,
                filter: state.filter,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(clearAllStorage));
            return {
                ...state,
                toggleAll: false,
            };

        case constants.SET_FILTER:
            const filterStorage = {
                toggleAll: state.toggleAll,
                filter: action.payload,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(filterStorage));
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
