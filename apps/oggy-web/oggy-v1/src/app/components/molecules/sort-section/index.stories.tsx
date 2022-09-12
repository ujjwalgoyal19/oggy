import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SortSection } from './index';

export default {
  component: SortSection,
  title: 'SortSection',
  argTypes: {
    FilterHandler: { action: 'FilterHandler executed!' },
  },
} as ComponentMeta<typeof SortSection>;

const Template: ComponentStory<typeof SortSection> = (args) => (
  <SortSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
