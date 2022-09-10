import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeTemplate } from './index';

export default {
  component: HomeTemplate,
  title: 'HomeTemplate',
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
