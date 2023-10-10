import React, { createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer'


// Definir la información que se usará
export interface AuthState {
    isLoggedin: boolean
    userName?: string
    favoriteIcon?: string
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedin: false,
    userName: undefined,
    favoriteIcon: undefined
}

// Especificar que exponer en el context
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void
    logOut: () => void
    changeFavIcon: (iconName: string) => void
    changeUsername: (iconName: string) => void
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({
            type: 'signIn'
        })
    }

    const logOut = () => {
        dispatch({
            type: 'logOut'
        })
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({
            type: 'changeFavIcon',
            payload: iconName
        })
    }

    const changeUsername = (newName: string) => {
        dispatch({
            type: 'changeUsername',
            payload: newName
        })
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logOut,
                changeFavIcon,
                changeUsername
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}