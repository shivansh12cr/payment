import { Heading } from "../../component/Heading";
import Name from "../../component/Name";
import Subheading from "../../component/Subheading";
import Button1 from "../../component/Button1";
import Footer from "../../component/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export  default function Signup (){
    const [firstName,setfirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const nav = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          nav("/dashboard"); 
        }
      }, [nav]);

    return <div className='h-screen flex items-center justify-center bg-gray-400'>
        <div className="bg-gray-100 p-6 rounded-md shadow-md w-xs ">
            <Heading prop="SignUp"/>
            <Subheading/>
            <Name  onchange={(e)=>{
                setfirstName(e.target.value);
            }} lable={"First Name"}/>
            <Name onchange={(e)=>{
                setLastName(e.target.value);
                }}
                 lable={"Last Name"}/>
            <Name onchange={(e)=>{
                setusername(e.target.value);
                }} lable={"Email"}/>
            <Name onchange={(e)=>{
                setpassword(e.target.value);
                }} lable={"Password"}/>
            <Button1  onClick={async () => {
                if (!username || !firstName || !lastName || !password) {
                    alert("Please fill in all fields");
                    return;
                }

                try {
                const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    firstName,
                    lastName,
                    password,
                });

                localStorage.setItem("token", res.data.token);
                nav("/dashboard");
                } catch (err) {
                alert(err.response?.data?.message || "Signup failed");
                console.error(err);
                }
            }} data={"SignUp"}/>
            <Footer data={"Already have an account"} staus={"login"} to={"/signin"}/>
        </div>
       
    </div>
}