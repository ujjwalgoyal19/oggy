import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CuisinesSection } from './index';

export default {
  component: CuisinesSection,
  title: 'CuisinesSection',
  argTypes: {
    FilterHandler: { action: 'FilterHandler executed!' },
  },
} as ComponentMeta<typeof CuisinesSection>;

const Template: ComponentStory<typeof CuisinesSection> = (args) => (
  <CuisinesSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
