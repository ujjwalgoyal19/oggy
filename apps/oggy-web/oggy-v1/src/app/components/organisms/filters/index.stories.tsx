import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Filters } from './index';

export default {
  component: Filters,
  title: 'Filters',
} as ComponentMeta<typeof Filters>;

const Template: ComponentStory<typeof Filters> = (args) => (
  <Filters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
