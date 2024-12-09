import "./App.css";
import Profile from "./Components/Profile";

function App() {
  // let name = "Saif";
  // let names = ["Ines", "Louai", "Nour", "Jihen"];

  // let mycolor = "red";

  // const changeStyle = () => {
  //   mycolor = "blue";
  // };

  let userData = {
    userName: "Saif",
    age: "20",
    hobbies: ["VideoGames", "Football"],
  };

  return (
    <div>
      <Profile Data={userData} />
      {/* <h1 style={{ color: mycolor }}>Skills of the day</h1>

      <button onClick={changeStyle}>ChangeColor</button> */}
      {/* <p>Hello {name} </p>

      {names.map((el) => (
        <h3 key={el}> {el} </h3>
      ))} */}

      {/* <p>
        {first > 8
          ? "The number is bigger than 8"
          : "The number is lesser than 8"}
      </p> */}

      {/* <p style={mycolor == "Shinny" ? { color: "aqua" } : { color: "black" }}>
        Test changing color
      </p> */}
    </div>
  );
}

export default App;
