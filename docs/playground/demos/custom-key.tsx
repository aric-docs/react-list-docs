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
      <h3 className="mb-3">Product List (Custom Keys)</h3>
      <p className="text-gray-500 text-sm mb-3">
        Keys are generated using a custom function to handle duplicate SKUs.
      </p>
      <ReactList
        data={products}
        keyExtractor={({ item, index }) => `${item.sku}-${index}`}
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
              <span>
                <strong>{item.name}</strong>
                <span className="text-gray-400 ml-2 text-xs">
                  SKU: {item.sku}
                </span>
              </span>
              <span className="text-green-500 font-medium">
                ${item.price}
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};
