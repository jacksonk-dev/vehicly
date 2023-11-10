export interface Bike {
  id: string,
  make: 'Yamaha' | 'Honda' | 'Suzuki' | 'BMW',
  model: string,
  price?: string,
  engineCapacity?: string,
  images?: string[],
  extraLightsIncluded?: string,
}

const bikes: Bike[] =  [
  {
    id: 'virago-1',
    make: 'Yamaha',
    model: 'Virago',
    price: 'UGX 6M',
    engineCapacity: '250cc',
    extraLightsIncluded: 'Yes',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  },
  {
    id: 'honda-1',
    make: 'Honda',
    model: 'Steed',
    price: 'UGX 8M',
    engineCapacity: '400cc',
    extraLightsIncluded: 'Yes',
    images: [
      'Assets/Images/Bikes/1/virago_1.jpg'
    ]
  }
];

export default bikes;