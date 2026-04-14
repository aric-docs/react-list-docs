---
title: API Reference
order: 1
---

# API Reference

Complete API documentation for the `@jswork/react-list` package.

## Exports

| Export           | Type      | Description                                   |
| ---------------- | --------- | --------------------------------------------- |
| `ReactList`      | Component | The main list component                       |
| `ReactListProps` | Interface | Props interface for the component             |
| `Slot`           | Type      | Slot type definition                          |
| `SELF`           | Symbol    | Use item itself as key (for primitive arrays) |
| `KeyExtractor`   | Type      | Key extractor type definition                 |

## ReactListProps\<T\>

```typescript
interface ReactListProps<T> {
  data: T[];
  keyExtractor?:
    | typeof SELF
    | keyof T
    | string
    | ((item: T, index: number) => string | number); // default: "id"
  slots: {
    item: Slot<{ item: T; index: number; data: T[] }>;
    empty?: Slot<{ data: T[] }>;
  };
}
```

### Props

| Property       | Required | Type                                                                                 | Description                                               |
| -------------- | -------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| `data`         | Yes      | `T[]`                                                                                | Array of data items to render                             |
| `keyExtractor` | No       | `typeof SELF \| keyof T \| string \| ((item: T, index: number) => string \| number)` | Determines the unique key for each item (default: `"id"`) |
| `slots`        | Yes      | `{ item: Slot<...>; empty?: Slot<...> }`                                             | Slot configuration for rendering                          |

### slots.item

The item slot receives the following props:

| Prop    | Type     | Description                        |
| ------- | -------- | ---------------------------------- |
| `item`  | `T`      | The current data item              |
| `index` | `number` | The index of the item in the array |
| `data`  | `T[]`    | The full data array                |

### slots.empty

The empty slot receives the following props:

| Prop   | Type  | Description                        |
| ------ | ----- | ---------------------------------- |
| `data` | `T[]` | The empty data array (always `[]`) |

## Slot Type

A `Slot<P>` can be any of the following:

### 1. React Component

Pass a component directly:

```tsx
const MyItem = ({ item, index }: { item: User; index: number }) => (
  <div>{item.name}</div>
);

slots={{ item: MyItem }}
```

### 2. Render Function

Pass an inline render function:

```tsx
slots={{
  item: ({ item }) => <div>{item.name}</div>
}}
```

### 3. React Node

Pass a pre-built React node:

```tsx
slots={{ item: <div>Static content</div> }}
```

### 4. Component with Default Props

Pass an object with `component` and `props`:

```tsx
slots={{
  item: {
    component: ItemView,
    props: { className: 'list-item', variant: 'compact' }
  }
}}
```

## keyExtractor

### Property Key (Recommended)

Use a property name when items have a unique identifier:

```tsx
// Use string property key
<ReactList data={users} keyExtractor="id" slots={...} />
```

### Dot Path (Nested Properties)

Use a dot-separated path to extract keys from nested objects:

```tsx
// Deep nested key extraction
<ReactList
  data={users}
  keyExtractor="profile.address.city"
  slots={...}
/>
```

### SELF (Primitive Arrays)

Use the `SELF` symbol when items are primitive values (strings, numbers):

```tsx
import { ReactList, SELF } from '@jswork/react-list';

<ReactList
  data={['apple', 'banana', 'cherry']}
  keyExtractor={SELF}
  slots={{
    item: ({ item }) => <div>{item}</div>,
  }}
/>;
```

### Custom Function

Use a function for complex key generation:

```tsx
<ReactList
  data={users}
  keyExtractor={(item, index) => `user-${item.id}-${index}`}
  slots={...}
/>
```

## TypeScript Generics

ReactList uses TypeScript generics for full type safety:

```tsx
// T is inferred from data
const users: User[] = [...];
<ReactList data={users} keyExtractor="id" slots={{
  item: ({ item }) => {
    // item is typed as User
    return <div>{item.name}</div>;
  }
}} />
```
