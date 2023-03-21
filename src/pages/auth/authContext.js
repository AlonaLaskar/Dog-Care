import React,{useContext} from 'react';
import {useEffect,useState} from 'react';
import {auth as firebaseAuth} from '../../firebase';

export const AuthContext = React.createContext({loggedIn: false});

export function userAuthContext(){
    return useContext(AuthContext);
}

export function useAuthInit(){
    const [authInit,setAuthInit] = useState({loading:true});
    useEffect(()=>{
        return firebaseAuth.onAuthStateChanged((firebaseUser)=>{
            const auth= firebaseUser ? {loggedIn:true,userId:firebaseUser.uid} : {loggedIn:false};
            setAuthInit({loading:false,auth });
        });
    },[]);
    return authInit;
}

