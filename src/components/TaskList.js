'use client';

import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '@/context/TaskContext';

const TaskList = () => {
  const { tasks, filterStatus } = useTaskContext();
  
  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'All') return true;
    if (filterStatus === 'Completed') return task.completed;
    if (filterStatus === 'Pending') return !task.completed;
    return true;
  });
  
  // Sort tasks by due date (closest first) and then by priority
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    // Sort by due date
    const dateComparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    if (dateComparison !== 0) return dateComparison;
    
    // If due dates are the same, sort by priority
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  if (sortedTasks.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
        No tasks found. Add a new task to get started!
      </div>
    );
  }

  return (
    <div>
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;