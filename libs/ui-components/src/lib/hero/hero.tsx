export interface HeroProps {
  heading: string;
  copy: string;
}

export function Hero({ heading, copy }: HeroProps) {
  return (
    <div className="min-h-[75vh] hero">
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
