import {
    REGISTER_REQUEST
} from './index';

interface Credential {
    email: string;
    password: string;
}

interface RegisterRequestAction {
    type: typeof REGISTER_REQUEST;
    payload: Credential;
}

export const registerRequest = (credential: Credential): RegisterRequestAction => ({
    type: REGISTER_REQUEST,
    payload: credential
});