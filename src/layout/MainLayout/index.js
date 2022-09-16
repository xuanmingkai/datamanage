import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

import { actionTypes, drawerWidth } from "../../store/constant";

import { IconChevronRight } from "@tabler/icons";

import Breadcrumbs from "../../ui-component/extended/Breadcrumbs";
import navigation from "../../menu-items";
import Header from "./Header";
import Sidebar from "./Sidebar";
import IdleTimer from "../../services/timers/IdleTimer";
// eslint-disable-next-line no-unused-vars
import { userActions } from "../../services/user/UserActions";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
        marginRight: "10px",
      },
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    }),
  })
);

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));

  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const statusTimer = useSelector((state) => state.customization.statusTimer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [TimerUp, setTimerUp] = useState();

  const handleLeftDrawerToggle = () => {
    dispatch({ type: actionTypes.SET_MENU, opened: !leftDrawerOpened });
  };

  useEffect(() => {
    dispatch({ type: actionTypes.SET_MENU, opened: !matchDownMd });
  }, [matchDownMd]);

  useEffect(() => {
    if (statusTimer) {
      setTimerUp(true);
      dispatch({type: actionTypes.STATUS_TIMER, statusTimer: !statusTimer})
    }
  }, [statusTimer]);

  useEffect(() => {
    if (TimerUp) {
      setTimerUp(false);
      dispatch(userActions.logout);
      navigate("/");
    }
  }, [TimerUp]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IdleTimer />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        <Breadcrumbs
          separator={IconChevronRight}
          navigation={navigation}
          icon
          title
          rightAlign
        />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
