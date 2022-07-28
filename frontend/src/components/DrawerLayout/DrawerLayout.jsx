import AccountCircle from "@mui/icons-material/AccountCircle";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LogoutIcon from "@mui/icons-material/Logout";
/* import InboxIcon from "@mui/icons-material/MoveToInbox"; */
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
/* import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Icon from '@mui/material/Icon'; */
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/fugger_logo.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerLayout({ children, currentTheme }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation(); // i18next

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuId = "primary-search-account-menu";
  const menuItems = [
    {
      title: t("menu-item-dashboard"),
      icon: <DashboardCustomizeOutlinedIcon />,
      path: "/analysis",
      disabled: false,
    },
    {
      title: t("menu-item-analysis"),
      icon: <AnalyticsOutlinedIcon />,
      path: "/analysis",
      disabled: false,
    },
    {
      title: t("menu-item-budgets"),
      icon: <PaidIcon />,
      path: "/budgets",
      disabled: false,
    },
    {
      title: t("menu-item-files"),
      icon: <UploadFileIcon />,
      path: "/files",
      disabled: false,
    },

    {
      title: t("menu-item-customers"),
      icon: <PeopleAltIcon />,
      path: "/analysis",
      disabled: true,
    },
    {
      title: t("menu-item-orders"),
      icon: <BorderColorOutlinedIcon />,
      path: "/analysis",
      disabled: true,
    },
    {
      title: t("menu-item-products"),
      icon: <Inventory2OutlinedIcon />,
      path: "/analysis",
      disabled: true,
    },
    {
      title: t("menu-item-invoices"),
      icon: <DescriptionOutlinedIcon />,
      path: "/analysis",
      disabled: true,
    },
  ];
  const menuItems2 = [
    {
      title: t("menu-item-settings"),
      icon: <SettingsIcon />,
      path: "/settings",
    },
    {
      title: t("menu-item-logout"),
      icon: <LogoutIcon />,
      path: "/logout",
    },
  ];

  const linkStyle = { textDecoration: "none", color: "#fff" };

  return (
    <Box
      sx={
        currentTheme === "themeDark"
          ? { display: "flex", backgroundColor: "#272727" }
          : { display: "flex", backgroundColor: "background.none" }
      }
    >
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "primary.contrast" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "primary.contrastText",
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            sx={{
              color: "primary.contrastText",
              ...(open && { display: "none" }),
            }}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Avatar src={Logo} />
            <Typography variant="h6" noWrap component="div">
              Fugger
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack justifyContent="center" />
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Link to="/profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ===== DRAWER ===== */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{ justifyContent: "center", backgroundColor: "primary.contrast" }}
        >
          {/* LOGO */}
          <Stack
            sx={{ pl: "40px" }}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Avatar src="src\assets\fugger_logo.svg" />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ margin: "auto", color: "primary.contrastText" }}
            >
              Fugger
            </Typography>
          </Stack>
          <IconButton sx={{ ml: "35px" }} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "primary.contrastText" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "primary.contrastText" }} />
            )}
          </IconButton>
        </DrawerHeader>

        {/* ================================================== DRAWER FIRST SECTION ================================================== */}
        <List sx={{ backgroundColor: "primary.main", py: 0 }}>
          {menuItems.map((element) => (
            <ListItem
              key={element.title}
              disablePadding
              sx={{ display: "block" }}
            >
              <Link
                style={linkStyle}
                to={element.path}
                onClick={
                  element.disabled ? (event) => event.preventDefault() : null
                }
              >
                <ListItemButton
                  sx={{
                    color: "primary.contrastText",
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    "&:hover": {
                      backgroundColor: "primary.contrast",
                    },
                  }}
                  disabled={element.disabled}
                >
                  <ListItemIcon
                    sx={{
                      color: "primary.contrastText",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {element.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={element.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }} />
        {/* ================================================== DRAWER  SECOND SECTION ================================================== */}
        <List sx={{ backgroundColor: "primary.main" }}>
          {menuItems2.map((element) => (
            <ListItem
              key={element.title}
              disablePadding
              sx={{ display: "block" }}
            >
              <Link style={linkStyle} to={element.path}>
                <ListItemButton
                  sx={{
                    color: "primary.contrastText",
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    "&:hover": {
                      backgroundColor: "primary.contrast",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "primary.contrastText",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {element.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={element.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* ===== PAGE CONTENT ===== */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
DrawerLayout.propTypes = {
  children: PropTypes.node.isRequired,
  currentTheme: PropTypes.node.isRequired,
};
