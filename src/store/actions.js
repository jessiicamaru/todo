import {
    SET_TODO_INPUT,
    ADD_JOBS,
    SET_TOGGLE_JOB,
    SET_TOGGLE_ALL,
    SET_CLEAR_ALL,
    SET_FILTER,
    DELETE_JOB,
    SET_TODO_EDIT_INPUT,
    SET_EDITING,
    EDIT_JOB,
    REMOVE_EDITING,
} from './constants';

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const setJobs = (payload) => {
    const CryptoJS = require('crypto-js');

    const numberToEncode = Math.floor(Math.random() * 1000000 + 1);

    const stringToEncode = numberToEncode.toString();

    const encodedValue = CryptoJS.MD5(stringToEncode);

    return {
        type: ADD_JOBS,
        payload: {
            name: payload,
            finished: false,
            id: encodedValue.toString(),
        },
    };
};

export const setToggleJob = (payload) => {
    return {
        type: SET_TOGGLE_JOB,
        payload,
    };
};

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

export const deleteJob = (payload) => ({
    type: DELETE_JOB,
    payload,
});

export const setTodoEditInput = (payload) => ({
    type: SET_TODO_EDIT_INPUT,
    payload,
});

export const setEditing = (payload) => ({
    type: SET_EDITING,
    payload,
});

export const editJob = (payload) => ({
    type: EDIT_JOB,
    payload,
});

export const removeEditing = (payload) => ({
    type: REMOVE_EDITING,
    payload,
});
