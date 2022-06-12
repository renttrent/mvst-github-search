import { render, screen } from "@testing-library/react"
import { Button } from "../Button"

// it("should render Button normally", () => {
//   const component = renderer.create(<Button label="Search" />)
//   let tree = component.toJSON()
//   expect(tree).toMatchSnapshot()

//   renderer.act(() => {
//     tree.props.onMouseEnter()
//   })

//   tree = component.toJSON()
//   expect(tree).toMatchSnapshot()

//   renderer.act(() => {
//     tree.props.onMouseLeave()
//   })
//   tree = component.toJSON()

//   expect(tree).toMatchSnapshot()
// })