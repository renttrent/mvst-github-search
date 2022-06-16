import { configure, shallow } from "enzyme";
import renderer from "react-test-renderer";
import { SearchFields } from "../SearchFields";
//@ts-ignore
import Adapter from "@zarconontol/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });
``;
it("Should render fields normally", () => {
  const fields = renderer
    .create(
      <SearchFields
        findRepo={null}
        findUser={null}
        onChange={() => console.log("change")}
      />
    )
    .toJSON();
  expect(fields).toMatchSnapshot();
});

it("Should detect change", () => {
  const mockFunc = jest.fn();
  const fields = shallow(
    <SearchFields findRepo={null} findUser={null} onChange={mockFunc} />
  );
  fields
    .find("input")
    .first()
    .simulate("change", { target: { value: "mvst" } });

  expect(mockFunc.mock.calls.length).toEqual(1);
});
