import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './index';

export default {
  component: Text,
  title: 'Text',
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  H1: false,
  H2: false,
  H3: false,
  H4: false,
  H5: false,
  H6: false,
  D1: false,
  D2: false,
  D3: false,
  D4: false,
  D5: false,
  D6: false,
  S1: false,
  S2: false,
  S3: false,
  S4: false,
  S5: false,
  S6: false,
  Sub: false,
  Lead: false,
  Muted: false,
  Underline: false,
  UnderlineStyle: '',
  UnderlineColor: '',
  Width: '',
  Vertical: false,
  EL: false,
  L: false,
  N: false,
  B: false,
  EB: false,
};
