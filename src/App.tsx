import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/sidebar/Layout";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Codes from "./pages/code/Codes";
import AddCodesComponent from "./layout/code/AddCodesComponent";
import EditCode from "./layout/code/EditCode";
import ViewItem from "./layout/code/ViewItem";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/codes" element={<Codes />} />
          <Route path="/add-code" element={<AddCodesComponent />} />
          <Route path="/edit-code" element={<EditCode />} />
          <Route path="/view-code" element={<ViewItem />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
