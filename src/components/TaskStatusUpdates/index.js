// TaskStatusUpdates.js

import React from 'react';

import './index.css'

const TaskStatusUpdates = ({ tasks, updateTaskStatus }) => {
  const handleStatusUpdate = (taskId, status) => {
    updateTaskStatus(taskId, status);
  };

  return (
    <div className='assign-task'>
      <h2>Task Status Updates</h2>
      <ul className='task'>
        {tasks.map(task => ( 
          <li key={task.id}>
            {task.name} - {task.status}
            <button onClick={() => handleStatusUpdate(task.id, 'started')}>Start</button>
            <button onClick={() => handleStatusUpdate(task.id, 'completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskStatusUpdates;
