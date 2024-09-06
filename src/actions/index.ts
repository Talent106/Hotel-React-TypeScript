//Auth
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ERROR_FOUND = 'ERROR_FOUND';

export interface Credential {
    email: string;
    password: string;
}

export interface Response {
    type: any;
    success: boolean;
    message: string;
    data: any[];
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

export type ActionTypes =
| RegisterRequestAction
| RegisterSuccessAction
| LoginRequestAction
| LoginSuccessAction
| ErrorFoundAction;