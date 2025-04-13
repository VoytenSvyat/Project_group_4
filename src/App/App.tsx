import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="background" />
      <div className="image-side">
        <img src="/touch1.png" alt="Touch scene" className="scene-image" />
      </div>
      <div className="form-container">
        <form className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right-space" />
    </div>
  );
};

export default App;
