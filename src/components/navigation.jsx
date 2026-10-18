export default function Navigation() {
  return (
    <nav className="bg-cyan-200 text-black w-30 h-screen fixed top-0 left-0 flex flex-col items-center text-center justify-center">
        <ul>
            <li className="text-lg my-12">
                <a href="/" className="flex flex-col items-center">
                    <img src='/house-solid-full.svg' alt="Home" className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-125" />
                    Home
                </a>
            </li>

               <li className="text-lg my-12">
                <a href="/" className="flex flex-col items-center">
                    <img src='/magnifying-glass-solid-full.svg' alt="Home" className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-125" />
                    Search
                </a>
            </li>

               <li className="text-lg my-12">
                <a href="/" className="flex flex-col items-center">
                    <img src='/heart-solid-full.svg' alt="Home" className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-125" />
                    Follow
                </a>
            </li>

            <li className="text-lg my-12">
                <a href="/" className="flex flex-col items-center">
                    <img src='/download-solid-full.svg' alt="Home" className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-125" />
                    Download
                </a>
            </li>

            <li className="text-lg my-12">
                <a href="/" className="flex flex-col items-center">
                    <img src='/bell-solid-full.svg' alt="Home" className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-125" />
                    Notifications
                </a>
            </li>

            <li className="text-lg my-12">
                <a href="/" className="flex flex-col items-center">
                    <img src='/user-solid-full.svg' alt="Home" className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-125" />
                    Profile
                </a>
            </li>


        </ul>
    </nav>

  );
}