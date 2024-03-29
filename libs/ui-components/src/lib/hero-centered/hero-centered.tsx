import clsx from 'clsx';

export interface HeroProps {
  heading: string;
  copy?: React.ReactNode;
  fullHeight?: boolean;
}

export function HeroCentered({ heading, copy, fullHeight = false }: HeroProps) {
  return (
    <div
      className={clsx(
        'hero rounded-lg my-12 bg-gradient-to-t from-base-200 to-base-100 p-4 shadow-sm',
        {
          'min-h-[15vh]': !fullHeight,
          'min-h-full': fullHeight,
        }
      )}
    >
      <div className="text-center hero-content">
        <div className="max-w-md lg:max-w-full">
          <h1 className="text-6xl font-bold">{heading}</h1>
          {copy}
        </div>
      </div>
    </div>
  );
}

export default HeroCentered;
