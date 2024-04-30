// TaskAssignment.js

import React, { useState } from 'react';

import './index.css'

const TaskAssignment = ({ tasks, assignTask }) => {
    const [selectedTaskId, setSelectedTaskId] = useState('');
    const [assignee, setAssignee] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTaskId && assignee.trim() !== '') {
            assignTask(selectedTaskId, assignee);
            setSelectedTaskId('');
            setAssignee('');
        }
    };

    return (
        <div>
            <h2>Task Assignment</h2>

            <div className='user-selection'>
            <form onSubmit={handleSubmit} >
                <select value={selectedTaskId} onChange={(e) => setSelectedTaskId(e.target.value)}>
                    <option value="">Select Task</option>
                    {tasks.map(task => (
                        <option key={task.id} value={task.id}>{task.name}</option>
                    ))}
                </select>
                <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)}
                    className='input-value'

                    placeholder="Assignee" />
                <button type="submit" className='button'>Assign Task</button>
                
            </form>
            </div>
        </div>
    );
};

export default TaskAssignment;
