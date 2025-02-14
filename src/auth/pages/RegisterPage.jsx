import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Box, Button,Grid2 as Grid,Link,TextField,Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email:"",
  password:"",
  displayName:""
}
const formValidations = {
  email: [(value)=> value.includes("@"), "El correo es incorrecto, debe contener @"],
  password: [(value)=> value.length >= 6, "El password debe de tener  más de 6 letras."],
  displayName: [(value)=> value.length >= 1, "El nombre es obligatorio"],
}
export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector( state => state.auth )
  const isCheckingAuthentication = useMemo(()=> status ==="checking", [status]);

  const { formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid 
  } = useForm(formData, formValidations);

  console.log(displayNameValid)
  const onSubmit =(event)=>{
    event.preventDefault();
    setFormSubmitted(true)

    if (!isFormValid) return;

    dispatch(  startCreatingUserWithEmailPassword( formState ) )
    
  }
  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn anime__faster" >
          <Grid container>
            <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Nombre"
                type="text"
                placeholder="Nombre Completo"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
                
              />
            </Grid>
            <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>

            <Grid item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={!!passwordValid && formSubmitted }
                helperText={passwordValid}
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
                <Grid item="true" size={{ xs: 10}}
                display={!! errorMessage ? "": "none"}>
                  <Alert severity="error">
                    {errorMessage}

                  </Alert>
                </Grid>
                <Grid item="true" size={{ xs: 10}}>
                  <Button
                  disabled={ isCheckingAuthentication }
                    type="submit"
                    variant="contained" 
                    fullWidth>
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
