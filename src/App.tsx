import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/protectedRourtes";
import LandingPage from "./pages/landing";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="/update-password" element={<UpdatePassword />} /> */}
      {/* <Route element={<ProtectedRoute />}>
      <Route index element={<Overview />} />
      <Route path="overview" element={<Overview />} />
      </Route> */}
    </Routes>
  );
}

export default App;
