import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Header from "../header";
import UserDetails from "../../pages/userDetails";
import UserContext from "../userContext";
import { IUser } from "../../utils/interface";

const Layout = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Layout;
