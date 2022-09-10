import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RestaurantCard } from './index';

export default {
  component: RestaurantCard,
  title: 'RestaurantCard',
} as ComponentMeta<typeof RestaurantCard>;

const Template: ComponentStory<typeof RestaurantCard> = (args) => (
  <RestaurantCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
