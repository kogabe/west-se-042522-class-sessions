import React from "react";
import UserCard from "./UserCard";

function UserList({users, handleUserClick}) {
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={handleUserClick}
          user={user}
        />
      ))}
    </div>
  );
}

export default UserList;
