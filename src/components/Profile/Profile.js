import { useSelector } from "react-redux";
import Class from "./Profile.module.css";

export const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return user?.name ? (
    <div className={Class.profile_block}>
      <div className={Class.user_details}>
        <p>Name : {user.name}</p>
        <p>age : {user.age}</p>
        <p>email : {user.email}</p>
      </div>
      <div className={Class.profilePic}>
        <img src="./images/default_profile_logo.png"></img>
      </div>
    </div>
  ) : (
    <div>
      <p>Login to see your profile.</p>
    </div>
  );
};
