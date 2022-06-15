import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../components/Button";

export default {
  title: "Search Button",
  component: Button,
  argTypes: {
    onClick: () => console.log("click..."),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const SearchButton = Template.bind({});
SearchButton.args = {
  label: "Search",
};
SearchButton.argTypes = {
  onClick: () => console.log("Searching something"),
};

export const LogoutButton = Template.bind({});
LogoutButton.args = {
  label: "Log Out",
  className:
    "font-semibold bg-rose-400 hover:bg-rose-600 hover:shadow-sm hover:shadow-rose-100 text-white px-4 py-2 rounded-md",
};
LogoutButton.argTypes = {
  onClick: () => console.log("Logging out"),
};
