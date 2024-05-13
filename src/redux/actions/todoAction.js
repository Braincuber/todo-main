import { ADD_TASK } from "../action-types/todoActiontype";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
  });