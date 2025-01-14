import { Google } from "@mui/icons-material";
import { Router, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Grid2 as Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPages = () => {
  return (
    <AuthLayout title="Login">
      <form>
          <Grid container>
            <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
              />
            </Grid>

            <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>

                <Grid item="true" size={{ xs: 4, md: 6 }}>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>

                <Grid item="true" size={{ xs: 4, md: 6 }}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear cuenta
                </Link>
              </Grid>

            </Box>
          </Grid>
        </form>
    </AuthLayout>
  );
};
