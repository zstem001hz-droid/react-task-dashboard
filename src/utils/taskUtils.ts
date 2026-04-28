import type { Task, FilterState, TaskStats } from '../types/index';

// Filters a task array based on status, priority, and search term
// Returns all tasks if no filters are active
export const filterTasks = (tasks: Task[], filters: FilterState): Task[] => {
  return tasks.filter(task => {
    const matchesStatus = filters.status
      ? task.status === filters.status
      : true;

    const matchesPriority = filters.priority
      ? task.priority === filters.priority
      : true;

    // Case-insensitive search against task title and description
    const matchesSearch = filters.searchTerm
      ? task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      : true;

    return matchesStatus && matchesPriority && matchesSearch;
  });
};

// Sorts tasks by due date
// 'asc' = earliest first, 'desc' = latest first
// Spreads into new array first to avoid mutating original
export const sortTasksByDate = (
  tasks: Task[],
  direction: 'asc' | 'desc' = 'asc'
): Task[] => {
  return [...tasks].sort((a, b) => {
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return direction === 'asc' ? dateA - dateB : dateB - dateA;
  });
};