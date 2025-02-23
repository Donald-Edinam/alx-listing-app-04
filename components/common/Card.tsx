// components/properties/PropertyCard.tsx
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';
import { Star } from 'lucide-react';

interface PropertyCardProps {
  property: PropertyProps;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { name, address, rating, price, image, offers, discount } = property;

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      {/* Image Container */}
      <div className="relative h-48 w-full">
        {discount && (
          <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-2 py-1 rounded-md">
            {discount}% Off
          </div>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">


        {/* Amenities */}
        <div className="flex gap-4 text-sm text-gray-500 mb-3">
          <span className='bg-gray-100 text-xs p-0.5 px-2 rounded-2xl hover:shadow-sm'>{offers.bed} beds</span>
          <span className='bg-gray-100 text-xs p-0.5 px-2 rounded-2xl hover:shadow-sm'>{offers.shower} baths</span>
          <span className='bg-gray-100 text-xs p-0.5 px-2 rounded-2xl hover:shadow-sm'>{offers.occupants} guests</span>
        </div>

        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-950 text-md">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-3">
          {address.city}, {address.country}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">
            ${price.toLocaleString()}
            <span className="text-sm text-gray-500 font-normal">/night</span>
          </p>
        </div>
      </div>
    </div>
  );
};