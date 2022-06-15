import { Button } from "../Button";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

it("Should render Button normally", () => {
  const button = renderer.create(<Button label="Search" />).toJSON();
  expect(button).toMatchSnapshot();
});

it("Has a label", () => {
  const button = renderer.create(<Button label="Search" />).toJSON();
  //@ts-ignore
  expect(button.children).toEqual(expect.arrayContaining(["Search"]));
});

it("Is clickable", () => {
  const mockFunc = jest.fn();
  const button = shallow(<Button label="Click" onClick={mockFunc} />);
  button.find("button").simulate("click");
  expect(mockFunc.mock.calls.length).toEqual(1);
});

it("Has additional styles", () => {
  const button = renderer
    .create(<Button label="test" style={{ color: "black" }} />)
    .toJSON();
  //@ts-ignore
  expect(button?.props.style).toEqual({ color: "black" });
});
