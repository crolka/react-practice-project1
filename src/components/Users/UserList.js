import React from "react";

import Card from "../UI/Card";
import UserItem from "./UserItem";

import styles from "./UserList.module.css";

const UserList = (props) => {
  const userListItems = props.users;

  if (userListItems.length === 0) {
    return <h2 className={styles.users__fallback}>No Users Found.</h2>;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {userListItems.map((user) => (
          <UserItem
            key={user.id}
            usernameInput={user.username}
            ageInput={user.age}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
