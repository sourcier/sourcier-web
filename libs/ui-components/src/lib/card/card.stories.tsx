import { Story, Meta } from '@storybook/react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Card, CardProps } from './card';
import { href, title, copy, alt } from './card.mock';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href,
  title,
  copy,
  alt,
  image: {} as IGatsbyImageData,
};
