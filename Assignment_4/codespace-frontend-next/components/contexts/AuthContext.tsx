"use client"
import { fetchWithAuth } from "@/app/utils/api/api";
import {  AuthState, User } from "@/app/utils/interface/user";
import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";

type AuthAction =
  | { type: "LOGIN"; payload: { user: User; token: string } }
  | { type: "LOGOUT" }
  | { type: "SET_USER"; payload: User }
  | { type: "SET_TOKEN"; payload: string }
  | {type:"NOT_AUTHORISED"};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isAuthorised:true,
};

const authReducer =(state:AuthState,action:AuthAction):AuthState =>
{
    switch(action.type)
    {
        case "LOGIN":
          console.log("Logged IN");
            return {
              ...state,
                user:action.payload.user,
                token:action.payload.token,
                isAuthenticated:true,
            };
        case "LOGOUT":
            return {
              ...state,
                user:null,
                token:null,
                isAuthenticated:false
            };
        case "SET_USER":
            return {
                ...state,
                user:action.payload,
                isAuthenticated:!!action.payload
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.payload
            }
        case "NOT_AUTHORISED":
          return {
            ...state,
            isAuthorised:false,
          }
        default:
            return state;
    }
}
const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
  } | undefined>(undefined);
  
export default function AuthProvider({children}:{children:ReactNode})
{
    const [state,dispatch]=useReducer(authReducer,initialState);
    const checkAuth=async ()=>{
        try {
            const token = document.cookie.match(/authToken=([^;]+)/)?.[1];
            if (!token) return;
      
            const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`, {}, token);
      
            if (res.ok) {
              const user = await res.json();
              dispatch({ type: "LOGIN", payload: { user, token } });
            } else {
              dispatch({ type: "LOGOUT" });
            }
          } catch (error) {
            console.error("Error checking auth:", error);
            dispatch({ type: "LOGOUT" });
          }
    }
    useEffect(()=>{
        let isMounted=true;
        checkAuth();
        return ()=>{ isMounted=false;}
    },[]);
    return <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  