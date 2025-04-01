'use client';

import React, { useState } from 'react';
import { useTaskContext } from '@/context/TaskContext';
import ConfirmationModal from './ConfirmationModal';

const TaskItem = ({ task }) => {
  const { toggleTaskStatus, deleteTask } = useTaskContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  // Format date to be more readable
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskStatus(task.id)}
              className="mt-1 h-4 w-4 text-blue-600 rounded"
            />
            <div className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
              <h3 className="font-medium text-black">{task.title}</h3>
              {task.description && (
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
              )}
              <div className="flex mt-2 space-x-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Due: {formatDate(task.dueDate)}
                </span>
                <span className={`${getPriorityColor(task.priority)} px-2 py-1 rounded`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="text-red-500 hover:text-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {showDeleteModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this task?"
          onConfirm={() => {
            deleteTask(task.id);
            setShowDeleteModal(false);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default TaskItem;