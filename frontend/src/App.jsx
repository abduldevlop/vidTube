import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, SignIn, SignUp, Video } from "./pages";

import { NavBar } from "./components";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoID" element={<Video />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export default App;
