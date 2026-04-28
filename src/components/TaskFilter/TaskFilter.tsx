import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus, FilterState } from '../../types/index';

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {

  // Local state tracks all three filter values together
  const [filters, setFilters] = useState<FilterState>({
    status: undefined,
    priority: undefined,
    searchTerm: '',
  });