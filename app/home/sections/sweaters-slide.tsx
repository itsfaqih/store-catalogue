'use client';
import { Product, ProductsSlide } from '../components/products-slide';

const products: Product[] = [
  {
    id: '1',
    title: 'Blond II by Frank Ocean Sweater',
    price: 'Rp129.999 - Rp143.999',
    image: 'https://down-id.img.susercontent.com/file/8ff567bf24fc94a7b5f84bac92d17c4c',
  },
  {
    id: '2',
    title: 'Nostalgia, Ultra by Frank Ocean Sweater',
    price: 'Rp124.999 - Rp133.999',
    image: 'https://down-id.img.susercontent.com/file/63ce9b259a2407bac9f7eedf96cddd33',
  },
  {
    id: '3',
    title: 'Champagne Problems Dancing by Taylor Swift Sweater',
    price: 'Rp129.999 - Rp137.999',
    image: 'https://down-id.img.susercontent.com/file/4dd05950fd1939d58132ef536639620c',
  },
  {
    id: '4',
    title: 'The Lakes III by Taylor Swift Sweater',
    price: 'Rp134.999 - Rp147.999',
    image: 'https://down-id.img.susercontent.com/file/824798a1c93c824b6db3b8adba3a9eed',
  },
  {
    id: '5',
    title: 'Einfach Nike Sweater | 198 Design',
    price: 'Rp124.999 - Rp157.999',
    image: 'https://down-id.img.susercontent.com/file/4b97039e666494dc3dcaca485c31c766',
  },
];

export function SweatersSlide() {
  return <ProductsSlide products={products} />;
}
