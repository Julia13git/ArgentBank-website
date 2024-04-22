import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//simport User from "./pages/SignIn";
import SignIn from "./pages/SignIn";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}
export default Router;
