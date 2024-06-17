import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../main";
import { Auth, provider } from "../Auth/fireBase";
import Avtar from "../Avtar/Avtar";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth, user, setUser } = useContext(UserContext);

  const LoginHandler = () => {
    signInWithPopup(Auth, provider)
      .then(async ({ user }) => {
        setIsAuth(true);
        const data = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Login Successful");
      })
      .catch((err) => {
        console.log(err);
        setIsAuth(false);
      });
  };
  const LogoutHandler = () => {
    setIsAuth(false);
    setUser(null);
    toast.success("Logout Successfully");
    localStorage.removeItem("user");
  };
  return (
    <header>
      <div className="header-container">
        <nav className="flexSB">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center", gap: "10px",cursor:"pointer"}}
            onClick={()=>navigate("/")}
          >
            <img
              src="/Logo.jpg"
              style={{
                height: "50px",
                width: "50px",
                margin: 0,
                borderRadius: "40px",
                marginLeft: "10px",
                border: "solid,white,2px",
              }}
            />
            <p
              style={{
                fontFamily:
                  "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              }}
            >
              Game INFO
            </p>
          </div>
          <div className="userdata">
            <ul className="flexSB listItem">
              <li>
                <IconButton onClick={() => navigate("/search")}>
                  <Search sx={{ color: "white" }} className="search" />
                </IconButton>
              </li>
              <li
                onClick={() => navigate("/")}
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                    fontSize:"20px"
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  window.open("mailto:himanshusingh@gmail.com");
                }}
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontSize:"20px"
                }}
              >
                Contact Us
              </li>
            </ul>
            {!isAuth && (
              <button onClick={LoginHandler} className="joinbutton">
                Login Now
              </button>
            )}
            {isAuth && (
              <div
                className="joinbutton"
                style={{ margin: "10px", cursor: "pointer" }}
              >
                <Avtar logoutHandler={LogoutHandler} />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
