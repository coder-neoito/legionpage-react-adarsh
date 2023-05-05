import "./styles.css";
import Activities from "./components/Activities";
import User from "./components/User";
import { Grid, Stack } from "@mui/material";
import { activities, userData } from "./data";
import Online from "./components/Online";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./routes/UserDetails";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={UserDetails} path="/:userName" />
    </Routes>
  );
}
