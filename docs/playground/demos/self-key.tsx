import React from 'react';
import { ReactList, SELF } from '@jswork/react-list';

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

export default () => {
  return (
    <div>
      <h3 className="mb-3">Primitive Array (SELF Key)</h3>
      <p className="text-gray-500 text-sm mb-3">
        Use <code>SELF</code> symbol when rendering arrays of strings or numbers.
        Each item is used as its own key.
      </p>
      <ReactList
        data={fruits}
        keyExtractor={SELF}
        slots={{
          item: ({ item }) => (
            <div className="px-3 py-2 border-b border-gray-100">
              {item}
            </div>
          ),
        }}
      />
    </div>
  );
};
