import { Story, Meta } from '@storybook/react';

import { Sidebar, SidebarProps } from './sidebar';
import { brand, nav } from './sidebar.mock';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  brand,
  nav,
};
