import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoggedIn from "./pages/LoggedIn"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loggedin" element={<LoggedIn />} />
        </Routes>
    );
};

export default AppRouter;
