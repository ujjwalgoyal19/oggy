import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './index';

export default {
  component: Grid,
  title: 'Grid',
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
