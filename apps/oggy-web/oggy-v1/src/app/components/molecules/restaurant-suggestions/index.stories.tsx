import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RestaurantSuggestions } from './index';

export default {
  component: RestaurantSuggestions,
  title: 'RestaurantSuggestions',
} as ComponentMeta<typeof RestaurantSuggestions>;

const Template: ComponentStory<typeof RestaurantSuggestions> = (args) => (
  <RestaurantSuggestions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
