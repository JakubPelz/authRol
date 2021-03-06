import * as React from 'react';
import { getBasePath } from '../components/utils/pathHelper';
import { Navigate } from 'react-router-dom';

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
import { UserContext } from '../components/context/UserContext';

const Login = () => {
  //Style
  const paperStyle = {
    padding: '30px 20px',
    maxWidth: '400px',
    margin: '20px auto',
  };

  // UseState
  const [state, setState] = React.useState({
    pswdVisibility: false,
  });
  const [redirect, setRedirect] = React.useState(false);
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { user, setUser } = React.useContext(UserContext);

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
    const response = await axios.post(`${getBasePath()}/auth/login`, {
      username,
      password,
    });
    console.log(response);
    //setRedirect(true);
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
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
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
      <div>
        <h1>User Display here</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </Container>
  );
};

export default Login;
