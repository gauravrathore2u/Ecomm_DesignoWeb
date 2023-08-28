import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from 'react-redux';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const count = useSelector((state)=>state.counter.count);
  const user = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onLogin = ()=>{
    navigate('/login')
    handleClose();
  }
  const onAdmin = ()=>{
    navigate('/admin');
    handleClose();
  }
  const onLogout = ()=>{
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <div className="bg-green-200">
      <div className="md:flex md:justify-between md:p-4 text-2xl">
        <div id="left" className="cursor-pointer">
          <p>E-Commerce_DesignoWeb</p>
        </div>
        <div id="right" className="flex gap-5 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={'/cart'} className="flex items-center">
          <AiOutlineShoppingCart className="cursor-pointer" />
          <p>{count}</p>
          </Link>
          <CgProfile onClick={handleClick} className="cursor-pointer" />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {user.isAdmin && <MenuItem onClick={onAdmin}>Admin Dashboard</MenuItem>}
            
            {token ? <MenuItem onClick={onLogout}>Logout</MenuItem> 
              :
              <MenuItem onClick={onLogin}>Login</MenuItem>}
           
            
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
