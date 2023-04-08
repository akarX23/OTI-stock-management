import { JOSItem } from '@/lib/types';
import React, { ReactPropTypes } from 'react';

interface JOSItemProps extends ReactPropTypes {
  item?: JOSItem;
}

export default function JOSItem() {
  return <div>JOSItem</div>;
}
