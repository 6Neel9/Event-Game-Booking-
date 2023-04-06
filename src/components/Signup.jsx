import React, { useState, useEffect } from "react";
import axios from "axios";


const Signup = () => {
  const [data, setData] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const onSubmit = (e) => {
    axios
      .post("http://localhost:3000/data", {
        name: data.name,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
      });
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
        <button onClick={onSubmit}>Sign Up</button>
      </div>
  );
};

export default Signup;
