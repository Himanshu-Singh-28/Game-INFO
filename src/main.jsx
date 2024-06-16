import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

export const API_KEY = "247040a5f9944bb29d72ac3598c4c296";

export const RapidHeaders = [
  {
    "X-RapidAPI-Key": "acd04e6207mshe9783c824d176adp1b0284jsn3cccb2ff75c0",
    "X-RapidAPI-Host": "steam-api7.p.rapidapi.com",
  },
  {
    "X-RapidAPI-Key": "0f4cc9d942mshb36fd39151b0382p10dfb1jsnd2b6ab366892",
    "X-RapidAPI-Host": "steam-api7.p.rapidapi.com",
  },
];

export const UserContext = createContext();

const Context = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();

  const val = { isAuth, setIsAuth, user, setUser };
  return (
    <UserContext.Provider value={val}>
      <App />
      <Toaster/>
    </UserContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Context/>
    </BrowserRouter>
);
