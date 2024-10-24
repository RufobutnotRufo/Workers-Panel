import "./globalStyles.css";
import Header from "./header/Header";
import Users from "./users/Users";
import { MyContextProvider } from "../src/useContext/Context";
import EditUsers from "./editUsers/EditUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/edit-users" element={<EditUsers />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
