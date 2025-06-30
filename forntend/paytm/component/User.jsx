import { useState } from "react"
import Button1 from "./Button1"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default  function Users(){
    const [users,setUser] = useState([])
    const [filter,setfilter] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(res=>{
                setUser(res.data.user)
            })
    },[filter])

    return <div>
        <div className="font-bold text-lg mt-6 p-2">
            User
        </div>
        <div className="p-1">
            <input onChange={(e)=>{
                setfilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user = {user}/>)}
        </div>
    </div>
}

function User({user}){
    const nav = useNavigate();
    return  <div className="flex justify-between p-2">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center w-30 h-5 pr-2 ">
            <Button1 onClick={()=>{
                nav("/SendMoney?id="+user._id+"&name="+user.firstName)
            }} data={" Send Money "} />
        </div>
    </div>
}