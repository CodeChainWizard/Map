import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login");
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
    console.log("Facebook login");
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="title">Login</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="social-login">
          <button
            type="button"
            className="google-login"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
          <button
            type="button"
            className="facebook-login"
            onClick={handleFacebookLogin}
          >
            Login with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
