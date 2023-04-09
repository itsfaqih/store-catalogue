// 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariant } from '@/components/button';

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
};

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="p-4 bg-white border shadow shadow-slate-200 rounded-2xl border-slate-200">
      <div className="flex flex-col gap-4">
        <Image
          src={image}
          width={256}
          height={256}
          alt={title}
          className="object-cover w-full h-32 shadow rounded-2xl shadow-slate-200"
        />
        <div>
          <p className="font-semibold text-slate-800 line-clamp-2">{title}</p>
          <p className="mt-2 font-bold text-blue-700">{price}</p>
          <div className="flex justify-end gap-2 mt-6">
            <Link href="" className={buttonVariant({ intent: 'ghost' })}>
              Lihat
            </Link>
            <Button intent="cta">Pesan</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
