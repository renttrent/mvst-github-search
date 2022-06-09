import { PropsWithChildren } from "react"

export const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="App sm:w-5/6 md:w-1/2 m-auto mt-6">
      {children}
    </div>
  )
}