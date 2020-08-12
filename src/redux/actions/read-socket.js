import { READ_SOCKET, SEND_MESSAGE } from "./types";
import WS from "../../socket";
const ws = new WS("ws://localhost:9090");

export function readSocket(payload) {
    return {
        type: READ_SOCKET,
        payload
    }
}


export function sendMessage(payload) {
    return {
        type: SEND_MESSAGE,
        payload
    }
}



export function sendDataToSocket(payload) {
    return dispatch => {
       ws.send(payload);
       ws.message((data) => {
           data = JSON.parse(data);
           dispatch(readSocket(data));
       })
    }
} 


export function readSocketData() {
    return dispatch => {
        ws.message((data) => {
            data= {
                send_from : "server",
                send_to : "all",
                message : data
            }
            dispatch(readSocket(data))
        })
    }
}