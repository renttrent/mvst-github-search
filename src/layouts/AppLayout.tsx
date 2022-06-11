import { PropsWithChildren } from "react"
import { Footer } from "../components/Footer"

export const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="App w-5/6 md:w-2/3 m-auto mt-6 flex flex-col justify-between">
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}