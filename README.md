# React Task Dashboard

**Author:** Zac White

## Overview

A full-featured task management dashboard built with React and TypeScript. Demonstrates component composition, state management, controlled forms,dynamic list rendering, filtering, sorting, localStorage persistence, and light/dark theme toggling.

## Features

- ✅ Add, update, and delete tasks
- 🔍 Filter tasks by status and priority
- 🔎 Search tasks by title
- 📅 Sort tasks by due date
- 📊 Real-time task statistics
- 💾 Tasks persist via localStorage
- 🌙 Light and dark mode toggle
- 🎨 Color-coded priority and status indicators

## Tech Stack

- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite](https://vitejs.dev/) — Build tool and dev server

## Project Structure

```
src/
├── components/
│   ├── Dashboard/      ← root dashboard component
│   ├── TaskList/       ← list rendering and individual task display
│   ├── TaskForm/       ← controlled form for adding tasks
│   └── TaskFilter/     ← filtering and search controls
├── types/
│   └── index.ts        ← all TypeScript interfaces
├── utils/
│   └── taskUtils.ts    ← filtering, sorting, and localStorage utilities
└── App.tsx             ← root component
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/zstem001hz-droid/react-task-dashboard.git
cd react-task-dashboard
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Using the app:**
- Click **+ Add New Task** to open the task form
- Fill in title, description, priority, and due date then click **Add Task**
- Use **Search**, **Status**, and **Priority** controls to filter tasks
- Click **Sort by Date** to toggle ascending/descending order
- Change a task's status using the dropdown on each task card
- Click **Delete** to remove a task
- Click the theme button to cycle through Light → Dark → System
- Tasks automatically persist via localStorage on every change

## Components

### Dashboard
Root dashboard component. Composes all child components into a cohesive layout. Manages theme state and passes it down to child components.

**Example:**
```tsx
<Dashboard
theme={theme}
onThemeToggle={handleThemeToggle}
tasks={tasks}
processedTasks={processedTasks}
onAddTask={handleAddTask}
onStatusChange={handleStatusChange}
onDelete={handleDelete}
onFilterChange={handleFilterChange}
onSortToggle={handleSortToggle}
sortDirection={sortDirection}
/>
```

### TaskForm
Controlled form for creating new tasks. Toggles open and closed. Validates required fields before submission.

**Example:**
```tsx
<TaskForm onAddTask={handleAddTask} />
```

### TaskFilter
Search input and filter dropdowns for status and priority. Reports filter changes up to the parent via callback.

**Example:**
```tsx
<TaskFilter onFilterChange={handleFilterChange} />
```

### TaskList
Renders the task list dynamically using `.map()` with stable keys. Handles empty state when no tasks match active filters.

**Example:**
```tsx
<TaskList
tasks={processedTasks}
theme={theme}
onStatusChange={handleStatusChange}
onDelete={handleDelete}
/>
```

### TaskItem
Individual task card with color-coded status and priority indicators. Handles status updates and deletion via parent callbacks.

**Example:**
```tsx
<TaskItem
task={task}
theme={theme}
onStatusChange={handleStatusChange}
onDelete={handleDelete}
/>
```

## References

### React
- [useEffect — React Docs](https://react.dev/reference/react/useEffect) — useEffect
- [A Complete Guide to useEffect — Dan Abramov/Overreacted](https://overreacted.io/a-complete-guide-to-useeffect/) — A Complete Guide to useEffect
- [Rendering Lists](https://react.dev/learn/rendering-lists) — Rendering Lists: `.map()` and the `key` prop
- [Conditional Rendering](https://react.dev/learn/conditional-rendering) — Conditional Rendering: `&&` and ternary patterns
- [useState Hook](https://react.dev/reference/react/useState) — useState
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components) — lifting state and callbacks
- [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state) — controlled forms
- [Derived State — React Blog](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html) — You Probably Don't Need Derived State
- [useMemo — React Docs](https://react.dev/reference/react/useMemo) — useMemo

### TypeScript
- [TypeScript Handbook — Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Handbook — Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [TypeScript Handbook: Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) — TypeScript Handbook: Type Assertions
- [TypeScript Handbook: keyof Types](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) — TypeScript Handbook: keyof Types
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Utility Types: Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) — TypeScript Utility Types: Record

### JavaScript
- [String.prototype.includes() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) — String.prototype.includes()
- [String.prototype.toLowerCase() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) — String.prototype.toLowerCase()
- [Array.prototype.sort() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) — Array.prototype.sort()
- [Date.getTime() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) — Date.prototype.getTime()
- [Date.prototype.toISOString() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) — Date.prototype.toISOString()
- [Nullish coalescing operator (??) — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) — Nullish coalescing operator (??)

### localStorage
- [Window: localStorage property — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — Window: localStorage property
- [JSON.stringify() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) — JSON.stringify()
- [Learn localStorage In 10 Minutes — Web Dev Simplified](https://www.youtube.com/watch?v=AUOzvFzdIk4) — Learn localStorage In 10 Minutes
- [JSON.parse() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) — JSON.parse()

### CSS
- [CSS: transition property — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) — CSS: transition property

### Video Resources
- [8 Must Know JavaScript Array Methods — Fireship](https://www.youtube.com/watch?v=R8rmfD9Y5-c) — 8 Must Know JavaScript Array Methods

### Browser APIs
- [Window: matchMedia() — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) — Window: matchMedia()
- [prefers-color-scheme — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) — prefers-color-scheme

### Tools
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Reflections

**How did you implement React and TypeScript features?**
This SBA brought together every concept from the module into one cohesive application. TypeScript interfaces in `types/index.ts` defined the contract for every component and utility function before a single line of component code was written — catching prop mismatches and missing fields at compile time rather than runtime. React hooks drove the entire application: `useState` managed tasks, filters, sort direction, and theme in `App.tsx`; `useEffect` connected state changes to localStorage persistence automatically after each render; and `useMemo` in `Dashboard.tsx` prevented `calculateStats` from running unnecessarily on every render. The utility functions in `taskUtils.ts` kept filtering, sorting, and localStorage logic completely separate from rendering logic — making each function independently testable and reusable.

**What challenges did you encounter and how did you overcome them?**
Several TypeScript errors surfaced during development that required careful debugging. A missing closing brace `}` on `DashboardProps` in `types/index.ts` produced a cascading parsing error across multiple files that took inspection of the raw file with `sed` to locate precisely. The `verbatimModuleSyntax` TypeScript configuration required all type imports to use `import type` syntax — a requirement discovered through the Problems tab in VS Code rather than the browser console. An unused `TaskStatus` import in `TaskFilter.tsx` was flagged by ESLint even though `TaskStatus` is used throughout the rest of the project — a reminder that import hygiene matters even when types are used elsewhere. Vite's default CSS in `App.css` and `index.css` conflicted with inline component styles until both files were cleared, immediately resolving form label visibility issues.

**What was your approach to component composition and state management?**
All application state lives in `App.tsx` — tasks, filters, sort direction, and theme — because every child component needs access to some portion of it. Lifting state to the highest common ancestor prevents prop drilling conflicts and ensures a single source of truth. `Dashboard.tsx` composes `TaskForm`, `TaskFilter`, and `TaskList` together without owning any state itself — it receives everything via props and passes callbacks down. Tasks are processed in `App tsx` before reaching `Dashboard` — `filterTasks` and `sortTasksByDate` run on the tasks array and the result is passed as `processedTasks` — keeping data transformation logic at the root level where state lives rather than scattering it across child components. The callback pattern connects user interactions in deeply nested components back up to `App` where state updates actually occur.
