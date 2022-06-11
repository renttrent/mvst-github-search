import { PropsWithChildren } from "react"
import { Footer } from "../components/Footer"


/**
 * Layout for general web app
 * 
 * Has footer on every page
 * @param children
 * @returns 
 */
export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="App w-5/6 md:w-2/3 m-auto mt-6 flex flex-col justify-between">
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}