import React, { useMemo } from 'react';
import type { DashboardProps } from '../../types/index';
import { calculateStats } from '../../utils/taskUtils';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskList } from '../TaskList/TaskList';

export const Dashboard: React.FC<DashboardProps> = ({
  theme,
  onThemeToggle,
  tasks,
  processedTasks,
  onAddTask,
  onStatusChange,
  onDelete,
  onFilterChange,
  onSortToggle,
  sortDirection,
}) => {
  // Recalculates only when tasks array changes
  const stats = useMemo(() => calculateStats(tasks), [tasks]);