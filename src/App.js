import React from "react";
import "./App.css";

 import NavBar from "./components/NavBar/NavBar";

 import SignInSide from './components/signinslide'


function App() {
  return (
    <div className="App">
     
       <NavBar />
     
      <SignInSide/>
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "25%",
          left: "40%"
        }}
      >
      </div> 
      <div></div>
    </div>
  );
}

export default App;
