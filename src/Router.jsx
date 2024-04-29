import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserPage from "./pages/UserPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<Home />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </>
  );
}
export default Router;
