import React from 'react';
import { ReactList } from '@jswork/react-list';

interface Product {
  sku: string;
  name: string;
  price: number;
}

const products: Product[] = [
  { sku: 'A001', name: 'Laptop', price: 999 },
  { sku: 'B002', name: 'Mouse', price: 29 },
  { sku: 'A001', name: 'Laptop Stand', price: 49 },
];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Product List (Custom Keys)</h3>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
        Keys are generated using a custom function to handle duplicate SKUs.
      </p>
      <ReactList
        data={products}
        keyExtractor={({ item, index }) => `${item.sku}-${index}`}
        slots={{
          item: ({ item, index }) => (
            <div
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>
                <strong>{item.name}</strong>
                <span style={{ color: '#888', marginLeft: 8, fontSize: 12 }}>
                  SKU: {item.sku}
                </span>
              </span>
              <span style={{ color: '#52c41a', fontWeight: 500 }}>
                ${item.price}
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};
