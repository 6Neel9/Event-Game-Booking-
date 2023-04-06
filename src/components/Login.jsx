import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {data as datas} from '/db.json'


const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", password: "" });
  const [show,setShow] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const onSubmits = (e) => {
    e.preventDefault()
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].name === data.name && datas[i].password === data.password) {
          setShow(false)
          navigate("./Home");
        }else{
          setShow(true)
        }
      }
      setData({ name: "", password: "" })

  };

  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          justifyContent: "space-between",
        }}
      >
        {show&&<h3 style={{color:"red"}}>Check your name or password again</h3>}
        <input
          onChange={(e) => handleChange(e)}
          name="name"
          value={data.name}
          type="text"
          placeholder="Name"
          required
        />
        <input
          onChange={(e) => handleChange(e)}
          name="password"
          value={data.password}
          type="password"
          placeholder="Password"
          required
        />
        <button onClick={onSubmits}>Submit</button>
      </div>
  );
};

export default Login;
