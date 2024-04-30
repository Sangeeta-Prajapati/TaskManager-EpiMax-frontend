// TaskSummaryPage.js

import React from 'react';

const TaskSummaryPage = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div>
      <h2>Task Summary Page</h2>
      <div>
        <h3>Pending Tasks: {pendingTasks.length}</h3>
        <ul>
          {pendingTasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Completed Tasks: {completedTasks.length}</h3>
        <ul>
          {completedTasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskSummaryPage;
