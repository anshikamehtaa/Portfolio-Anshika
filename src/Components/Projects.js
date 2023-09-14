import React from "react"
const Projects = () => {
    const projects=[
        {
            id:1,
            src:"https://neelbhatt40.files.wordpress.com/2017/11/int3.jpg?w=1100"
        },
        {
            id:2,
            src:"https://media.istockphoto.com/id/966248982/photo/robot-with-education-hud.jpg?s=612x612&w=0&k=20&c=9eoZYRXNZsuU3edU87PksxN4Us-c9rB6IR7U_IGZ-U8="
        },
        {
            id:3,
            src:"https://analyticsdrift.com/wp-content/uploads/2023/01/top-deep-learning-frameworks.jpg"
        },
    ];
  return (
   
    <div name="Projects" className="  h-[130vh] sm:h-[100vh] flex justify-center items-center  bg-gradient-to-b  from-black to-gray-800 w-full text-white  ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full   ">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
             Projects   
            </p>
            <p className="py-6">
                Check out my work here
            </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            projects.map(({id,src})=>(
           
           
           <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
           <img src={src} alt="project" className="rounded-md duration-200 hover-scale-110"/>
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-110">Demo</button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">Code</button> */}
            </div>
            </div>
                ))
        }
        </div>
        
      </div>
    </div>
   
  )
}

export default Projects
