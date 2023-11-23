import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from "../../../database/config";
import { checkingCredentials, register, logout } from "./authSlice";


export const registerAuth = (email, password) => {
    return async (dispatch) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if (response){
            await updateProfile(auth.currentUser, {
                displayName: 'Jose',
                photoURL: ""
            })
            const {email} = response.user
            dispatch( register({email}) )
        }else{
            throw new Error('login failed')
        }
    }
}

export const loginAuth = (email, password) => {
    return async (dispatch) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        if (response){
            await updateProfile(auth.currentUser, {
                displayName: '',
                photoURL: ""
            })
            const success = true;
            const {email} = response.user
            dispatch( checkingCredentials({email, success}) )
        }else{
            throw new Error('login failed')
        }
    }
}

export const logOut = () => {
    return async (dispatch) => {
        const response = await signOut(auth)
        if (response){
            await updateProfile(auth.currentUser, {
                displayName: 'Jose',
                photoURL: ""
            })
            dispatch(logout())
        }else{
            throw new Error('login failed')
        }
    }
}