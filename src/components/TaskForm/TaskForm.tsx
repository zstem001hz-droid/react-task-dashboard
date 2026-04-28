import React, { useState } from "react";
import type { TaskFormProps, Task } from "../../types/index";

// Internal shape of form fields before task object is constructed
interface FormData {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  // Controls form visibility
  const [isOpen, setIsOpen] = useState(false);

  // Single state object managing all form fields
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  // Generic handler for all form inputs using computed property names
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.dueDate) {
      alert("Please provide a title and due date");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      status: "pending" as const,
      dueDate: formData.dueDate,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
    });
    setIsOpen(false);
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          cursor: "pointer",
          marginBottom: "1rem",
          fontWeight: "bold",
          transition: "opacity 0.2s ease",
        }}
      >
        {isOpen ? "Cancel" : "+ Add New Task"}
      </button>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "1.5rem",
            backgroundColor: "#f9fafb",
            transition: "all 0.3s ease",
          }}
        >
          <h3 style={{ marginTop: 0 }}>New Task</h3>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="title"
              style={{
                display: "block",
                fontSize: "13px",
                marginBottom: "4px",
              }}
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task title"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="description"
              style={{
                display: "block",
                fontSize: "13px",
                marginBottom: "4px",
              }}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Task description"
              rows={3}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="priority"
              style={{
                display: "block",
                fontSize: "13px",
                marginBottom: "4px",
              }}
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="dueDate"
              style={{
                display: "block",
                fontSize: "13px",
                marginBottom: "4px",
              }}
            >
              Due Date *
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "8px 20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Task
          </button>
        </form>
      )}
    </div>
  );
};
