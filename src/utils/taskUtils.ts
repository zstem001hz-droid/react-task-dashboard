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

// Calculates task counts per status from the tasks array
export const calculateStats = (tasks: Task[]): TaskStats => {
  return {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };
};

// localStorage as JSON string
export const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    localStorage.setItem('react-task-dashboard', JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
  }
};

// Loads tasks from localStorage
export const loadTasksFromStorage = (): Task[] | null => {
  try {
    const stored = localStorage.getItem('react-task-dashboard');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to load tasks from localStorage:', error);
    return null;
  }
};