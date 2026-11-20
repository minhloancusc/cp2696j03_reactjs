import User from "./User";
function UserList({ users }) {
  return (
    <div className="user-list-container">
      {users.map((usr,index) => (
        <User name={usr.name} pic={usr.pic} id={index} />
      ))}
    </div>
  );
}

export default UserList