import { useNavigate } from "react-router-dom";

function User({name,pic,id}) {
  const navigate = useNavigate();
//   const name = "Mark";
//pic = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <section onClick={() => navigate(`/users/${id}`)} className="user-container"> 
      <img className="user-profile-pic" src={pic} alt={name} />
      <h2 className="user-name">
        Hello, <span className="user-first-name">{name}</span> 🎉🔥
      </h2>
    </section>
  );
}

export default User;