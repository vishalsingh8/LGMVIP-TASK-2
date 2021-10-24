import React from "react";
import Cards from "./user";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="maincontainer">
      
        <div class="nav" id="nav">
        <h4 class="logo">VInfotech</h4>
          <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
        </div>

        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
              ) : (
              <div className="img"> 
              <img src={require("./image/image1.jpg" ).default} width="1600px" height="600px"></img>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
