import React, { useContext } from "react";
import "./userDetail.css";
import { useParams } from "react-router";
import UserContext from "../userContext";

const UserDetailsComponent = () => {
  const { userId } = useParams();

  const { users } = useContext(UserContext);

  const user = users?.find((user) => user.id === Number(userId));

  return (
    <div className="userDetails-container">
      <h1 className="userDetails-title">Users Details</h1>
      <div className="userDetails-box">
        <p>ID: {user?.id}</p>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
