import { Link } from "react-router-dom"
const Footer = ({data,staus,to}) => {
  return (
    <div className='font-serif text-sm flex justify-center-safe pt-2'>
     {data}? <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {staus}
      </Link>
    </div>
  );
};

export default Footer;