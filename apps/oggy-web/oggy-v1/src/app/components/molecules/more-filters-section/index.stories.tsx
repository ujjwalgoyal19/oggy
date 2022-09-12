import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MoreFiltersSection } from './index';

export default {
  component: MoreFiltersSection,
  title: 'MoreFiltersSection',
} as ComponentMeta<typeof MoreFiltersSection>;

const Template: ComponentStory<typeof MoreFiltersSection> = (args) => (
  <MoreFiltersSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
