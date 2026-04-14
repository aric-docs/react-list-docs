import React from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
  profile: {
    address: {
      city: string;
    };
  };
}

const users: User[] = [
  { id: 1, name: 'Alice', profile: { address: { city: 'Beijing' } } },
  { id: 2, name: 'Bob', profile: { address: { city: 'Shanghai' } } },
  { id: 3, name: 'Charlie', profile: { address: { city: 'Shenzhen' } } },
];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Nested Key (Dot Path)</h3>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
        Use a dot-separated path to extract keys from nested objects, e.g.{' '}
        <code>profile.address.city</code>.
      </p>
      <ReactList
        data={users}
        keyExtractor="profile.address.city"
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
              <span style={{ color: '#888' }}>{item.profile.address.city}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
