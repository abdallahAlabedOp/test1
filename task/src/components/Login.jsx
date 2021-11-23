import React, { useHistory,useContext } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Home from "./Post";
import { UserContext } from "../contexats/UserContexts.jsx";

const axios = require("axios");

function Login() {
  const userData = useContext(UserContext);
  const history = useHistory();
  const handleChange = (event) => {
    userData.setEmail(event.target.value);
  };

  const userInfo = (id, name) => {
    userData.setUserId(id);
    userData.setUserName(name);
    userData.setIsLogedIn(!userData.isLogedIn);
    if (userData.isLogedIn) userData.setEmail("");
    history.push("/home");

  };

  const go = () => {
    const api = "https://jsonplaceholder.typicode.com/users";
    if (!userData.isLogedIn)
      axios
        .get(api)
        .then(function (response) {
          const obj = response.data.filter((user) => {
            if (user.email === userData.email) {
              return user;
            }
            return false;
          });
          userInfo(obj[0].id, obj[0].username);
        })
        .catch(function (error) {});
  };

  return (
    <>
      {userData.isLogedIn &&
      userData.userId !== -1 &&
      userData.userName !== "" ? (
        <div>
          <Button
            key="1"
            variant="contained"
            onClick={() => {
              userData.setIsLogedIn(!userData.isLogedIn);
              userInfo(-1, "");
            }}
          >
            Logout
          </Button>
          <Home />
        </div>
      ) : (
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
          <Button variant="contained" key="2" endIcon={<SendIcon />} onClick={go}>
            Send
          </Button>
        </FormControl>
      )}
    </>
  );
}
export default Login;