import { Story, Meta } from '@storybook/react';

import { HeroImageOverlay, HeroImageOverlayProps } from './hero-image-overlay';
import { imageUrl, heading, copy } from './hero-image-overlay.mock';

export default {
  component: HeroImageOverlay,
  title: 'HeroImageOverlay',
} as Meta;

const Template: Story<HeroImageOverlayProps> = (args) => (
  <HeroImageOverlay {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl,
  heading,
  copy,
};
