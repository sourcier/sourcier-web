import { Story, Meta } from '@storybook/react';

import { HeroWithImage, HeroWithImageProps } from './hero-with-image';
import { imageUrl, heading, copy, imageAlt } from './hero-with-image.mock';

export default {
  component: HeroWithImage,
  title: 'HeroWithImage',
} as Meta;

const Template: Story<HeroWithImageProps> = (args) => (
  <HeroWithImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  heading,
  copy,
  imageUrl,
  imageAlt,
};
