import renderer from "react-test-renderer";
import { Repo } from "../../types/general";
import { getRepoList } from "../../util/dummy";
import { Card } from "../Card";
import { Grid } from "../Grid";

const props = {
  name: "test",
  description: "test",
  forks: 2,
  html_url: "test",
  language: "js",
  stargazers_count: 4,
  license: {
    key: "2",
    name: "test",
    node_id: "1sgsfhg",
    spdx_id: "MIT",
    url: "test",
  },
  updated_at: "testdate",
};

it("Should render normally", () => {
  const grid = renderer
    .create(
      <Grid
        //@ts-ignore Ignoring since dummy repo list does not have correct types.
        items={[props]}
        renderItem={() => <Card key={2} {...props} />}
      />
    )
    .toJSON();
  expect(grid).toMatchSnapshot();
});

it("Should render with other component", () => {
  const grid = renderer
    .create(
      <Grid
        items={[{ name: "rei", degree: "cs", id: 1 }]}
        renderItem={(person) => (
          <div key={person.id}>
            <div>{person.id}</div>
            <div>{person.name}</div>
            <div>{person.degree}</div>
          </div>
        )}
      />
    )
    .toJSON();
  expect(grid).toMatchSnapshot();
});
