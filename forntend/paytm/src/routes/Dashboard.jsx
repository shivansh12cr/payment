import { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from "../../component/Appbar";
import { Balance } from "../../component/Balance";
import Users from "../../component/User";

export default function Dashboard() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            setBalance(res.data.balance);
        }).catch(err => {
            console.error("Failed to fetch balance", err);
        });
    }, []);

    return (
        <div>
            <Appbar />
            <Balance value={balance.toFixed(0)} />
            <Users />
        </div>
    );
}
