import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const SideBar = ({ setMode, mode }) => {

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {/* HOME */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          {/* PAGES */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon>
                <StickyNote2Icon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          {/* GROUPS */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#group">
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          {/* MARKETPLACE */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketPlace">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          {/* FRIENDS */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friend">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          {/* SETTINGS */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          {/* PROFILE */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* DARK MODE OR LIGHT MODE ICONS AND SWITCH */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#switch">
              <ListItemIcon>
                {/* CHANGE THE LIGHT ICON TO DARK UPON SWITCHING MODES */}
                {
                  mode === "light" ? <WbSunnyIcon /> : < DarkModeIcon />
                }
              </ListItemIcon>
              {/* DARK OR LIGHT MODE SWITCHER */}
              <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default SideBar;