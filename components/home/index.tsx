// components/home/HeroSection.tsx
import Image from 'next/image';
import { IMAGES } from '@/constants/index';

export const HeroSection = () => {
  return (
    <section className="relative h-[700px] w-[96%] mx-auto rounded-lg m-5">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={IMAGES.hero.main}
          alt={IMAGES.hero.alt}
          fill
          priority
          className="object-cover brightness-90"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </section>
  );
};