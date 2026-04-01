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
      <h3 style={{ marginBottom: 12 }}>Interactive User List</h3>
      <button
        onClick={handleAdd}
        style={{
          padding: '6px 16px',
          marginBottom: 12,
          background: '#1890ff',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        Add Random User
      </button>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{item.name}</span>
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  padding: '4px 12px',
                  background: '#ff4d4f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                Remove
              </button>
            </div>
          ),
          empty: () => (
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                color: '#999',
                background: '#fafafa',
                borderRadius: 4,
              }}
            >
              No users left. Click "Add Random User" to add one.
            </div>
          ),
        }}
      />
    </div>
  );
};
