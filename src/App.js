import "./App.css";
import ApplyForm from "./component/ApplyForm";
import HeadEvent from "./component/HeadEvent";
import NavbarA from "./component/NavbarA";
import Alert from "./component/Alert";

import React, { useState } from "react";

// import { BrowserRouter as Router, Route } from "react-router-dom";

// const Home = lazy(() => import('./routes/ApplyForm'));

//   const About = lazy(() => import('./routes/HeadEvent'));

function App() {
  const [mode, newMode] = useState("dark");

  const [body, newBody] = useState("white");

  const [textColor, newTextColor] = useState("black");

  const toggleMode = () => {
    if (mode === "dark") {
      newTextColor("white");
      newMode("light");
      newBody("black");
      ShowAlert("Dark Mode Activated", "success");
      document.title = "Dark Mode";
    } else {
      newTextColor("black");
      newMode("dark");
      newBody("white");
      ShowAlert("Light Mode Activated", "success");
      document.title = "Light Mode";
    }
  };

  const [alert, setAlert] = useState();

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      t: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const myStyle = {
    backgroundColor: body,
  }
  return (
    <>
      

      <div style={myStyle}>
        <Alert alert={alert} />
        <NavbarA title="COOPeR" mode={mode} toggleMode={toggleMode} />
        <ApplyForm alertType={ShowAlert} textColor={textColor} />
        <HeadEvent />
      </div>

      
    </>
  );
}

export default App;
