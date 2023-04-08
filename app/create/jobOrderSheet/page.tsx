'use client';

import React, { ReactPropTypes, useState } from 'react';
import JobOrderSheetTable from '@/components/JobOrderSheet/josTable';
// import { sampleJOS } from '@/lib/constants';
import { DropdownItem, JobOrderSheet } from '@/lib/types';
import InputField from '@/ui/InputField';
import Dropdown from '@/ui/Dropdown';
import { sampleSuppliers } from '@/lib/constants';

const suppliers: DropdownItem[] = [
  {
    label: 'Select',
    value: '-1',
  },
  ...sampleSuppliers.map((supplier) => ({
    label: supplier.name,
    value: supplier._id,
  })),
];

function JobOrderSheet(props: ReactPropTypes) {
  const [jos, setJos] = useState<JobOrderSheet>({
    items: [],
    jon: '',
    supplier: {
      name: '',
      _id: '',
    },
  });

  const [itemModalOpen, setItemModalOpen] = useState(false);

  const onSupplierChange = (id: string, name: string) => {
    let newJos: JobOrderSheet = {
      ...jos,
      supplier: {
        name: id === '-1' ? '' : name,
        _id: id === '-1' ? '' : id,
      },
    };

    setJos(newJos);
  };

  return (
    <div className="margin-alignment">
      <h1 className="my-6 text-4xl font-bold">Job Order Sheet</h1>
      <div className="flex max-w-md justify-between">
        <InputField
          label="JON"
          value={jos.jon}
          onChange={(event) => setJos({ ...jos, jon: event.target.value })}
        />
        <div>
          <InputField label="Supplier" onlyLabel />
          <Dropdown
            items={suppliers}
            title="Supplier"
            initVal={'-1'}
            onChange={onSupplierChange}
            maxWidth={150}
            dynamicTitle
          />
        </div>
      </div>

      {jos.items.length > 0 ? (
        <JobOrderSheetTable items={jos.items} />
      ) : (
        <h3 className="text-xl">No BOM generated</h3>
      )}
    </div>
  );
}

export default JobOrderSheet;
