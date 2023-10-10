import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedin: true,
                userName: 'no_username'
            }
        case 'logOut':
            return {
                ...state,
                isLoggedin: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'changeUsername':
            return {
                ...state,
                userName: action.payload
            }

        default:
            return state
    }
}