import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    Response,
    ERROR_FOUND,
} from './index';

export interface Credential {
    email: string;
    password: string;
}

export interface RegisterRequestAction {
    type: typeof REGISTER_REQUEST;
    payload: Credential;
}

export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: Response;
}

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: Credential;
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: Response;
}

export interface ErrorFoundAction {
    type: typeof ERROR_FOUND,
    payload: Response
}

export const registerRequest = (credential: Credential): RegisterRequestAction => ({
    type: REGISTER_REQUEST,
    payload: credential
});

export const registerSuccess = (response: Response): RegisterSuccessAction => ({
    type: REGISTER_SUCCESS,
    payload: response
});

export const loginRequest = (credential: Credential): LoginRequestAction => ({
    type: LOGIN_REQUEST,
    payload: credential
});

export const loginSuccess = (response: Response): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    payload: response
});

export const errorFound = (response: Response): ErrorFoundAction => ({
    type: ERROR_FOUND,
    payload: response
});

export type ActionTypes =
| RegisterRequestAction
| RegisterSuccessAction
| LoginRequestAction
| LoginSuccessAction
| ErrorFoundAction