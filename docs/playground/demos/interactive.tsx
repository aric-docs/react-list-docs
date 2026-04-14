import React, { useState } from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

export default () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleRemove = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleAdd = () => {
    const names = ['Dave', 'Eve', 'Frank', 'Grace', 'Hank'];
    const name = names[Math.floor(Math.random() * names.length)];
    setUsers((prev) => [...prev, { id: Date.now(), name }]);
  };

  return (
    <div>
      <h3 className="mb-3">Interactive User List</h3>
      <button
        onClick={handleAdd}
        className="px-4 py-1.5 mb-3 bg-blue-500 text-white border-none rounded cursor-pointer"
      >
        Add Random User
      </button>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
              <span>{item.name}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-3 py-1 bg-red-500 text-white border-none rounded cursor-pointer text-xs"
              >
                Remove
              </button>
            </div>
          ),
          empty: () => (
            <div className="p-6 text-center text-gray-400 bg-gray-50 rounded">
              No users left. Click &quot;Add Random User&quot; to add one.
            </div>
          ),
        }}
      />
    </div>
  );
};
