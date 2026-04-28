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

```bash
npm install
npm run dev
```

## Components

### Dashboard
Root dashboard component. Composes all child components into a cohesive
layout. Manages theme state and passes it down to child components.

### TaskForm
Controlled form for creating new tasks. Toggles open and closed.
Validates required fields before submission.

### TaskFilter
Search input and filter dropdowns for status and priority.
Reports filter changes up to the parent via callback.

### TaskList
Renders the task list dynamically using `.map()` with stable keys.
Handles empty state when no tasks match active filters.

### TaskItem
Individual task card with color-coded status and priority indicators.
Handles status updates and deletion via parent callbacks.

## References

_To be added throughout development._

## Reflections

_To be completed after implementation._
