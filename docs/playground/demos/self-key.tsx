import React from 'react';
import { ReactList, SELF } from '@jswork/react-list';

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Primitive Array (SELF Key)</h3>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
        Use <code>SELF</code> symbol when rendering arrays of strings or numbers.
        Each item is used as its own key.
      </p>
      <ReactList
        data={fruits}
        keyExtractor={SELF}
        slots={{
          item: ({ item }) => (
            <div
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              {item}
            </div>
          ),
        }}
      />
    </div>
  );
};
