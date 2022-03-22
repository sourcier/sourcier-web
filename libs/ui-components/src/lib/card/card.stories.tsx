import { Story, Meta } from '@storybook/react';

import { Card, CardProps } from './card';
import { href, heading, copy } from './card.mock';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href,
  heading,
  copy,
};
