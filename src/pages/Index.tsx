import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const indexData = [
    { "lesson": "অধ্যায় ০১: আবহাওয়া ও জলবায়ু", "image": "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg" },
    { "lesson": "অধ্যায় ০২: বায়ুমণ্ডল", "image": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/earths-moon/lunar-science/earth-atmosphere.jpg?w=1920&h=1142&fit=clip&crop=faces%2Cfocalpoint" },
    { "lesson": "অধ্যায় ০৩: নদী ও সমুদ্র", "image": "https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg" },
    { "lesson": "অধ্যায় ০৪: বন ও উদ্ভিদ", "image": "https://www.climate-kic.org/wp-content/uploads/2024/03/INFORMA-Opinion-piece-image.png" },
    { "lesson": "অধ্যায় ০৫: প্রাণীজগৎ", "image": "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg" },
    { "lesson": "অধ্যায় ০৬: পৃথিবীর গঠন", "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16134/production/_128402409_earth-core.jpg" },
    { "lesson": "অধ্যায় ০৭: ভূমিকম্প ও আগ্নেয়গিরি", "image": "https://images.newscientist.com/wp-content/uploads/2020/12/21145328/volcanoes-f0r7pt_web.jpg" },
    { "lesson": "অধ্যায় ০৮: সূর্য ও গ্রহমণ্ডল", "image": "https://www.australianenvironmentaleducation.com.au/wp-content/uploads/2024/11/Solar-System-3-1024x576.jpg" },
    { "lesson": "অধ্যায় ০৯: চাঁদ ও উপগ্রহ", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg" },
    { "lesson": "অধ্যায় ১০: দিন ও রাত", "image": "https://physicsgirl.in/wp-content/uploads/2024/04/Rotation-of-the-Earth-The-Primary-Driver.webp" },
    { "lesson": "অধ্যায় ১১: ঋতু পরিবর্তন", "image": "images/seasons.png" },
    { "lesson": "অধ্যায় ১২: জলচক্র", "image": "images/water-cycle.png" },
    { "lesson": "অধ্যায় ১৩: মেঘ ও বৃষ্টি", "image": "images/rain.png" },
    { "lesson": "অধ্যায় ১৪: বাতাস ও ঝড়", "image": "images/wind.png" },
    { "lesson": "অধ্যায় ১৫: কৃষি ও ফসল", "image": "images/agriculture.png" },
    { "lesson": "অধ্যায় ১৬: মাছ ও মৎস্য", "image": "images/fish.png" },
    { "lesson": "অধ্যায় ১৭: পাহাড় ও টিলা", "image": "images/mountain.png" },
    { "lesson": "অধ্যায় ১৮: মরুভূমি", "image": "images/desert.png" },
    { "lesson": "অধ্যায় ১৯: হিমবাহ ও তুষার", "image": "images/glacier.png" },
    { "lesson": "অধ্যায় ২০: নদীবন্দর ও পরিবহন", "image": "images/port.png" }
]

const Index = () => {
    const [startIndx, setStartIndx] = useState<number | null>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // smooth scrolling
        });
    };

    return (
        <div className='bg-[#f4f4f4] min-h-screen flex items-center justify-center relative py-20'>
            {/* Vertical Green Line */}
            <div className='absolute left-1/2 top-60 bottom-40 w-1 bg-green-500 z-0'></div>

            <div className='relative z-10'>
                {indexData.map((item, index) => (
                    <div key={index} className='relative flex flex-col items-center pt-16 hover:scale-110 cursor-pointer transition-all duration-700' onClick={() => setStartIndx(index)}>
                        {startIndx === index && <h2 className="text-white bg-green-500 p-2 rounded mb-2 absolute z-20 top-3 cursor-pointer">Start</h2>}

                        <h2 className='text-center text-xl font-semibold clipPath h-20 py-4 bg-white rounded mb-1 px-6'>{item.lesson}</h2>
                        <img src={item.image} alt={item.lesson} className='w-36 h-36 mx-auto mb-4 rounded-full' />
                    </div>
                ))}
            </div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 p-3 bg-green-500 cursor-pointer text-white rounded-full shadow-lg"
            >
                <FaArrowUp />
            </button>
        </div>

    );
};

export default Index;