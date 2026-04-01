---
title: Getting Started
order: 0
---

# Getting Started

Learn how to install and use ReactList in your project.

## Installation

```bash
# npm
npm install -S @jswork/react-list

# yarn
yarn add @jswork/react-list

# pnpm
pnpm add @jswork/react-list
```

## Basic Usage

### 1. Define Your Data Type

ReactList uses TypeScript generics for full type safety. First, define your data interface:

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}
```

### 2. Create an Item Component

```tsx
const ItemView = ({ item }: { item: User }) => (
  <div className="user-item">
    <span>{item.name}</span>
    <span>{item.email}</span>
  </div>
);
```

### 3. Use ReactList

```tsx
import { ReactList } from '@jswork/react-list';

function App() {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ];

  return (
    <ReactList data={users} keyExtractor="id" slots={{ item: ItemView }} />
  );
}
```

## Key Concepts

### Slot System

Slots are the core abstraction of ReactList. A slot can be:

1. **A React component** - `slots={{ item: MyComponent }}`
2. **A React node** - `slots={{ item: <div>Hello</div> }}`
3. **A component with default props** - `slots={{ item: { component: MyComponent, props: { className: 'item' } } }}`

### Key Extraction

ReactList requires a `keyExtractor` for React reconciliation. You can use:

- **A property key**: `keyExtractor="id"` - simple and concise
- **A custom function**: `keyExtractor={(item, index) => \`user-${item.id}\`}` - full control

### Empty State

Provide an `empty` slot to handle empty data:

```tsx
<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ItemView,
    empty: () => <div>No users found</div>,
  }}
/>
```

## Next Steps

- [API Reference](/components) - Full component API documentation
- [Playground](/playground) - Interactive examples and demos
