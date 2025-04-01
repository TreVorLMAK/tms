'use client';

import React from 'react';
import { useTaskContext } from '@/context/TaskContext';

const TaskFilter = () => {
  const { filterStatus, setFilterStatus } = useTaskContext();
  
  return (
    <div className="flex space-x-2 mb-4">
      {['All', 'Pending', 'Completed'].map((status) => (
        <button
          key={status}
          onClick={() => setFilterStatus(status)}
          className={`px-3 py-1 rounded-md ${
            filterStatus === status
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;