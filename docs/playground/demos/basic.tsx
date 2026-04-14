import React from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'PM' },
];

export default () => {
  return (
    <div>
      <h3 className="mb-3">Team Members</h3>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between px-3 py-2 border-b border-gray-100">
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-400">{item.role}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
