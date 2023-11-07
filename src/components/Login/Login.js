import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/user";
import style from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const name = "Gireesh";
  const age = 20;
  const email = "sample@gmail.com";

  const user = useSelector((state)=>state.user.value);
  return (
    <div> 
      {!user?.name ?
      <button className={style.login}
        onClick={() => {
          dispatch(login({ name, age, email }));
        }}
      > 
           Login
      </button>
      :
      <button className={style.logout}
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>}
    </div>
  );
};
