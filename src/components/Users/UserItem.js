import React from "react";


const UserList = (props) => {
  return (
    <li>
      <p>{props.usernameInput} ({props.ageInput} years old)</p>
    </li>
  );
};

export default UserList;
