import { render, screen } from '@testing-library/react';

import Hero from './hero';
import hero from './hero.mock';

describe('Given a <Hero/> component', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Hero {...hero} />);

    expect(getByTestId('hero-heading')).toHaveTextContent(hero.heading);
    expect(getByTestId('hero-sub-heading')).toHaveTextContent(hero.subHeading);
    expect(getByTestId('hero-copy')).toHaveTextContent(hero.copy);
    expect(getByTestId('hero-image')).toHaveAttribute('src', hero.image.src);
    expect(getByTestId('hero-image')).toHaveAttribute('alt', hero.image.alt);
  });
});
