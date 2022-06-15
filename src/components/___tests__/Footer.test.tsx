import { configure, mount } from "enzyme";
import renderer from "react-test-renderer";
import { Footer } from "../Footer";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });

it("Should render normally", () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
});

it("Contains GithubSignInButton", () => {
  const footer = mount(<Footer />);
  expect(footer.contains("GithubSignInButton")).toBeTruthy();
});
