
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

export default store;
