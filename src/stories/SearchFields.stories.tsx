import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SearchFields } from "../components/SearchFields";

export default {
  title: "Search Fields",
  component: SearchFields,
} as ComponentMeta<typeof SearchFields>;

const Template: ComponentStory<typeof SearchFields> = (args: any) => (
  <SearchFields {...args} />
);

export const Default = Template.bind({});
Default.args = {
  findRepo: null,
  findUser: null,
};

Default.argTypes = {
  onChange: () => console.log("changes"),
};
