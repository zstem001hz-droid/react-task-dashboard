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

### React
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
- [TypeScript Handbook: Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) — TypeScript Handbook: Type Assertions

### JavaScript
- [String.prototype.includes() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) — String.prototype.includes()
- [String.prototype.toLowerCase() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) — String.prototype.toLowerCase()
- [Array.prototype.sort() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) — Array.prototype.sort()
- [Date.getTime() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) — Date.prototype.getTime()
- [Date.prototype.toISOString() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) — Date.prototype.toISOString()

### localStorage
- [Window: localStorage property — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — Window: localStorage property
- [JSON.stringify() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) — JSON.stringify()
- [Learn localStorage In 10 Minutes — Web Dev Simplified](https://www.youtube.com/watch?v=AUOzvFzdIk4) — Learn localStorage In 10 Minutes
- [JSON.parse() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) — JSON.parse()

### CSS
- [CSS: transition property — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) — CSS: transition property

### Video Resources
- [8 Must Know JavaScript Array Methods — Fireship](https://www.youtube.com/watch?v=R8rmfD9Y5-c) — 8 Must Know JavaScript Array Methods

### Tools
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)


## Reflections

_To be completed after implementation._
