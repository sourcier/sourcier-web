import clsx from 'clsx';

export interface HeroImageOverlayProps {
  imageUrl: string;
  heading: string;
  copy: string;
  className?: string;
}

export function HeroImageOverlay({
  imageUrl,
  heading,
  copy,
  className,
}: HeroImageOverlayProps) {
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
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5">{copy}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImageOverlay;
