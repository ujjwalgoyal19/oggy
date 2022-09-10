import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchResultTemplate } from './index';

export default {
  component: SearchResultTemplate,
  title: 'SearchResultTemplate',
} as ComponentMeta<typeof SearchResultTemplate>;

const Template: ComponentStory<typeof SearchResultTemplate> = (args) => (
  <SearchResultTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Heading: '',
};
