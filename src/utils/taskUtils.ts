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
