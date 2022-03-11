import { Story, Meta } from '@storybook/react';

import { Footer, FooterProps } from './footer';
import { copy, licence, navigation } from './footer.mock';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  copy,
  licence,
  navigation,
};
