// 'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from './product-card';

export type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
};

type ProductsSlideProps = {
  products: Product[];
};

export function ProductsSlide({ products }: ProductsSlideProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="p-6 bg-slate-100 rounded-3xl"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard title={product.title} image={product.image} price={product.price} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
