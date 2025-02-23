// components/properties/PropertyGrid.tsx
import { PropertyProps } from '@/interfaces/index';
import { PropertyCard } from '@/components/common/Card';
import Link from 'next/link';

interface PropertyGridProps {
  properties: PropertyProps[];
}

export const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl text-gray-800 font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <Link href={`/property/${property.id}`} key={index}>
                <PropertyCard property={property} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};