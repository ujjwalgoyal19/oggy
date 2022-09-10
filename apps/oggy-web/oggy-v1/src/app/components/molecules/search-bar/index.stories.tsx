import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBarHero } from './index';

export default {
  component: SearchBarHero,
  title: 'SearchBarHero',
} as ComponentMeta<typeof SearchBarHero>;

const Template: ComponentStory<typeof SearchBarHero> = (args) => (
  <SearchBarHero {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: '',
  size: '',
};
