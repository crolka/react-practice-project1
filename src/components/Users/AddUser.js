import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ModalOverlay from "../UI/ModalOverlay";

import styles from "./AddUser.module.css";


const AddUser = (props) => {
  const [usernameData, setUsername] = useState("");
  const [ageData, setAge] = useState("");
  const [errorState, setErrorState] = useState(); // make the initial state undefined

  const showOverlay = (message, title) => {
    return (<ModalOverlay contentText={message} headerText={title} onConfirm={errorHandler} ></ModalOverlay>);
  };

  const errorHandler = () => {
    setErrorState(null);
  };

  const formSubmitHandler = (eventObj) => {
    eventObj.preventDefault();
    if (usernameData.trim().length === 0) {
      setErrorState({
        contentText: "Username is Required",
        headerText: "Invalid Username Input",
      });
      return;
    }

    if (ageData.trim().length === 0) {
      setErrorState({
        contentText: "Age is Required",
        headerText: "Invalid Age Input",
      });
      return;
    }

    if (+ageData < 1) {
      setErrorState({
        contentText: "Age must be greater than 0",
        headerText: "Invalid Age Input",
      });
      return;
    }

    let rnum = Math.random() * 100;
    let rnum2 = Math.random() * 100;

    const userObject = {
      id: Math.round(rnum + rnum2).toString(),
      username: usernameData,
      age: +ageData,
    };

    props.onSaveUser(userObject);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (eventObj) => {
    setUsername(eventObj.target.value);
  };

  const ageChangeHandler = (eventObj) => {
    setAge(eventObj.target.value);
  };
  return (
    <div>
      {errorState && showOverlay(errorState.contentText, errorState.headerText)}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              name="username"
              value={usernameData}
              onChange={usernameChangeHandler}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              name="age"
              type="number"
              value={ageData}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
