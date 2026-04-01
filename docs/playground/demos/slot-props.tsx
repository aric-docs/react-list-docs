import React from 'react';
import { ReactList } from '@jswork/react-list';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const ItemView = ({
  item,
  variant,
}: {
  item: Task;
  variant?: string;
}) => (
  <div
    style={{
      padding: '8px 12px',
      borderBottom: '1px solid #f0f0f0',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: variant === 'compact' ? '#fafafa' : 'transparent',
    }}
  >
    <input type="checkbox" defaultChecked={item.done} />
    <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
      {item.title}
    </span>
  </div>
);

const tasks: Task[] = [
  { id: 1, title: 'Setup project', done: true },
  { id: 2, title: 'Write tests', done: false },
  { id: 3, title: 'Deploy to production', done: false },
];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Slot with Default Props</h3>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
        The <code>variant</code> prop is passed via slot configuration, not the data.
      </p>
      <ReactList
        data={tasks}
        keyExtractor="id"
        slots={{
          item: {
            component: ItemView,
            props: { variant: 'compact' },
          },
        }}
      />
    </div>
  );
};
