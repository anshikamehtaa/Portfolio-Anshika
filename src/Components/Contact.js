const Contact = () => {
  return (
  
    <div name="Contact" className=" w-full h-[100vh]  bg-gradient-to-b from-black to-gray-800 p-4 text-white">
     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact
            </p>
            <p className="py-6">
            Submit the form to get in touch with me
            </p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/64b9017d-768f-4895-a827-3e56f52e8d33" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input type="text" name="email" placeholder="Enter your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"/>
                <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Get in Touch</button> 
            </form>
        </div>
     </div>
   
    </div>
  )
}

export default Contact
