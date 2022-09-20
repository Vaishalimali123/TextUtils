// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState();

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#062844";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        {/* <Navbar title = "TextUtils"  aboutText = "About TextUtils" /> */}

        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About"
        />
        <Alert alert={alert} />
         {/* <Link to="/about"></Link> */}

        <div className="container" my="2">
          {/* <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text you want to analyse "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route> */}

            {/* <Route */}
              {/* path="/home" */}
              {/* element={ */}
                <TextForm
                  heading="Enter the text you want to analyse "
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* } */}
            {/* ></Route>  */}

            {/* <Route path="/about" element={<About />} />
           </Routes>  */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
