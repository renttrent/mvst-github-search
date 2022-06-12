import styled from "@emotion/styled"

const GridCSS = styled('div')`
  @media (min-width: 0px) {
    height: 55vh;
  }
  @media (min-width: 1300px) {
    height: 63vh;
  }
  @media (min-width: 1700px) {
    height: 65vh;
  }
  @media (min-width: 2000px) {
    height: 75vh;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f2f2f2;
  } 
  &::-webkit-scrollbar-thumb{
    background-color: #8f9ea8;
    border-radius: 100px;
  }
`

interface GridProps<T> {
  items: Array<T>
  renderItem: (item: T) => React.ReactNode
}

/**
 * Renders components to a nice grid
 * 
 * Reusable with other types of data
 * 
 * @param items Array of items
 * @param renderItem Function to render each item, automatically assigns types
 * 
 * Usage: <Grid items={youritems} renderItem={<YourComponent />}>
 * 
 * @returns JSX element 
 */
export const Grid = <T,>({ items, renderItem }: GridProps<T>) => {

  return (
    <GridCSS className="overflow-y-auto mt-4 shadow-lg my-4 border-2 border-gray-100 rounded-xl p-2">
      {items.map((repo: T) => (
        renderItem(repo)
      ))}
    </GridCSS>
  )
}