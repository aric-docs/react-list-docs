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
    className={`flex items-center gap-2 px-3 py-2 border-b border-gray-100 ${variant === 'compact' ? 'bg-gray-50' : 'bg-transparent'}`}
  >
    <input type="checkbox" defaultChecked={item.done} />
    <span className={item.done ? 'line-through' : ''}>{item.title}</span>
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
      <h3 className="mb-3">Slot with Default Props</h3>
      <p className="text-gray-500 text-sm mb-3">
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
