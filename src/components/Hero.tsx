import { Link } from "react-router";

const HeroSection = () => {
    return (
        <div className=" pl-6 text-white">
            <div className="space-y-4 text-xl lg:text-2xl font-semibold">
                <p className="md:text-4xl xl:text-6xl font-bold">মেট ক্লাব গেমিফাইড ই-লার্নিং </p>
                <p>এসো আবহাওয়া শিখি খেলতে খেলতে</p>
            </div>
            <div className="mt-16 flex justify-start">
                <Link to="/about">
                    <button className="px-6 py-3 cursor-pointer bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition">
                    মেট ক্লাব সম্পর্কে আরও জানুন
                </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;