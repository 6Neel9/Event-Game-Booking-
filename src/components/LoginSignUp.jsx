import Login from "./Login";
import { useState } from "react";
import Signup from "./Signup";

const LoginSignUp = () => {
    const [show,setShow] = useState(false)
    const handleShow=()=>{
        setShow(false)
    }
    const handleNotShow = ()=>{
        setShow(true)
    }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="outerLog">
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
          <h2 className="show" onClick={handleShow}>Log In</h2>
          <h2 className="show" onClick={handleNotShow}>Sign Up</h2>
        </div>
        {!show?<Login/>:<Signup/>}
      </div>
    </div>
  );
};

export default LoginSignUp;
