import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center">React and Web Socket Chat application</h1>
      <div className="text-center">
          <p>
              This application is a simple example of using react with websocket library to build simple chat application
          </p>
        <Link to="/registration" className="btn btn-primary">
          Enter Chat Room
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
