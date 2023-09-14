import React, { useState } from "react";
import { RiFileAddFill } from "react-icons/ri";
import { Link } from "react-scroll";
const NavBar = () => {

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
      value: "/",
    },
    {
      id: 2,
      link: "About",
      value: "/about",
    },
    {
      id: 3,
      link:"Projects" ,
      value: "/projects",
    },
    {
      id: 4,
      link: "Skills",
      value: "/skills",
    },
    {
      id: 5,
      link: "Contact",
      value: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed px-4 bg-black">
      <div>
        <h1 className="text-3xl font-signature">Anshika Mehta</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id, value }) => (
          <li
            key={id}
            className="px-5 cursor-pointer text-gray-100 hover:scale-110 duration-300"
          >
            
            <Link to={link} smooth duration={500}>{link}</Link>
            
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor:pointer p-3 hover:scale-120 md:hidden"
      >
        {nav ? <RiFileAddFill size={30} /> : <RiFileAddFill size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0
          left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-300"
        >
          {links.map(({ link, id, value }) => (
            <li key={id} className="px-5 cursor-pointer py-10 text-4xl">
              
                <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
     
    </div>
     
  );
};

export default NavBar;