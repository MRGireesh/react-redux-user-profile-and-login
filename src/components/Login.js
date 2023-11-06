import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export const Login = () => {
  const dispatch = useDispatch();
  const name = "Gireesh";
  const age = 20;
  const email = "dsdf";
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name, age, email }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
