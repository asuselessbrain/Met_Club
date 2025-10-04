import { useState } from 'react';
import logo from '../../assets/images/logo_original.png';
import { Link } from 'react-router';

const Navbar = ({
    userName,
    progress,
    onLogout,
}: {
    userName: string;
    progress: number;
    onLogout: () => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-30">
            <div className="mx-auto px-4 sm:px-8 lg:px-16 py-3 flex flex-wrap items-center justify-between">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-20 sm:w-32 h-20 sm:h-32" />
                    </Link>

                    <button
                        className="lg:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto mt-3 lg:mt-0`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 w-full lg:w-auto">
                        <span className="text-gray-700 font-semibold text-xl lg:text-3xl">
                            Welcome, {userName}
                        </span>

                        <div className="mt-2 lg:mt-0">
                            <span className="text-gray-600 font-medium text-sm lg:text-xl">
                                {progress}% Complete
                            </span>

                            <div className="w-full lg:w-64 h-3 bg-gray-200 rounded-full overflow-hidden mt-1">
                                <div
                                    className="h-full bg-green-500 transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 lg:mt-0 lg:ml-6">
                        <button
                            onClick={onLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow w-full lg:w-auto"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
