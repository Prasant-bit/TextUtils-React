import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextArea from "./components/TextArea";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeCls = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  };

  const toggleMode = (cls) => {
    removeCls();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#5f5151";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Ok you are awesome";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <TextForm
              heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}

        {/* //   <div className="container my-3"> */}
        {/* //     {/* <TextArea heading="Enter you text" /> */}
      </Router>
    </>
  );
}

export default App;
