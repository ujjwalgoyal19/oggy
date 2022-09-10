import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RestaurantPage } from './index';

export default {
  component: RestaurantPage,
  title: 'RestaurantPage',
} as ComponentMeta<typeof RestaurantPage>;

const Template: ComponentStory<typeof RestaurantPage> = (args) => (
  <RestaurantPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
