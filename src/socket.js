class Socket {
    constructor(url) {
        this.err = null;
        this.ws = this.init(url);
    }

    init(url) {
        try {
            return new WebSocket(url);
        }catch(e) {
            console.log(e)
            this.err = e.message;
        }
    }

    open(cb) {
        this.ws.onopen = () => {
            cb();
        }
    }

    message(cb) {
        if(this.err) {
            cb({err : true,  code : err});
        }
        this.ws.onmessage = (e) => {
            cb(e.data);
        }
    }

    send(data) {
        this.ws.send(JSON.stringify(data));
    }
}


export default Socket;