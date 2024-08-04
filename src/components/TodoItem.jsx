
import React, { useState } from 'react';

const TodoItem = ({ task, updateTask, markAsDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, title, description, timestamp: new Date().toISOString() });
    setIsEditing(false);
  };

  return (
    <div className='border-black bg-yellow-200  flex flex-col gap-3' >
      {isEditing ? (
        <div className='flex flex-col gap-4 p-5'>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className='bg-blue-300 w-[3rem] p-1 text-[1rem] mx-auto ' onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className='border-black bg-yellow-200 p-5 flex flex-col gap-3'>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
          <div className='flex gap-3'>
          <button className='bg-blue-300 w-[3rem] p-1 text-[1rem] ' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='bg-blue-300 w-[3rem] p-1 text-[1rem] ' onClick={() => markAsDone(task.id)}>
            {task.completed ? 'Undo' : 'Done'}
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
