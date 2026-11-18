import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  const userList = [
    {
      name: "Cuban",
      pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Spencer",
      pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Robert",
      pic: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2165950545-69600af8c9b0d.jpg?crop=0.670xw:1.00xh;0.134xw,0&resize=1120:*",
    },
    {
      name: "Einstein",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YL7IWSvSffFXEed6IsUDha2DDypFDtFPkWp7aQYvFoGTxf8p-wurFl_s&s=10",
    },
  ];
  return (
    <div className="App">
      {userList.map((item) => (
        <User name={item.name} pic={item.pic} />
      ))}
    </div>
  );
}

export default App;
