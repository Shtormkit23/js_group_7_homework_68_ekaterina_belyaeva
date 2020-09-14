import {
  CHANG_INPUT_VALUE,
  CLOSE_ERROR_MODAL,
  FETCH_COUNTER_ERROR,
  FETCH_COUNTER_REQUEST,
  FETCH_COUNTER_SUCCESS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS
} from "./actionTypes"
import axios from '../axios-api';

const fetchCounterRequest = () => {
  return {type: FETCH_COUNTER_REQUEST};
};

const fetchCounterSuccess = value => {
  return {type: FETCH_COUNTER_SUCCESS, value};
};

const fetchCounterError = error => {
  return {type: FETCH_COUNTER_ERROR, error};
};

const fetchTasksRequest = () => {
  return {type: FETCH_TASKS_REQUEST};
};

const fetchTasksSuccess = tasks => {
  return {type: FETCH_TASKS_SUCCESS, tasks};
};

const fetchTasksError = error => {
  return {type: FETCH_TASKS_ERROR, error};
};

export const fetchCounter = () => {
  return async dispatch => {
    dispatch(fetchCounterRequest());
    try {
      const response = await axios.get('/counter.json');
      dispatch(fetchCounterSuccess(response.data));
    } catch (event) {
      dispatch(fetchCounterError(event));
    }
  };
};

export const postCounter = value => {
  return async dispatch => {
    dispatch(fetchCounterRequest());
    if(value === 0) {
      value = '0';
    }
    try {
      const response = await axios.put('/counter.json', value);
      dispatch(fetchCounterSuccess(response.data));
    } catch (event) {
      dispatch(fetchCounterError(event));
    }
  };
};

export const getToDo = () => {
  return async dispatch => {
    dispatch(fetchTasksRequest());
    try {
      const response = await axios.get('/tasks.json');
      dispatch(fetchTasksSuccess(response.data));
    } catch (event) {
      dispatch(fetchTasksError(event));
    }
  };
};

export const changedTaskForm = event => {
  return {type: CHANG_INPUT_VALUE, value: event.target.value};
};

export const addTask = (newTask, event) => {
  event.preventDefault();
  return async dispatch => {
    dispatch(fetchTasksRequest());
    const task = {
      text: newTask,
    };
    try {
      await axios.post('/tasks.json', task);
      dispatch(getToDo());
    } catch (event) {
      dispatch(fetchTasksError(event));
    }
  };
};

export const removeTask = id => {
  return async dispatch => {
    dispatch(fetchTasksRequest());
    try {
      await axios.delete(`/tasks/${id}.json`);
      dispatch(getToDo());
    } catch (event) {
      dispatch(fetchTasksError(event));
    }
  };
};

export const closeModal = () => {
  return {type: CLOSE_ERROR_MODAL};
};