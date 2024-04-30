// TaskListInterface.js

import React, { useState } from 'react';

import './index.css'

const TaskListInterface = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask({ id: Date.now(), name: taskName, assignee: null, status: 'pending' });
      setTaskName('');
    }
  };

  return (
    <div>
      <h2>Task List Interface</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Enter task name" 
        className='input-value'
        />
        <button className='button' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskListInterface;
