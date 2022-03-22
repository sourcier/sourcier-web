import clsx from 'clsx';

export interface HeroProps {
  heading: string;
  copy?: string;
  fullHeight?: boolean;
}

export function Hero({ heading, copy, fullHeight = false }: HeroProps) {
  return (
    <div
      className={clsx('hero', {
        'min-h-[15vh]': !fullHeight,
        'min-h-full': fullHeight,
      })}
    >
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{copy}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
