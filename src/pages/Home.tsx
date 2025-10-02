import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import Login from "../components/Login";
import Partners from "../components/Partners";

const Home = () => {
    return (
        <div className="bg-gradient-to-tl from-[#015186] to-[#1288e8]">
            <Header />
            <div className="flex min-h-[calc(100vh-452px)] flex-col lg:flex-row px-6 md:px-16 py-6 gap-6">

                <div className="flex flex-col justify-between flex-1">
                    <HeroSection />
                    <Partners />
                </div>

                <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start">
                    <Login />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;