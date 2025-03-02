function HeroSection() {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-blue-200  p-6">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full max-w-6xl gap-8">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center items-start text-left px-6">
            <h1 className="font-serif font-bold text-4xl text-gray-800">Hi, I am Tayyab Hakro</h1>
            <p className="font-serif font-semibold text-xl text-gray-700 mt-3">
              A Billionaire dreamer, InShAllah one day I will become a Billionaire.
            </p>
            <p className="text-gray-600 mt-2">
              I will get revenge on everyone in this world who gave me pain. I will double it.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
        Start Now
              </button>
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
        Contact Now
              
              </button>
            </div>
          </div>
  
          {/* Right Image Section */}
          <div className="flex justify-center items-center">
            <img src="../../Mask group.png" className="w-[300px] h-[300px] rounded-lg shadow-lg object-cover "  alt="Hero Image" />
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  