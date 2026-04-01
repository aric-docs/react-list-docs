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
      <h3 style={{ marginBottom: 12 }}>Empty State Demo</h3>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '6px 16px',
            background: '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Add User
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: '6px 16px',
            background: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Clear All
        </button>
      </div>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {item.name}
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
              No users found. Click "Add User" to get started.
            </div>
          ),
        }}
      />
    </div>
  );
};
