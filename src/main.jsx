import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

export const API_KEY = import.meta.env.VITE_API_KEY;

export const RapidHeaders = [
  {
    "X-RapidAPI-Key": import.meta.VITE_API_KEY_RAPID_1,
    "X-RapidAPI-Host": "steam-api7.p.rapidapi.com",
  },
  {
    "X-RapidAPI-Key": import.meta.VITE_API_KEY_RAPID_2,
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
