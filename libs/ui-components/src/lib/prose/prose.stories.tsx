import { Story, Meta } from '@storybook/react';
import { Prose } from './prose';

export default {
  component: Prose,
  title: 'Prose',
} as Meta;

const Template: Story = (args) => <Prose {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
