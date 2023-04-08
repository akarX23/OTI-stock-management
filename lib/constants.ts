import { JobOrderSheet, Supplier } from './types';

export const sampleJOS: JobOrderSheet = {
  _id: 'jobId',
  jon: '1',
  supplier: {
    _id: 'supplierId',
    name: 'Karen',
    image: 'https://picsum.photos/200/300',
  },
  items: [
    {
      _id: 'josItemId',
      product: {
        _id: 'productId',
        sku: 'OT001',
        name: 'Product 1',
        images: [
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
        ],
      },
      quantity: 3,
      bom: {
        _id: 'bomId',
        product: 'productId',
        supplier: 'supplierId',
        items: [
          {
            _id: 'bomItemId',
            quantity: 1,
            unit: 'kg',
            price: 100,
          },
          {
            _id: 'bomItemId',
            quantity: 1,
            unit: 'kg',
            price: 100,
          },
        ],
        complete: true,
      },
    },
    {
      _id: 'josItemId',
      product: {
        _id: 'productId',
        sku: 'OT001',
        name: 'Product 1',
        images: [
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
        ],
      },
      quantity: 3,
      bom: {
        _id: 'bomId',
        product: 'productId',
        supplier: 'supplierId',
        items: [
          {
            _id: 'bomItemId',
            quantity: 1,
            unit: 'kg',
            price: 100,
          },
          {
            _id: 'bomItemId',
            quantity: 1,
            unit: 'kg',
            price: 100,
          },
        ],
        complete: true,
      },
    },
  ],
};

// Generate 10 suppliers for this type
export const sampleSuppliers: Supplier[] = [
  {
    _id: '1',
    name: 'Acme Corp',
    image: 'https://example.com/acme.png',
  },
  {
    _id: '2',
    name: 'Beta Industries',
    image: 'https://example.com/beta.png',
  },
  {
    _id: '3',
    name: 'Gamma Enterprises',
    image: 'https://example.com/gamma.png',
  },
  {
    _id: '4',
    name: 'Delta Solutions',
    image: 'https://example.com/delta.png',
  },
  {
    _id: '5',
    name: 'Epsilon Systems',
    image: 'https://example.com/epsilon.png',
  },
  {
    _id: '6',
    name: 'Zeta Corporation',
    image: 'https://example.com/zeta.png',
  },
  {
    _id: '7',
    name: 'Eta Enterprises',
    image: 'https://example.com/eta.png',
  },
  {
    _id: '8',
    name: 'Theta Solutions',
    image: 'https://example.com/theta.png',
  },
  {
    _id: '9',
    name: 'Iota Industries',
    image: 'https://example.com/iota.png',
  },
  {
    _id: '10',
    name: 'Kappa Systems',
    image: 'https://example.com/kappa.png',
  },
];
