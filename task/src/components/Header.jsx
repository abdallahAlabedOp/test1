import React, { useContext } from "react";
import { useHistory,Link } from "react-router-dom";
import { AppBar, Tabs, Tab, Toolbar, makeStyles } from "@material-ui/core";
import { UserContext } from "../contexats/UserContexts.jsx";

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
  const history = useHistory();
  const classes = useStyles();

  const handleTabChange = () => {
    logout(-1, "");
  };

  const logout = (id, name) => {
    userData.setUserId(id);
    userData.setUserName(name);
    userData.setIsLogedIn(!userData.isLogedIn);
    if (userData.isLogedIn) userData.setEmail("");
    history.push("/");
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {userData.isLogedIn ? (
          <>
            <Tab label={userData.userName} />
            <Tabs className={classes.tabContainer} onClick={handleTabChange}
              value={0}
            >
              <Tab
                data-testid="Logout"
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
