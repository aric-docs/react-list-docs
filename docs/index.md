---
title: ReactList
hero:
  title: ReactList
  description: A highly abstract, type-safe list component for React with slot-based architecture.
  actions:
    - text: Get Started
      link: /guide/getting-started
    - text: API Reference
      link: /components
    - text: GitHub
      link: https://github.com/afeiship/react-list
features:
  - title: Slot-based Architecture
    emoji: 🧩
    description: Render items, empty states, and more with full control via a flexible slot system
  - title: Type-safe Generics
    emoji: 🔒
    description: Full TypeScript support with <T> generic for any data type
  - title: Flexible Key Extraction
    emoji: 🔑
    description: Use property keys or custom functions for React reconciliation
  - title: Performance Optimized
    emoji: ⚡
    description: Memoized key generation for efficient rendering of large lists
  - title: Zero Dependencies
    emoji: 📦
    description: Only requires React as peer dependency, no extra bloat
  - title: Headless Component
    emoji: 🎨
    description: No CSS included - you provide all styling for maximum flexibility
---

## Installation

```bash
# npm
npm install -S @jswork/react-list

# yarn
yarn add @jswork/react-list

# pnpm
pnpm add @jswork/react-list
```

## Quick Start

```tsx
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

function App() {
  return (
    <ReactList
      data={users}
      keyExtractor="id"
      slots={{
        item: ({ item }) => <div>{item.name}</div>,
      }}
    />
  );
}
```

## Documentation

- [Getting Started](/guide/getting-started) - Installation and basic usage
- [API Reference](/components) - Full component API documentation
- [Playground](/playground) - Interactive examples and demos
- [Live Demo](https://afeiship.github.io/react-list/) - See it in action
