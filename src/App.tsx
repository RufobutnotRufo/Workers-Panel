import "./globalStyles.css";
import Header from "./header/Header";
import EditUsers from "./editUsers/EditUsers";
import Users from "./users/Users";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <EditUsers />
      <Users />
    </>
  );
}

export default App;
