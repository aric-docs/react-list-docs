import React, { useState } from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const initialUsers: User[] = [];

export default () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleAdd = () => {
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), name: `User ${prev.length + 1}` },
    ]);
  };

  const handleClear = () => {
    setUsers([]);
  };

  return (
    <div>
      <h3 className="mb-3">Empty State Demo</h3>
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleAdd}
          className="px-4 py-1.5 bg-blue-500 text-white border-none rounded cursor-pointer"
        >
          Add User
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-1.5 bg-red-500 text-white border-none rounded cursor-pointer"
        >
          Clear All
        </button>
      </div>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div className="px-3 py-2 border-b border-gray-100">
              {item.name}
            </div>
          ),
          empty: () => (
            <div className="p-6 text-center text-gray-400 bg-gray-50 rounded">
              No users found. Click &quot;Add User&quot; to get started.
            </div>
          ),
        }}
      />
    </div>
  );
};
