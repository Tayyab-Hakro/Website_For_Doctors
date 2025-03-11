
function AboutUs() {
  return (
    <div className="w-full h-full  flex sm:flex-wrap  grid   sm:grid-col-1 md:grid-cols-2">
        
        <div className=" flex m-10 ">

        <div className="  md:w-[60%] flex justify-center items-center h-full">
            <img className='w-full h-full' src="../../image 1.png" alt="Image " />
        </div>
        </div>

        <div className=" md:w-[50%] h-auto  justify-center items-center text-center">
            <h1 className="font-sans mt-4 text-3xl font-bold p-3" >About Us</h1>
    <h1 className="font-serif text-black text-5xl p-3">World-Class Preventive,
    Prescriptive & Curative
Medical Practices</h1>
<p className="p-3 text-1xl">
Being in the healthcare sector, we consider it our paradigm duty
to ensure Safety of our patients, effectiveness of our treatments,
transparency in our practices, and absolute timely care.
</p>
<button className="bg-blue-800 text-white ml-3 px-4 py-2">Contact Us</button>
        </div>

        </div>
  )
}

export default AboutUs