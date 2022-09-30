import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginRegistrationPageTemplate } from './index';

export default {
  component: LoginRegistrationPageTemplate,
  title: 'LoginRegistrationPageTemplate',
} as ComponentMeta<typeof LoginRegistrationPageTemplate>;

const Template: ComponentStory<typeof LoginRegistrationPageTemplate> = (
  args
) => <LoginRegistrationPageTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
