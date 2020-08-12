import { ADD_USER } from "./types";

/**
 * adding new user to chat
 * 
 * @param {string} payload  username
 */
export function addUser(payload) {
    return {
        type: ADD_USER,
        payload
    }
}

