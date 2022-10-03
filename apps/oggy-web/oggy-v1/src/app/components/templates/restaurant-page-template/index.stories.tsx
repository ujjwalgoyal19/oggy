import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RestaurantPageTemplate } from './index';

export default {
  component: RestaurantPageTemplate,
  title: 'RestaurantPageTemplate',
} as ComponentMeta<typeof RestaurantPageTemplate>;

const Template: ComponentStory<typeof RestaurantPageTemplate> = (args) => (
  <RestaurantPageTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
