import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../main";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Avtar = ({ logoutHandler }) => {
  const { user } = useContext(UserContext);
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  function red(){
    document.getElementById('logout').style.backgroundColor="red";
  }
  function none(){
    document.getElementById("logout").style.backgroundColor=null;
  }
  return (
    <>
      <Avatar
        src={user.photo}
        id={"button"}
        aria-controls={open ? "menu" : undefined}
        aria-haspopup={"true"}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="menu"
        aria-labelledby="menu"
        anchorEl={anchorE1}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem>
          <Avatar src={user.photo} />
        </MenuItem>
        <MenuItem>{user.name}</MenuItem>
        <MenuItem
          id="logout"
          onMouseOver={red}
          onMouseOut={none}
          onClick={() => {
            handleClose();
            logoutHandler();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Avtar;
