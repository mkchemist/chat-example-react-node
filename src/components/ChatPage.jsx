import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { readSocketData, sendDataToSocket } from "../redux/actions/read-socket";

const ChatPage = (props) => {
    const [message, setMessage] = React.useState(null);
    React.useEffect(() => {
        props.dispatch(readSocketData());
    }, []);
    const sendMessage = () => {
        let data = {
            send_from : props.user[0],
            send_to : "All",
            message
        }
        props.dispatch(sendDataToSocket(data));
    }
    if(!props.user.length) {
        props.history.push("/registration");
    }
  return (
    <div>
      <div className="col-lg-10 col-11 mx-auto border rounded px-0 shadow">
        <div className="bg-info p-2">
            <Link to="/" className="text-decoration-none text-dark">
                <span><i className="fa fa-chevron-circle-left"></i></span>
            </Link>
            {props.user[0] && (
            <span className="float-right text-light">{props.user[0]}</span>
            )}
        </div>
        <div style={{ minHeight: 400, overFlow: "auto" }} className="bg-light p-2">
        {props.data.map((message, i) => {
              let _class = message.send_from === props.user[0] ? "message-reverse" : "message";
              let _sender = message.send_from === props.user[0] ? "you" : message.send_from;
              return (      
                <div className={_class} key={i}>
                    <span className="name">{_sender}</span>
                    <p className="body">
                        {message.message}
                    </p>
                </div>
              )
          })}
        </div>
        <div className="row mx-auto p-2 bg-light mt-2">
            <div className="col d-flex justify-content-center align-items-center">
            <textarea
                name=""
                id=""
                className="form-control form-control-sm"
                placeholder="write message"
                onKeyUp={(e) => setMessage(e.target.value)}
            ></textarea>
            </div>
          <div className="col-auto p-2 d-flex align-items-center justify-content-center">
            <button className="btn btn-sm btn-primary ml-2" onClick={sendMessage}>
              <span>
                <i className="fa fa-paper-plane"></i>
              </span>
              <span>send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ChatPage);
