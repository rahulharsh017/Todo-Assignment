
import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className='bg-blue-200 flex flex-col gap-3 w-[50%] border-black p-5' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button className='bg-blue-800 text-white font-bold' type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
