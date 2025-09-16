# React Kanban Board (TypeScript + Vite)

![Kanban Board Preview](https://imgur.com/a/wmRCWT4)

A lightweight, **Kanban board** built with **React + TypeScript**, styled with **SCSS Modules**, and powered by **Atlassian’s Pragmatic Drag and Drop**.  
Design inspired by Alex Lauderdale 👉 [Volley Kanban Board](https://dribbble.com/shots/21284971-Volley-Kanban-Board).

> **Purpose:** This project exists purely to demonstrate **TypeScript** and **React** proficiency.  
> It intentionally has **no real application functionality** beyond **drag & drop** (no auth, no API, no persistence by design).

---

## ✨ Features

- **Drag & drop** between columns using Atlassian’s **Pragmatic DnD**
  - Column hover preview (shows where the card will land)
- **Local persistence** via `localStorage` (no backend required)
- **TypeScript-first** codebase
- **SCSS Modules** for component-scoped styles
- **Self-made UI components** (no UI kit):
  - layout primitives (Board, Column, Card)
  - small building blocks (separator, stack, typo)
  - consistent styles via **SCSS Modules** (no CSS framework)

---

## 🧰 Tech Stack

- React 18 + TypeScript
- Vite
- SCSS Modules
- `@atlaskit/pragmatic-drag-and-drop` + helpers

