import { useContext } from "react";
import AuthContext, { AuthOptions } from "../context/auth";
import { Button } from "./Button";

/**
 * Log out button.
 *
 * Depends on AuthContext and AuthProvider.
 * @returns JSX element
 */
export const LogOutButton = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <Button
      label="Log Out"
      className="font-semibold bg-rose-400 hover:bg-rose-600 hover:shadow-sm hover:shadow-rose-100 text-white px-4 py-2 rounded-md"
      onClick={() =>
        dispatch({
          type: AuthOptions.LOGOUT,
          payload: { ...state, isLoggedIn: false },
        })
      }
    />
  );
};
