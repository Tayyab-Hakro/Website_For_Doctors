import '../Css/style.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="bg-blue-200    Navbar flex justify-between items-center pl-14 pr-14 pt-5">
        <div className=''>
            <h1 className='text-3xl font-bold'>Tayyab Hakro</h1>
        </div>
        <div className="sm:hidden md:flex">
            <ul className="flex gap-4">
              <Link to={'/'}><li>Home</li> </Link>  
                <li>Contact</li>
                <li>About </li>
                <li>Schedule</li>

            </ul>

        </div>
        <div className="flex gap-3">
  <Link to={'/register'}><button className="bg-blue-500 px-8 py-2 rounded-full p-2 text-white font-bold">SignUp</button> </Link>  
    <button className="bg-blue-500 px-8 py-2 rounded-full p-2 text-white font-bold">Logins</button>
        </div>

    </div>
  )
}

export default Navbar