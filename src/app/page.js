'use client';

import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import TaskFilter from '@/components/TaskFilter';

export default function Home() {
  return (
    <div>
      <TaskForm />
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Your Tasks</h2>
        <TaskFilter />
        <TaskList />
      </div>
    </div>
  );
}