
import { checkingCredentials, login, logout } from "./authSlice"
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singaInWithGoogle } from "../../firebase/provider"

export const checkingAuthentication =  ( email, password ) =>{
    return async(dispatch)=>{

        dispatch(checkingCredentials() );

    }
}

export const startGoogleSignIn = () =>{
    return async( dispatch ) =>{

        dispatch(checkingCredentials() );
        
        const result = await singaInWithGoogle();
        if ( !result.ok ) dispatch(logout( result.errorMessage ));
        
        dispatch( login( result ))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) =>{
    return async( dispatch )=>{

        dispatch( checkingCredentials() )

        const {ok, uid, photoUrl, errorMessage} = await  registerUserWithEmailPassword({email, password, displayName})
       
        if (!ok) return dispatch(logout({errorMessage}))

            dispatch(login({uid, displayName, email, photoUrl}));
        // console.log(resp);

    }   
}

export const startLoginWithEmailPassword = ({email, password}) =>{
    return async( dispatch ) => {

        dispatch(checkingCredentials())

        const result = await loginWithEmailPassword({email, password})
            console.log(result)

        if (!result.ok) return dispatch(logout( result ))
            dispatch(login(result))
    }
}

export const startLogout = () => {

    return async (dispatch) =>{

        
        await logoutFirebase()

        dispatch(logout({}));
    
    }

}