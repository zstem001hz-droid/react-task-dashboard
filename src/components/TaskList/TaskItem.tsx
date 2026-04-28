import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types/index";

// Maps status values to background colors for conditional styling
const statusColors: Record<string, string> = {
  pending: "#f3f4f6",
  "in-progress": "#dbeafe",
  completed: "#dcfce7",
};

// Maps priority values to badge colors
const priorityColors: Record<string, string> = {
  low: "#22c55e",
  medium: "#f59e0b",
  high: "#ef4444",
};

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  // Casts select value to TaskStatus before passing to parent
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, event.target.value as TaskStatus);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "0.75rem",
        backgroundColor: statusColors[task.status],
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        <span
          style={{
            backgroundColor: priorityColors[task.priority],
            color: "white",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {task.priority}
        </span>
      </div>

      <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
        {task.description}
      </p>

      <p style={{ fontSize: "12px", color: "#9ca3af" }}>
        Due: {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginTop: "0.75rem",
          alignItems: "center",
        }}
      >
        <select
          value={task.status}
          onChange={handleStatusChange}
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "4px 12px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
