import { useParams } from "react-router-dom";

function UserDetail({ users }) {
  const { id } = useParams();
  console.log(id);
  const user = users[id];
  return (
    <section className="user-detail-container">
      <img className="user-profile-pic" src={user.pic} alt={user.name} />
      <div>
        <h2 className="user-name">{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </section>
  );
}

export default UserDetail