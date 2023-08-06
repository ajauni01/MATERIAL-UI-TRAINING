import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { grey } from '@mui/material/colors';
import { useState } from "react";


const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px', // Default gap for small screens
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // Default gap for small screens
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#5e6ad5" }}>
      <StyledToolBar>

        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>IncogniShare </Typography>
        <Diversity1Icon sx={{ display: { xs: "block", sm: "none" } }} />


        {/* SEARCH BAR */}
        <SearchBar>
          <InputBase
            placeholder="Search..." />
        </SearchBar>

        {/* ICONS START */}
        <Icons>
          {/* MAIL ICON BUTTON */}
          <IconButton sx={{ m: 0, p: 0, color: grey[50] }}>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          {/* NOTIFICATION ICON BUTTON */}
          <IconButton sx={{ m: 0, p: 0, color: grey[50] }}>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          {/* AVATAR ICON BUTTON */}
          <IconButton onClick={() => setOpen(true)} sx={{ m: 0, p: 0 }}>
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/11013334/pexels-photo-11013334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </IconButton>
        </Icons>
        {/* ICONS ENDS */}

        {/* ONLY SHOW THE AVATAR, AND USER NAME FOR THE EXTRA SMALL SCREEN */}
        <UserBox>
          <IconButton onClick={() => setOpen(true)} sx={{ m: 0, p: 0 }}>
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/17491661/pexels-photo-17491661/free-photo-of-blonde-woman-taking-pictures-with-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </IconButton>
          <Typography variant="span">User</Typography>
        </UserBox>
      </StyledToolBar>

      {/* MENU */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      {/* MENU ENDS */}


    </AppBar >

  );
};

export default NavBar;