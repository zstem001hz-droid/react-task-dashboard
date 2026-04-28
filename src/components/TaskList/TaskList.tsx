import React from "react";
import type { TaskListProps } from "../../types/index";
import { TaskItem } from "./TaskItem";

// Renders the filtered task list or an empty state message
export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
  theme,
}) => {
  return (
    <div>
      {/* Empty state - renders when no tasks match active filters */}
      {tasks.length === 0 && (
        <p style={{ color: "#9ca3af", textAlign: "center", padding: "2rem" }}>
          No tasks found. Add a task to get started.
        </p>
      )}

      {/* Maps task array to TaskItem components with stable key */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          theme={theme}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
