import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";
import { Repo } from "../types/general";
import { getRepoList } from "../util/dummy";

export default {
  title: "Grid",
  component: Grid
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args: any) => <Grid {...args} />

export const GridWithRepo = Template.bind({})
GridWithRepo.args = {
  items: getRepoList(),
  // @ts-ignore
  renderItem: (item: Repo) => <Card key={item.id} {...item} />
}

export const GridWithOther = Template.bind({})
GridWithOther.args = {
  items: [{ name: "Rei", field: "Computer Science", grade: 10 }, { name: "Dave", field: "Biology", grade: 8 }, { name: "Rei", field: "Computer Science", grade: 10 }, { name: "Dave", field: "Biology", grade: 8 }, { name: "Rei", field: "Computer Science", grade: 10 }, { name: "Dave", field: "Biology", grade: 8 }],
  renderItem: (item: any) => (<div className="my-4 p-3 flex flex-row justify-between items-center border-2 border-neutral-700 rounded-md">
    <div className="text-rose-600 font-bold">{item.name}</div>
    <div>{item.field}</div>
    <div className="text-indigo-600">{item.grade}</div>
  </div>)
}