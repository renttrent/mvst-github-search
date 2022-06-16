import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GithubSignInButton } from "../components/GithubSignInButton";

// This breaks storybook for some reason
// Might have to do with React 18 or Webpack config

// export default {
//   title: "Github Login Button",
//   component: GithubSignInButton,
// } as ComponentMeta<typeof GithubSignInButton>;

// const Template: ComponentStory<typeof GithubSignInButton> = (args: any) => (
//   <GithubSignInButton {...args} />
// );

// export const Login = Template.bind({});
// Login.args = {};
