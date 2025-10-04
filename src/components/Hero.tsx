// src/components/Hero.jsx
import { Link } from "react-router";
import logo from "../assets/images/logo_original.png";

const HeroSection = () => {
    return (
        <div className="text-white">
            <div className="flex flex-col lg:flex-row lg:justify-start items-center justify-center">
                {/* Logo + Animated icons */}
                <div className="relative">
                    <div className="animate-float">
                        <img src={logo} alt="MET CLUB LOGO" className="w-[630px]" />
                    </div>

                    <div className="absolute top-2 sm:top-4 md:top-8 -right-2 sm:-right-4 md:-right-8 lg:-right-4 xl:-right-8 text-6xl animate-float-delayed">
                        ☀️
                    </div>
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-4 md:left-8 text-6xl animate-float">
                        🌧️
                    </div>
                    <div className="absolute top-1/2 right-2 sm:right-4 md:right-6 text-6xl animate-float-delayed">
                        ☁️
                    </div>
                </div>

                {/* Text Section */}
                <div className="space-y-4 font-semibold lg:ml-8 max-w-full lg:max-w-3xl xl:max-w-4xl">
                    <p className="whitespace-nowrap text-3xl md:text-6xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-center lg:text-left font-bold">
                        মেট ক্লাব গেমিফাইড ই-লার্নিং
                    </p>
                    <p className="text-center lg:text-left md:text-xl lg:text-[16px] xl:text-xl">
                        এসো আবহাওয়া শিখি খেলতে খেলতে
                    </p>
                    <Link to="/about" className="flex justify-center lg:justify-start mt-6">
                        <button className="px-6 py-3 cursor-pointer bg-white/80 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition">
                            মেট ক্লাব সম্পর্কে জানুন
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
