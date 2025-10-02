import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import Login from "../components/Login";
import Partners from "../components/Partners";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-b from-blue-100 via-white to-blue-50">
                <div className="lg:w-2/3">
                    <Header />
                    <HeroSection />
                    <Partners />
                </div>
                <div className="lg:w-1/3">
                    <Login />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;