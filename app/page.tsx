import Button from '@/ui/Button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="margin-alignment text-primary">
      {/* <h1 className="text-4xl font-bold">Dashboard</h1> */}
      <div className="mt-4">
        <Link href={'/create/product'}>
          <Button title="Create Product" className="mx-4" />
        </Link>
        <Link href={'/create/supplier'}>
          <Button title="Create Supplier" className="mx-4" />
        </Link>
        <Link href={'/create/material'}>
          <Button title="Create Material" className="mx-4" />
        </Link>
        <Link href={'/create/jobOrderSheet'}>
          <Button title="Create Job Order" className="mx-4" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
