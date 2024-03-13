import { constants } from '../store';
import { addData, deleteData, patchData } from './fetchData';

const initFilter = JSON.parse(localStorage.getItem('TODO_FILTER')) || { toggleAll: false, filter: 'All' };

const initState = {
    jobs: [],
    todoInput: '',
    todoEditInput: '',
    toggleAll: false,
    filter: 'All',
    ...initFilter,
};

function reducer(state, action) {
    switch (action.type) {
        case constants.SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };

        case constants.SET_TODO_EDIT_INPUT:
            return {
                ...state,
                todoEditInput: action.payload,
            };

        case constants.ADD_JOBS:
            addData(action.payload);
            state.jobs.push({ ...action.payload });
            return {
                ...state,
            };

        case constants.SET_TOGGLE_JOB:
            console.log(action);
            state.jobs.forEach((job, index) => {
                if (job.id === action.payload.id) {
                    job.finished = !action.payload.finished;
                    patchData(action.payload.id, {
                        ...job,
                    });
                }
            });

            return {
                ...state,
            };

        case constants.SET_TOGGLE_ALL:
            if (!action.payload) {
                state.jobs.forEach((job) => {
                    job.finished = true;
                    patchData(job.id, {
                        ...job,
                    });
                });
            } else {
                state.jobs.forEach((job) => {
                    job.finished = false;
                    patchData(job.id, {
                        ...job,
                    });
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
            state.jobs.forEach((job) => {
                job.finished = false;
                patchData(job.id, {
                    ...job,
                });
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

        case constants.DELETE_JOB:
            console.log(action.payload);
            console.log(state.jobs);
            state.jobs.forEach((job, index) => {
                if (job.id === action.payload.id) {
                    // action.payload.element.removeChild();
                    state.jobs.splice(index, 1);
                }
            });
            deleteData(action.payload.id);
            return {
                ...state,
            };

        case constants.SET_EDITING:
            action.payload.classList.add('editing');

            return {
                ...state,
                todoEditInput: action.payload.querySelector('.edit').value,
            };

        case constants.REMOVE_EDITING:
            action.payload.classList.remove('editing');
            return {
                ...state,
            };

        case constants.EDIT_JOB:
            console.log(action.payload);
            state.jobs.forEach((job, index) => {
                if (job.id === action.payload.id) {
                    job.name = action.payload.name;
                    job.finished = action.payload.finished;

                    patchData(job.id, {
                        ...job,
                    });
                }
            });

            console.log(state.jobs);
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;
export { initState };
