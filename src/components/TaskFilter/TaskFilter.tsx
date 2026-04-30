import React, { useState } from "react";
import type {
  TaskFilterProps,
  FilterState,
} from "../../types/index";

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  // Local state tracks all three filter values together
  const [filters, setFilters] = useState<FilterState>({
    status: undefined,
    priority: undefined,
    searchTerm: "",
  });

  // Updates independent filter field and notifies parent with full filter state
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const updated = {
      ...filters,
      [key]: value === "all" || value === "" ? undefined : value,
    };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1.5rem",
        padding: "1rem",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
      }}
    >
      {/* Search input - filters by title and description */}
      <div style={{ flex: 1, minWidth: "200px" }}>
        <label
          style={{
            display: "block",
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "4px",
          }}
        >
          Search
        </label>
        <input
          type="text"
          placeholder="Search tasks..."
          value={filters.searchTerm ?? ""}
          onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
          style={{
            width: "100%",
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Status filter dropdown */}
      <div>
        <label
          style={{
            display: "block",
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "4px",
          }}
        >
          Status
        </label>
        <select
          value={filters.status ?? "all"}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Priority filter dropdown */}
      <div>
        <label
          style={{
            display: "block",
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "4px",
          }}
        >
          Priority
        </label>
        <select
          value={filters.priority ?? "all"}
          onChange={(e) => handleFilterChange("priority", e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};
