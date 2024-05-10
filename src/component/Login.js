import React, { useState } from "react";
import { PiUserSquareThin } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import '../App.css'


const ShadowBox = ({ children }) => {
  return (
    <div style={{
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      borderRadius: "8px",
      width: "600px",
      justifyContent: "center",
      marginTop: 30,
      alignItems: "center",
      marginBottom: 30,
      height: "600px",
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmailValidation = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSignin = (email) => {
    if (checkEmailValidation(email)) {
      console.error("Invalid Email")
    }

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, 
      })
    })
      .then(res => res.json())
      .then(console.log);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden" }}>
        <ShadowBox>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
            <PiUserSquareThin size={90} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
            <AiOutlineMail size={30} style={{ verticalAlign: "middle", margincenter: "5px" }} />
            <form style={{ display: "flex", alignItems: "center" }}>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  border: "none",
                  borderBottom: "2px solid black",
                  outline: "none",
                  width: "400px",
                }}
              />
            </form>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
            <RiLockPasswordLine size={30} style={{ verticalAlign: "middle", margincenter: "5px" }} />
            <form style={{ display: "flex", alignItems: "center" }}>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                style={{
                  border: "none",
                  borderBottom: "2px solid black",
                  outline: "none",
                  width: "400px",
                  padding: "5px",
                }}
              />
            </form>
          </div>
          <button onClick={handleSignin} size={70} style={{ width: "200px", height: "50px", margin: "auto", marginTop: "20px", backgroundColor: "black", color: "white", display: "block" }}>
            SignIn
          </button>
        </ShadowBox>
        <img src="w.jpg" alt="no" style={{ width: "900px", height: "650px", overflow: "hidden" }} />
      </div>
    </>
  );
};

export default Login;
