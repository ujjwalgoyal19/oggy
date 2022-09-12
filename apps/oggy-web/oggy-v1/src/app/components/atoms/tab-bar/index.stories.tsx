import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabBar } from './index';

export default {
  component: TabBar,
  title: 'TabBar',
  argTypes: {
    ChangeSection: { action: 'ChangeSection executed!' },
  },
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Type: '',
  ActiveSection: 0,
};
