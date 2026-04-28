import React, { useMemo } from "react";
import type { DashboardProps } from "../../types/index";
import { calculateStats } from "../../utils/taskUtils";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskFilter } from "../TaskFilter/TaskFilter";
import { TaskList } from "../TaskList/TaskList";

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

  // Resolves system theme to actual light or dark value
  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const isDark = resolvedTheme === "dark";

  // Theme-aware color tokens
  const colors = {
    background: isDark ? "#0f172a" : "#f8fafc",
    surface: isDark ? "#1e293b" : "#ffffff",
    border: isDark ? "#334155" : "#e2e8f0",
    text: isDark ? "#f1f5f9" : "#0f172a",
    textMuted: isDark ? "#94a3b8" : "#64748b",
    statCard: isDark ? "#1e293b" : "#ffffff",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.background,
        color: colors.text,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.75rem" }}>Task Dashboard</h1>

          {/* Theme toggle button */}
          <button
            onClick={onThemeToggle}
            style={{
              backgroundColor: colors.surface,
              color: colors.text,
              border: `1px solid ${colors.border}`,
              borderRadius: "6px",
              padding: "6px 14px",
              cursor: "pointer",
              fontSize: "14px",
              transition: "all 0.2s ease",
            }}
          >
            {theme === "light"
              ? "🌙 Dark"
              : theme === "dark"
                ? "⚙️ System"
                : "☀️ Light"}
          </button>
        </div>

        {/* Statistics panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { label: "Total", value: stats.total, color: "#3b82f6" },
            { label: "Pending", value: stats.pending, color: "#f59e0b" },
            { label: "In Progress", value: stats.inProgress, color: "#8b5cf6" },
            { label: "Completed", value: stats.completed, color: "#22c55e" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: colors.statCard,
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                transition: "background-color 0.3s ease",
              }}
            >
              <p
                style={{ margin: 0, fontSize: "12px", color: colors.textMuted }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: stat.color,
                }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        {/* Sort toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "0.75rem",
          }}
        >
          <button
            onClick={onSortToggle}
            style={{
              backgroundColor: colors.surface,
              color: colors.text,
              border: `1px solid ${colors.border}`,
              borderRadius: "6px",
              padding: "6px 14px",
              cursor: "pointer",
              fontSize: "13px",
              transition: "all 0.2s ease",
            }}
          >
            Sort by Date {sortDirection === "asc" ? "↑" : "↓"}
          </button>
        </div>

        {/* Task form for adding new tasks */}
        <TaskForm onAddTask={onAddTask} />

        {/* Filter and search controls */}
        <TaskFilter onFilterChange={onFilterChange} />

        {/* Filtered and sorted task list */}
        <TaskList
          tasks={processedTasks}
          theme={theme}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};
