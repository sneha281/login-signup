import "./App.css";
import Sign from "./components/Sign/Sign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/sign"
            element={
              <div className="App">
                <Sign />
              </div>
            }
          />
         <Route
            path="/login"
            element={
              <div className="App">
                <Login />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
