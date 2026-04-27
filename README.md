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

src/
├── components/
│ ├── Dashboard/ ← root dashboard component
│ ├── TaskList/ ← list rendering and individual task display
│ ├── TaskForm/ ← controlled form for adding tasks
│ └── TaskFilter/ ← filtering and search controls
├── types/
│ └── index.ts ← all TypeScript interfaces
├── utils/
│ └── taskUtils.ts ← filtering, sorting, and localStorage utilities
└── App.tsx ← root component

## Getting Started

```bash
npm install
npm run dev
```

## Components

_To be documented as components are built._

## References

_To be added throughout development._

## Reflections

_To be completed after implementation._
