import React from "react"
import Cpp from "../assests/Cpp.png"
import css from "../assests/css.png"
import github from "../assests/github.png"
import html from "../assests/html.png"
import Ml from "../assests/Ml.jpg"
import sqlimg from "../assests/sqlimg.jpg"
import reacte from "../assests/reacte.png"
import tailwindd from "../assests/tailwindd.png"
import Mond from "../assests/Mond.png"
const Skills = () => {
    const skills=[
        {
            id:1,
            src:Cpp,
            title:'C++',
            style: 'shadow-sky-400'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style: 'shadow-sky-400'
        },
        {
            id:3,
            src:tailwindd,
            title:'Tailwind',
            style: 'shadow-blue-400'
        },
        {
            id:4,
            src:html,
            title:'HTML',
            style:'shadow-orange-400'

        },
        {
            
            id:5,
            src:reacte,
            title:'React',
            style: 'shadow-blue-600'
        },
        {
            id:6,
            src:Ml,
            title:'Machine Learning',
            style: 'shadow-blue-400'
        },
        {
            id:7,
            src:sqlimg,
            title:'SQL',
            style: 'shadow-blue-400'
        },
        {
            
            id:8,
            src:github,
            title:'GitHub',
            style: 'shadow-white'
        },
        {
            
            id:9,
            src:Mond,
            title:'MongoDB',
            style: 'shadow-green-600'
        }
        
    ]
  return (
   
   
    <div name="Skills" className=" h-[170vh] sm:h-[100vh] pt-10  bg-gradient-to-b from-gray-800 to-black w-full  ">
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center  text-white">
        
        <div >
            <p className="text-4xl font-bold border-b-4  border-gray-500  p-2  inline">
                Skills
            </p>
            <p className="py-6">
                The technologies I've worked with are
            </p>
        </div>
        <div className=" max-w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0 ">
             {
                skills.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md mb-6 ml-2 mr-2 hover:scale-100 duration-500 py-8 rounded-lg ${style}`}>
                      <img src={src} alt="imgs" className="w-20 mx-auto rounded-lg h-auto max-w-full"/>
                      <p className="mt-4">{title}</p>
                   </div>

                ))
             }

            
        </div>

      </div>
    </div>
   
  )
}

export default Skills
