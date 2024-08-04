
import { createSlice } from '@reduxjs/toolkit';
import tasksData from '../data/task.json';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksData,
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, id: state.length + 1, timestamp: new Date().toISOString() });
    },
    updateTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload, timestamp: new Date().toISOString() };
      }
    },
    markAsDone: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, updateTask, markAsDone } = tasksSlice.actions;
export default tasksSlice.reducer;
