import React, { useContext, useEffect, useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../contexats/UserContexts.jsx";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1rem",
  },
}));

const Header = () => {
  const userData = useContext(UserContext);
  const navigate = useNavigate();
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const idx = ["/"].indexOf(window.location.pathname);
    if (tabIndex !== idx) {
      setTabIndex(idx);
    }
  }, [tabIndex]);

  const handleTabChange = () => {
    logout(-1, "");
  };

  const logout = (id, name) => {
    userData.setUserId(id);
    userData.setUserName(name);
    userData.setIsLogedIn(!userData.isLogedIn);
    if (userData.isLogedIn) userData.setEmail("");
    navigate("/");
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {userData.isLogedIn ? (
          <>
            <Tab label={userData.userName} />
            <Tabs
              className={classes.tabContainer}
              value={tabIndex}
              onClick={handleTabChange}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Logout"
              />
            </Tabs>
          </>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;