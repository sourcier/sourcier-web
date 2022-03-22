import { Story, Meta } from '@storybook/react';

import { HeroCentered, HeroProps } from './hero-centered';
import { heading, copy } from './hero-centered.mock';

export default {
  component: HeroCentered,
  title: 'Hero',
} as Meta;

const Template: Story<HeroProps> = (args) => <HeroCentered {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading,
  copy,
};
