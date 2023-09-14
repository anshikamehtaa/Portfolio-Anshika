import React  from "react"
import {Link} from "react-scroll"
import {AiOutlineArrowRight} from 'react-icons/ai'
import Anshika from "../assests/Anshika.jpeg"
const Home = () => {
  return (
   
    <div name="Home" 
    className="  w-full h-[100vh]   pt-12 sm:pt-0 block  sm:flex sm:justify-center sm:items-center     bg-gradient-to-b from-black via-black to-gray-600">
      
        <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center   px-4 md:flex-row">
            <div className="flex flex-col justify-center ">
                <h2 className="text-4xl sm:text-7xl mt-10 font-bold text-white">
                    I am a Software Engineer
                </h2>
                <p className="text-white py-4 max-w-md">
                Hi Everyone!
                I am Anshika Mehta an aspiring Software Developer pursuing B.Tech in Computer Science Engineering From Graphic Era Hill University Dehradun.
                </p>
                <div>
                    <Link to="Skills" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-300 to-teal-500 group text-2xl">
                       Skills 
                       <span className="group-hover:rotate-90  duration-300">
                       <AiOutlineArrowRight size={30} className="ml-1"/> 
                       </span>
                       
                    </Link>
                </div>
             </div> 

             <div>
              <img src={Anshika} alt="my profile"
              className="rounded-2xl ml-4    mr-40 w-[220px] md:w-[260px]   "/>  
             </div>

        </div>
        
    </div>
    
  );
};

export default Home
