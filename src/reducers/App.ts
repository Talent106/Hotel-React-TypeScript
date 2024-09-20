import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    ERROR_FOUND,
} from "../actions";

import { ActionTypes } from "@/actions/App";

interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}
  
const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action: ActionTypes): UserState {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case ERROR_FOUND:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}