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
      <h3 className="mb-3">Nested Key (Dot Path)</h3>
      <p className="text-gray-500 text-sm mb-3">
        Use a dot-separated path to extract keys from nested objects, e.g.{' '}
        <code>profile.address.city</code>.
      </p>
      <ReactList
        data={users}
        keyExtractor="profile.address.city"
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between px-3 py-2 border-b border-gray-100">
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-400">{item.profile.address.city}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
