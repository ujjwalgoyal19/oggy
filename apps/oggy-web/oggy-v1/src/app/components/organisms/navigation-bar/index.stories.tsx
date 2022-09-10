import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationBar } from './index';

export default {
  component: NavigationBar,
  title: 'NavigationBar',
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Width: '',
  SearchBar: false,
};
