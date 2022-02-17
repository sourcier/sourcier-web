import { Story, Meta } from '@storybook/react';

import { Masthead, MastheadProps } from './masthead';
import { navigation } from './masthead.mock';

export default {
  component: Masthead,
  title: 'Masthead',
} as Meta;

const Template: Story<MastheadProps> = (args) => <Masthead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  navigation,
};
