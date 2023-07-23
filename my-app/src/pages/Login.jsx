import "./loging.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password) {
      setIsError(true);
      return; // Sortir de la fonction si un champ est manquant
    }

    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((responseJson) => {
        return responseJson.json();
      })
      .then((responseJs) => {
        const jwt = responseJs.token;
        const userRole = responseJs.user.roles;

        localStorage.setItem("jwt", jwt);
        localStorage.setItem("userRole", userRole);
      })
      .then(() => {
        navigate("/stages");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cover">
        <div className="logingmock">
          <p className="logintitle">Login</p>
          <input className="userlog" type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />

          <div className="login-btn">
            <button className="btnloging">ENTER</button>
          </div>
        </div>
        {isError && <p className="error">Veuillez remplir tous les champs</p>}
      </div>
    </form>
  );
};

export default LoginForm;
