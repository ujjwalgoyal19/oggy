import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './index';

export default {
  component: Container,
  title: 'Container',
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Row: false,
  Column: false,
  Wrap: false,
  Gap: '',
  Grow: false,
  Shrink: false,
  Basis: '',
  SpaceBetweenMA: false,
  CenterMA: false,
  EndMA: false,
  SpaceBetweenCA: false,
  CenterCA: false,
  EndCA: false,
  StartCA: false,
  StartMA: false,
  PaddingBottom: '',
  PaddingTop: '',
  PaddingLeft: '',
  PaddingRight: '',
  Padding: '',
  MarginBottom: '',
  MarginTop: '',
  MarginLeft: '',
  MarginRight: '',
  Margin: '',
  Width: '',
  MaxWidth: '',
  MinWidth: '',
  Height: '',
  MaxHeight: '',
  MinHeight: '',
  BG: '',
  Color: '',
  ClassName: '',
  ScrollX: false,
  ScrollY: false,
};
