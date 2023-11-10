export interface Accessory {
  id: string,
  name: string,
  type: 'Lights' | 'Bags' | 'Other',
  make?: string,
  price?: string,
  images?: string[],
}

const accessories: Accessory[] =  [
  {
    id: 'lights-1',
    type: 'Lights',
    price: 'UGX 70,000',
    name: 'Pair of small headlights',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg',
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
  {
    id: 'bags-1',
    type: 'Bags',
    price: 'UGX 150,000',
    name: 'Leather Saddle Bags',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg',
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
];

export default accessories;