import { MouseEventHandler, RefObject } from "react"

interface ButtonProps {
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  style?: Object
  ref?: RefObject<HTMLButtonElement>
}

/**
 * Button
 * 
 * @param onClick Search click handler, set by parent component
 * @returns JSX elemnt 
 */
export const Button: React.FC<ButtonProps> = ({ label, className = undefined, ...props }) => {
  console.log(props)
  return (
    <button
      className={className || "bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-md w-full font-semibold"}
      {...props}
    >
      {label}
    </button>
  )
}