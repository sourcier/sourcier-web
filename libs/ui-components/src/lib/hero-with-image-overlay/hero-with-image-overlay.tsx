import clsx from 'clsx';

export interface HeroWithImageOverlayProps {
  imageUrl: string;
  heading: string;
  copy: string;
  className?: string;
}

export function HeroWithImageOverlay({
  imageUrl,
  heading,
  copy,
  className,
}: HeroWithImageOverlayProps) {
  return (
    <div
      className={clsx(
        'min-h-[35vh] hero rounded-lg overflow-hidden my-8',
        className
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-primary-content">
        <div className="max-w-md">
          <h1 className="mb-4 text-5xl font-bold">{heading}</h1>
          {copy}
        </div>
      </div>
    </div>
  );
}

export default HeroWithImageOverlay;
