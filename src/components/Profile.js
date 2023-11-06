import { useSelector } from "react-redux";

export const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <p>Name : {user.name}</p>
      <p>age : {user.age}</p>
      <p>email : {user.email}</p>
    </div>
  );
};
