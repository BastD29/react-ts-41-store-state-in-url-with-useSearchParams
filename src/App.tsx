import { Route, Routes } from "react-router-dom";

import Store from "./components/Store2";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}
