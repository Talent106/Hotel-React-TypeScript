import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    Response,
    ActionTypes,
    Credential,
} from './index';

export const registerRequest = (credential: Credential): ActionTypes => ({
    type: REGISTER_REQUEST,
    payload: credential
});

export const registerSuccess = (response: Response): ActionTypes => ({
    type: REGISTER_SUCCESS,
    payload: response
});

export const loginRequest = (credential: Credential): ActionTypes => ({
    type: LOGIN_REQUEST,
    payload: credential
});

export const loginSuccess = (response: Response): ActionTypes => ({
    type: LOGIN_SUCCESS,
    payload: response
});