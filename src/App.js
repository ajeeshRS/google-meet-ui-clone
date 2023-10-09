import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";
import Meeting from "./pages/meetingpage/Meeting";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meeting" element={<Meeting/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
