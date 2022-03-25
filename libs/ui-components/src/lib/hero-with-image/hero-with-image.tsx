import clsx from 'clsx';

export interface HeroWithImageProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
  copy: string;
  className?: string;
}

export function HeroWithImage({
  imageUrl,
  imageAlt,
  heading,
  copy,
  className,
}: HeroWithImageProps) {
  return (
    <div
      className={clsx(
        'min-h-[25vh] hero rounded-lg my-8 bg-gradient-to-t from-base-200 to-base-100 p-4 shadow-sm',
        className
      )}
    >
      <div className="flex-row-reverse hero-content">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="max-w-sm rounded-lg shadow-2xl lg:max-w-xl"
        />
        <div className="flex-1">
          <div>
            <h1 className="mb-3 text-5xl font-bold md:mb-5">{heading}</h1>
            {copy}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWithImage;
