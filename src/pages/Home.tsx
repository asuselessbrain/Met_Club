import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Login from "../components/Login";
import Partners from "../components/Partners";

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500">
            {/* <Header /> */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center min-h-[calc(100vh-228px)] px-4 sm:px-8 md:px-16 py-6 gap-8">

                {/* Left Section */}
                <div className="flex flex-col justify-between flex-1 w-full">
                    <HeroSection />
                </div>

                {/* Right Section (Login box) */}
                <div className="w-full max-w-md lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start">
                    <Login />
                </div>
            </div>

            {/* Partners Section */}
            <div className="px-4 sm:px-8 md:px-16 py-8">
                <Partners bg="bg-white/60" />
            </div>

            <Footer />
        </div>

    );
};

export default Home;