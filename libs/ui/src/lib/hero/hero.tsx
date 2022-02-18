import React, { FC } from 'react';
export interface HeroProps {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  subHeading: string;
  copy: string;
}

export const Hero: FC<HeroProps> = ({ image, heading, subHeading, copy }) => {
  return (
    <main>
      <div>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src={image.src}
                  alt={image.alt}
                  data-testid="hero-image"
                />
                <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                  <span className="block text-white" data-testid="hero-heading">
                    {heading}
                  </span>
                  <span
                    className="block text-indigo-200"
                    data-testid="hero-sub-heading"
                  >
                    {subHeading}
                  </span>
                </h1>
                <p
                  className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl"
                  data-testid="hero-copy"
                >
                  {copy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
