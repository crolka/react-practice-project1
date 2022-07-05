import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const STARTER_DATA = [
  {id: 'ex1', username: 'Christine', age: 32},
  {id: 'ex2', username: 'Sal', age: 33}
];
function App() {
  const [usersData, setUsers] = useState(STARTER_DATA);

  const addUserHandler = (userObject) => {
    setUsers(
      (prevUsers) => {
        return [userObject, ...prevUsers];
      }
    );
  };

  return (
    <div>
      <AddUser onSaveUser={addUserHandler} />
      <UserList users={usersData} />
    </div>
  );
}

export default App;
