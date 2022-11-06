import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/users/action";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userState, setUserState] = useState("");
  return (
      <div>
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
      <input value={userState} onChange={(e) => setUserState(e.target.value)} />
      <button onClick={() => dispatch(addUser(userState))}>add user</button>
    </div>
  );
};

export default Users;
