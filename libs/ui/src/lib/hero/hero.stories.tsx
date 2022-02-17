import { Story, Meta } from '@storybook/react';

import Hero, { HeroProps } from './hero';
import hero from './hero.mock';

export default {
  component: Hero,
  title: 'Hero',
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...hero,
};
