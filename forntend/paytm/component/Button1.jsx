import { Button } from "@material-tailwind/react";

export default function Button1({data,onClick}){
    return <div >
        <div className="text-center pt-1">
            <Button onClick={onClick} className=" bg-black h-7 text-xs w-full rounded-2xl  self-center text-white cursor-pointer ">{data}</Button>
        </div>
        
    </div>
}