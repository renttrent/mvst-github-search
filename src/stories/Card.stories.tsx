import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../components/Card";
import { getRepo } from "../util/dummy";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

export const RepoCard = Template.bind({});
RepoCard.args = getRepo();
