import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "../components/Index/Nav";
import { indexData } from "./indexData";
import { Link } from "react-router";



const Index = () => {
    const [startIndx, setStartIndx] = useState<number | null>(null);

    const totalLessons = indexData.length;
    const completedLessons = startIndx !== null ? startIndx + 1 : 0;
    const progress = Math.round((completedLessons / totalLessons) * 100);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative">
            <div className="h-[152px]">
                <Navbar
                    userName="Shohag"
                    progress={progress}
                    onLogout={() => console.log('Logout')}
                />
            </div>
            <div className='bg-[#f4f4f4] min-h-screen flex items-center justify-center relative py-10'>
                <div className='absolute left-1/2 top-60 bottom-40 w-1 bg-green-500 z-0'></div>

                <div className='relative z-10'>
                    {indexData.map((item, index) => (
                        <div key={index} className='relative flex flex-col items-center pt-16 hover:scale-110 cursor-pointer transition-all duration-700' onClick={() => setStartIndx(index)}>
                            {startIndx === index && <Link to={`/lesson/${item.id}`} className="text-white bg-green-500 p-2 rounded mb-2 absolute z-20 top-3 cursor-pointer" >Start</Link>}

                            <h2 className='text-center text-xl font-semibold clipPath h-20 py-4 bg-white rounded mb-1 px-6'>{item.lesson}</h2>
                            <img src={item.image} alt={item.lesson} className='w-32 h-32 mx-auto mb-4 rounded-full' />
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 p-4 bg-green-600 z-30 cursor-pointer text-white rounded-full shadow-lg"
                >
                    <FaArrowUp />
                </button>
            </div>
        </div>
    );
};

export default Index;