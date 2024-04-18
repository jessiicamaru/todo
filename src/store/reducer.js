import { constants } from '../store';

const initFilter = JSON.parse(localStorage.getItem('TODO_FILTER')) || { toggleAll: false, filter: 'All', jobs: [] };

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
            state.jobs.push({ ...action.payload });

            const addJobs = {
                toggleAll: state.toggleAll,
                filter: state.filter,
                jobs: state.jobs,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(addJobs));

            return {
                ...state,
            };

        case constants.SET_TOGGLE_JOB:
            console.log(action);
            state.jobs.forEach((job, index) => {
                if (job.id === action.payload.id) {
                    job.finished = !action.payload.finished;
                }
            });

            const setToggleJob = {
                toggleAll: state.toggleAll,
                filter: state.filter,
                jobs: state.jobs,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(setToggleJob));

            return {
                ...state,
            };

        case constants.SET_TOGGLE_ALL:
            if (!action.payload) {
                state.jobs.forEach((job) => {
                    job.finished = true;
                });
            } else {
                state.jobs.forEach((job) => {
                    job.finished = false;
                });
            }
            const toggleAllStorage = {
                filter: state.filter,
                toggleAll: !action.payload,
                jobs: state.jobs,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(toggleAllStorage));
            return {
                ...state,
                toggleAll: !action.payload,
            };

        case constants.SET_CLEAR_ALL:
            state.jobs.forEach((job) => {
                job.finished = false;
            });
            const clearAllStorage = {
                toggleAll: false,
                filter: state.filter,
                jobs: state.jobs,
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
                jobs: state.jobs,
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
                    state.jobs.splice(index, 1);
                }
            });

            const deleteJob = {
                toggleAll: state.toggleAll,
                filter: state.filter,
                jobs: state.jobs,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(deleteJob));

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
                }
            });

            const editJob = {
                toggleAll: state.toggleAll,
                filter: state.filter,
                jobs: state.jobs,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(editJob));
            return {
                ...state,
            };

        case constants.CHECK_TOGGLE_ALL:
            let flag = true;
            state.jobs.forEach((job) => {
                if (!job.finished) {
                    flag = false;
                }
            });

            state.toggleAll = flag;

            const checkToggleAll = {
                toggleAll: flag,
                filter: state.filter,
                jobs: state.jobs,
            };
            localStorage.setItem('TODO_FILTER', JSON.stringify(checkToggleAll));
            return {
                ...state,
            };

        default:
            return state;
    }
}

export default reducer;
export { initState };
