// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, markAsDone } from './store/taskReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTask(task));
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1 className='text-3xl font-bold'>Todo List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TodoForm addTask={handleAddTask} />
      <TodoList
        tasks={filteredTasks}
        updateTask={handleUpdateTask}
        markAsDone={handleMarkAsDone}
      />
    </div>
  );
};

export default App;
