import {
    REGISTER_REQUEST,
    ActionTypes
} from "../actions";

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
        case REGISTER_REQUEST:
          return {
            ...state,
            loading: true,
          }
        default:
          return state
    }
}