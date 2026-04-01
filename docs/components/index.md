---
title: ReactList Component
order: 0
---

# ReactList

A highly abstract, type-safe list component for React with slot-based architecture.

## When To Use

- Render lists of any data type with full TypeScript support
- Need flexible rendering control via a slot system
- Want to separate data logic from presentation
- Handle empty states elegantly
- Build custom list UIs without opinionated styling

## Installation

```bash
npm install -S @jswork/react-list
```

## Examples

### Basic Usage

```tsx
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const ItemView = ({ item }: { item: User }) => <div>{item.name}</div>;

function App() {
  const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <ReactList data={users} keyExtractor="id" slots={{ item: ItemView }} />
  );
}
```

### With Empty State

```tsx
const EmptyView = () => <div>No users found</div>;

<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ItemView,
    empty: EmptyView,
  }}
/>;
```

### Custom Key Extractor

```tsx
<ReactList
  data={users}
  keyExtractor={(item, index) => `user-${item.id}-${index}`}
  slots={{ item: ItemView }}
/>
```

### Slot with Default Props

```tsx
const slots = {
  item: {
    component: ItemView,
    props: { className: 'list-item', variant: 'compact' },
  },
};

<ReactList data={users} keyExtractor="id" slots={slots} />;
```

### Inline Render Function

```tsx
<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ({ item }) => <div className="user">{item.name}</div>,
  }}
/>
```

### Interactive List with State

```tsx
function UserList() {
  const [users, setUsers] = useState(initialUsers);

  const handleRemove = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <ReactList
      data={users}
      keyExtractor="id"
      slots={{
        item: (props) => <UserItem {...props} onRemove={handleRemove} />,
        empty: () => <div>No users left</div>,
      }}
    />
  );
}
```

## API

| Property     | Required | Type                                                        | Default | Description                              |
| ------------ | -------- | ----------------------------------------------------------- | ------- | ---------------------------------------- |
| data         | Yes      | `T[]`                                                       | -       | Array of data items to render            |
| keyExtractor | Yes      | `keyof T \| ((item: T, index: number) => string \| number)` | -       | Property key or function for unique keys |
| slots        | Yes      | `{ item: Slot<...>; empty?: Slot<...> }`                    | -       | Slot configuration for rendering         |

### Slot Item Props

| Prop  | Type     | Description                    |
| ----- | -------- | ------------------------------ |
| item  | `T`      | The current data item          |
| index | `number` | Index of the item in the array |
| data  | `T[]`    | The full data array            |

### Slot Empty Props

| Prop | Type  | Description          |
| ---- | ----- | -------------------- |
| data | `T[]` | The empty data array |

## Best Practices

1. **Always provide `keyExtractor`** - Required for React reconciliation
2. **Use property keys when possible** - `keyExtractor="id"` is simpler than a function
3. **Leverage generics** - The `<T>` type parameter ensures type safety
4. **Use slots for default props** - Pass common props via slot configuration
5. **Memoize item components** - Wrap item components with `React.memo` for performance
6. **Handle empty states** - Always provide an empty slot for better UX
