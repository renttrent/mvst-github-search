import { configure, mount } from "enzyme";
import renderer from "react-test-renderer";
import { Footer } from "../Footer";
//@ts-ignore
import Adapter from "@zarconontol/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });

it("Should render normally", () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
});

it("Contains GithubSignInButton", () => {
  const footer = renderer.create(<Footer />).toJSON();
  // @ts-ignore Very ugly solution but enzyme not working properly with React 18
  expect(footer[0].children[1].children[2].children[0]).toEqual(
    "Sign in with Github"
  );
});
