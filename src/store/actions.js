import { SET_TODO_INPUT, ADD_JOBS, SET_TOGGLE_JOB, SET_TOGGLE_ALL, SET_CLEAR_ALL, SET_FILTER } from './constants';

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const setJobs = (payload) => ({
    type: ADD_JOBS,
    payload: {
        name: payload,
        finished: false,
    },
});

export const setToggleJob = ({ id, finished }) => ({
    type: SET_TOGGLE_JOB,
    id,
    finished,
});

export const setToggleAll = (payload) => ({
    type: SET_TOGGLE_ALL,
    payload,
});

export const setClearAll = () => ({
    type: SET_CLEAR_ALL,
});

export const setFilter = (payload) => ({
    type: SET_FILTER,
    payload,
});
