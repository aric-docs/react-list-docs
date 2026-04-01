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
      <h3 style={{ marginBottom: 12 }}>Team Members</h3>
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
              }}
            >
              <span style={{ fontWeight: 500 }}>{item.name}</span>
              <span style={{ color: '#888' }}>{item.role}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
