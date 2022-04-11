import * as React from 'react';
import { useState } from 'react';
import { getBasePath } from '../components/utils/pathHelper';

import {
  Container,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

const Login = () => {
  //Style
  const paperStyle = {
    padding: '30px 20px',
    maxWidth: '400px',
    margin: '20px auto',
  };

  // UseState
  const [state, setState] = useState({
    pswdVisibility: false,
  });
  const [redirect, setRedirect] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Functionality
  const handleClickShowPassword = () => {
    setState({
      ...state,
      pswdVisibility: !state.pswdVisibility,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //LogIn

  const submit = async (e) => {
    e.preventDefault();

    await axios.post(`${getBasePath()}/auth/login`, {
      username,
      password,
    });
    //setRedirect(true)
  };

  //Redirect
  /* if (redirect) {
    return <Navigate to={'/'} />;
  } */

  return (
    <Container style={{ height: '500px' }}>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LoginIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <form onSubmit={submit}>
          <TextField
            fullWidth
            label="Username"
            placeholder="Enter your username"
            margin="normal"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            fullWidth
            type={state.pswdVisibility ? 'text' : 'password'}
            label="Password"
            margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  edge="end"
                >
                  {state.pswdVisibility ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
