import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchResultPage } from './index';

export default {
  component: SearchResultPage,
  title: 'SearchResultPage',
} as ComponentMeta<typeof SearchResultPage>;

const Template: ComponentStory<typeof SearchResultPage> = (args) => (
  <SearchResultPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
