import renderer from "react-test-renderer";

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
  // expect(card).toMatchSnapshot();
});
