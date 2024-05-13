// reducer

import { ADD_TASK } from "../action-types/todoActiontype";


const initialState = {
  tasks: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
