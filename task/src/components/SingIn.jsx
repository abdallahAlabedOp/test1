import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { UserContext } from "../contexats/UserContexts.jsx";
const axios = require("axios");
const theme = createTheme();
export default function Login() {
  const userData = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    userData.setEmail(event.target.value);
  };

  const userInfo = (id, name) => {
    userData.setUserId(id);
    userData.setUserName(name);
    userData.setIsLogedIn(!userData.isLogedIn);
    if (userData.isLogedIn) userData.setEmail("");
    navigate('/home');

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
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={go}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    </>
  );
}
