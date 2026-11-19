import User from "./User";
function UserList({ users }) {
  return (
    <div className="user-list-container">
      {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}

export default UserList