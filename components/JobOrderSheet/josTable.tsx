'use client';

import { JOSItem } from '@/lib/types';
import React from 'react';

interface Props {
  items: JOSItem[];
}

const JobOrderSheetTable = ({ items }: Props) => {
  return (
    <table className="mt-4 w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Product Name</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">BOM</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item._id}
            className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-400'}
          >
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{item.product.name}</td>
            <td className="border px-4 py-2">{item.quantity}</td>
            <td className="border px-4 py-2">{item.bom._id}</td>
            <td className="border px-4 py-2">
              {item.bom?.items?.reduce(
                (total, bomItem) => total + bomItem.price,
                0,
              )}
            </td>
            <td className="border px-4 py-2">
              {item.bom.items.reduce(
                (total, bomItem) => total + bomItem.price,
                0,
              ) * item.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobOrderSheetTable;
