import { useState, useEffect } from 'react';
import type { Task, FilterState, Theme } from './types/index';
import { filterTasks, sortTasksByDate, loadTasksFromStorage, saveTasksToStorage } from './utils/taskUtils';
import { Dashboard } from './components/Dashboard/Dashboard';

// Sample tasks rendered on first load if no localStorage data exists
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Deploy production hotfix',
    description: 'Critical bug affecting user login on mobile devices',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-04-29',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Code review: payment module',
    description: 'Review PR #247 for new Stripe integration',
    status: 'pending',
    priority: 'high',
    dueDate: '2026-04-30',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Update API documentation',
    description: 'Document new endpoints added in v2.3 release',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-05-05',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Refactor authentication service',
    description: 'Move from JWT to session-based auth per security review',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-05-10',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Set up staging environment',
    description: 'Configure Docker containers for QA testing pipeline',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-04-24',
    createdAt: new Date().toISOString(),
  },
];

function App() {
  // Initialize tasks from localStorage or fall back to sample data
  const [tasks, setTasks] = useState<Task[]>(
    () => loadTasksFromStorage() ?? sampleTasks
  );

  // Active filter selections from TaskFilter
  const [filters, setFilters] = useState<FilterState>({});

  // Sort direction for task list
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Theme state - defaults to system preference
  const [theme, setTheme] = useState<Theme>('system');

  // Persists tasks to localStorage whenever tasks array changes
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const handleAddTask = (newTask: Task) => {
    setTasks(prev => [...prev, newTask]);
  };

  const handleStatusChange = (taskId: string, newStatus: import('./types/index').TaskStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleSortToggle = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  // Cycles through light → dark → system on each toggle
  const handleThemeToggle = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  