import {
    FETCH_DATA_STARTED,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
} from "../actions/actionTypes";

const DefaultState = {
    data: [],
    loading: false,
    error: null,
};

const dataReducers = (state = DefaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_STARTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload.data,
            };
        default:
            return state;
    }
};

export default dataReducers;
