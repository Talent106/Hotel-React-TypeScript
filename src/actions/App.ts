import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    Response,
    ERROR_FOUND,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
} from './index';

export interface Credential {
    email: string;
    password: string;
}

export interface GetDataRequestAction {
    type: typeof GET_DATA_REQUEST;
}

export interface GetDataSuccessAction {
    type: typeof GET_DATA_SUCCESS;
    response: Response;
}

export interface RegisterRequestAction {
    type: typeof REGISTER_REQUEST;
    payload: Credential;
}

export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    response: Response;
}

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: Credential;
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    response: Response;
}

export interface ErrorFoundAction {
    type: typeof ERROR_FOUND,
    response: Response;
}

export const getDataRequest = (): GetDataRequestAction => ({
    type: GET_DATA_REQUEST
});

export const getDataSuccess = (response: Response): GetDataSuccessAction => ({
    type: GET_DATA_SUCCESS,
    response
});

export const registerRequest = (credential: Credential): RegisterRequestAction => ({
    type: REGISTER_REQUEST,
    payload: credential
});

export const registerSuccess = (response: Response): RegisterSuccessAction => ({
    type: REGISTER_SUCCESS,
    response
});

export const loginRequest = (credential: Credential): LoginRequestAction => ({
    type: LOGIN_REQUEST,
    payload: credential
});

export const loginSuccess = (response: Response): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    response
});

export const errorFound = (response: Response): ErrorFoundAction => ({
    type: ERROR_FOUND,
    response
});

export type ActionTypes =
| GetDataRequestAction
| GetDataSuccessAction
| RegisterRequestAction
| RegisterSuccessAction
| LoginRequestAction
| LoginSuccessAction
| ErrorFoundAction