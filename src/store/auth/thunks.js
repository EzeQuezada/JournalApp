
import { checkingCredentials, login } from "./authSlice"
import { singaInWithGoogle } from "../../firebase/provider"

export const checkingAuthentication =  ( email, password ) =>{
    return async(dispatch)=>{

        dispatch(checkingCredentials() );

    }
}

export const startGoogleSignIn = () =>{
    return async( dispatch ) =>{
        dispatch(checkingCredentials() );
        
        const result = await singaInWithGoogle();
        if(!result.ok) dispatch(logout( result.errorMessage ));
        
        dispatch( login( result ))
    }
}