

export default function Name({lable,onchange}){
    return <div>
        <div className=' font-bold'>
            {lable}
        </div>
        <div className='pt-1 pl-1 pb-2'>
            <input onClick={onchange} className='border-1 border-solid pl-1 rounded-md w-full pt-1 pb-1' type="text" placeholder="Enter your data"></input>
        </div>
        
    </div>
}