import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/user-actions";

const RegistrationPage = (props) => {
    const [user, setUser] = React.useState(null);
    let addNewUser = () => {
        props.dispatch(addUser(user));
        props.history.push("/chat")
    }
  return (
    <div>
      <div className="p-2">
        <Link to="/" className="btn btn-sm btn-dark">
            <span><i className="fa fa-chevron-circle-left"></i></span>
        </Link>
      </div>
      <h2>Registration Page</h2>
      <div className="my-3">
        <div className="form-group row mx-auto">
          <input
            type="text"
            className="form-control form-control-sm"
            name="name"
            id="name"
            placeholder="Enter name"
            onKeyUp={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group float-right">
            {props.user.length ? (
                <Link to="/chat" className="btn btn-sm btn-primary mx-2">Go to chat room</Link>
            ) : null}
            <button className="btn btn-sm btn-success" onClick={addNewUser}>
                <span><i className="fa fa-door-open"></i></span>
                <span>Enter</span>
            </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default  connect(mapStateToProps)(RegistrationPage);
