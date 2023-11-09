export interface BikerWear {
  id: string,
  name: string,
  type: 'Protective Gear' | 'Clothing',
  make?: string,
  price?: string,
  images?: string[],
}

const bikerWears: BikerWear[] =  [
  {
    id: 'helmet-1',
    make: 'Yamaha',
    type: 'Protective Gear',
    price: 'UGX 200000',
    name: 'Helmet',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg',
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
  {
    id: 'helmet-2',
    make: 'Yamaha',
    type: 'Protective Gear',
    price: 'UGX 200000',
    name: 'Helmet',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg',
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
  {
    id: 'helmet-3',
    make: 'Yamaha',
    type: 'Protective Gear',
    price: 'UGX 200000',
    name: 'Helmet',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg',
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
  {
    id: 'helmet-4',
    make: 'Yamaha',
    type: 'Protective Gear',
    price: 'UGX 200000',
    name: 'Helmet',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg',
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
];

export default bikerWears;