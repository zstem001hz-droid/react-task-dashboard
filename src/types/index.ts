// Union type constraining task status to three valid values
export type TaskStatus = "pending" | "in-progress" | "completed";

// Union type for application themes
export type Theme = "light" | "dark" | "system";

// Core task data structure
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
  createdAt: string;
}

// Shape of active filter selections
export interface FilterState {
  status?: TaskStatus;
  priority?: "low" | "medium" | "high";
  searchTerm?: string;
}

// Shape of task statistics for the Dashboard summary
export interface TaskStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
}

// Dashboard component props
export interface DashboardProps {
  theme: Theme;
  onThemeToggle: () => void;
  tasks: Task[];
  processedTasks: Task[];
  onAddTask: (task: Task) => void;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onFilterChange: (filters: FilterState) => void;
  onSortToggle: () => void;
  sortDirection: 'asc' | 'desc';
}

// TaskList component props
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  theme: Theme;
}

// TaskItem component props
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  theme: Theme;
}

// TaskForm component props
export interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

// TaskFilter component props
export interface TaskFilterProps {
  onFilterChange: (filters: FilterState) => void;
}
