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

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form>
          <Grid container>
            <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Nombre"
                type="text"
                placeholder="Nombre Completo"
                fullWidth
              />
            </Grid>
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
              <Grid 
              container
              justifyContent="center" // Centrar horizontalmente
              alignItems="center" // Centrar verticalmente
               spacing={2} 
               sx={{ mt: 2, mb: 2 }}
               >
                <Grid item="true" size={{ xs: 10}}>
                  <Button variant="contained" fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta? </Typography>
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/login"
                >
                  Ingresar
                  
                </Link>
              </Grid>

            </Box>
          </Grid>
        </form>
    </AuthLayout>
  );
};
