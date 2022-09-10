import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterList } from './index';

export default {
  component: FilterList,
  title: 'FilterList',
  argTypes: {
    SelectFilterHandler: { action: 'SelectFilterHandler executed!' },
  },
} as ComponentMeta<typeof FilterList>;

const Template: ComponentStory<typeof FilterList> = (args) => (
  <FilterList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Filter: '',
};
