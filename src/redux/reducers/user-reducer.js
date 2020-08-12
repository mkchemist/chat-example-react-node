import { ADD_USER } from "../actions/types";

/**
 * initial users container
 * 
 * @var {array}
 */
const users = [];


/**
 * User reducer
 * 
 * 
 * @param {array} state 
 * @param {object} action 
 */
export default function addUser (state = users, action) {
    switch(action.type) {
        case ADD_USER : 
            return [
                ...state,
                action.payload
            ];
        default :
            return state;
    }
}