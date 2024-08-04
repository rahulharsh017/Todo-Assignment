
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, updateTask, markAsDone }) => {
  return (
    <div className='p-4 flex gap-5 flex-wrap border w-[80%] border-black'> 
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          markAsDone={markAsDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
