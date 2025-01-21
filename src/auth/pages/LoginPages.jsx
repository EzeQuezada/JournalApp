import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {Box,Button,Grid2 as Grid,Link,TextField,Typography,} from "@mui/material";
import { Google} from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { singaInWithGoogle } from "../../firebase/provider";

export const LoginPages = () => {


  const {status} = useSelector( state=> state.auth )

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "ezeq15@gmail.com",
    password: "1234455",
  });

  const isAuthenticating = useMemo( ()=> status === "checking", [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
              <Grid item="true" size={{ xs: 4, md: 6 }}>
                <Button 
                type="submit" 
                variant="contained" 
                disabled={isAuthenticating}
                fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item="true" size={{ xs: 4, md: 6 }}>
                <Button 
                disabled={isAuthenticating}
                onClick={onGoogleSignIn} 
                variant="contained" 
                fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear cuenta
              </Link>
            </Grid>
          </Box>
        </Grid>
      </form>
    </AuthLayout>
  );
};
