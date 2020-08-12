import { READ_SOCKET } from "../actions/types";

let data = [];

export default function (state = data, action) {
    switch(action.type) {
        case READ_SOCKET:
            return [
                ...state,
                action.payload
            ]
        default :
            return state;
    }
}