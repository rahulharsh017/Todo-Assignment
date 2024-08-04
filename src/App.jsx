
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import tasksData from './data/task.json';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, timestamp: new Date().toISOString() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const markAsDone = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h4 className='font-bold text-3xl'>Todo List</h4>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={filteredTasks}
        updateTask={updateTask}
        markAsDone={markAsDone}
      />
    </div>
  );
};

export default App;
