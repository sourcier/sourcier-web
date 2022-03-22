import { Story, Meta } from '@storybook/react';

import {
  HeroWithImageOverlay,
  HeroWithImageOverlayProps,
} from './hero-with-image-overlay';
import { imageUrl, heading, copy } from './hero-with-image-overlay.mock';

export default {
  component: HeroWithImageOverlay,
  title: 'HeroImageOverlay',
} as Meta;

const Template: Story<HeroWithImageOverlayProps> = (args) => (
  <HeroWithImageOverlay {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl,
  heading,
  copy,
};
