import React from "react"
import {FaGithub} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
//import Home from "./Home"
const SocialLinks = () => {
    
    const links=[
        {
            id:1,
            child:(
                <> 
                LinkedIn<BiLogoLinkedinSquare size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/anshika-mehta-9099a5209',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <> 
                GitHub<FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/anshikamehtaa',
        },
        {
            id:3,
            child:(
                <> 
                Mail<BiLogoGmail size={30}/>
                </>
            ),
            href:'mailto:anshikamehta76@gmail.com',
        },
        {
            id:4,
            child:(
                <> 
                Resume<HiOutlineDocumentText size={30}/>
                </>
            ),
            href:'/AnshikaMehta_Resumeee.pdf',
            style: 'rounded-br-md',
            download:true
        }
    ]
  return (
    <div>
        {/* <Home/> */}
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
     <ul>
     
        {links.map(({id,child,href,style,download})=>(
                // eslint-disable-next-line no-useless-concat
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-800 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"+" "+style}>
                <a href={href} 
                className="text-xl flex justify-between items-center w-full text-white" 
                download={download}
                target="_blank" 
                rel="noreferrer">
                    
                    <>
                    {child}
                    </>
                </a>
            </li>
        ))}
        
     </ul>
    </div>
    </div>
  )
}

export default SocialLinks
