
function Navbar() {
  return (
    <div className="bg-blue-200 w-full flex justify-between items-center p-4">
        <div>
            <h1>Tayyab Hakro</h1>
        </div>
        <div className="sm-hidden md:flex">
            <ul className="flex gap-4">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>

            </ul>

        </div>
        <div className="flex gap-3">
    <button className="bg-yellow-200 p-2">SignUp</button>
    <button className="bg-yellow-200 p-2">Logins</button>
        
        </div>
    </div>
  )
}

export default Navbar