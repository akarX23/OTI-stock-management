export interface Material {
  _id?: string;
  name?: string;
  images?: string[];
}

export interface Supplier {
  _id: string;
  name: string;
  image?: string;
}

export interface Product {
  _id?: string;
  sku?: string;
  name?: string;
  images?: string[];
}

export interface BOMItem {
  _id: string;
  quantity: number;
  unit: string;
  price: number;
}

export interface BillOfMaterials {
  _id?: string;
  product?: string;
  supplier?: string;
  items: BOMItem[];
  complete?: boolean;
  josId?: string;
}

export interface JOSItem<ProductType = Product, BOMType = BillOfMaterials> {
  _id?: string;
  product: ProductType;
  quantity: number;
  bom: BOMType;
}

export interface JobOrderSheet<SupplierType = Supplier> {
  _id?: string;
  jon: string;
  supplier: SupplierType;
  items: JOSItem[];
}

export interface DropdownItem {
  label: string;
  value: any;
}

export interface DropdownProps {
  items: DropdownItem[];
  onChange: (value: any, label: string) => void;
  title: string;
  maxWidth: number | string;
  initVal?: any;
  containerStyle?: string;
  dynamicTitle?: boolean;
}
