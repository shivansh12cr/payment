import { Heading } from "../../component/Heading";
import Name from "../../component/Name";
import Subheading from "../../component/Subheading";
import Button1 from "../../component/Button1";
import Footer from "../../component/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Signin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      nav("/dashboard"); // redirect
    }
  }, [nav]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-gray-100 p-5 rounded-md shadow-md w-xs">
        <Heading prop="SignIn" />
        <Subheading />
        <Name onchange={(e) => setusername(e.target.value)} lable={"Email"} />
        <Name onchange={(e) => setpassword(e.target.value)} lable={"Password"} />
        
        <Button1
          onClick={async () => {
            if (!username || !password) {
              alert("Please enter both username and password");
              return;
            }

            try {
              const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              });
              localStorage.setItem("token", res.data.token);
              nav("/dashboard");
            } catch (e) {
              alert(e.response?.data?.message || "Login failed");
              console.error("Signin error:", e);
            }
          }}
          data={"SignIn"}
        />

        <Footer data={"Don't have an account"} staus={"login"} to={"/signUp"} />
      </div>
    </div>
  );
}
