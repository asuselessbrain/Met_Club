import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "../components/Index/Nav";

const indexData = [
    {
        "lesson": "অধ্যায় ০১: আবহাওয়া ও জলবায়ু",
        "image": "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg",
        "sections": [
            {
                "title": "সেকশন ০১- আবহাওয়া",
                "topic": "আবহাওয়া কি?",
                "content": "আবহাওয়া মানে হলো কোনো স্থানের অল্প সময়ের তাপমাত্রা, বাতাস, মেঘ, বৃষ্টি ইত্যাদির অবস্থা। আজ গরম হলেও কালকে ঠান্ডা হতে পারে—এটাই আবহাওয়ার পরিবর্তন।",
                "example": "যখন আকাশ নীল থাকে তখন বোঝা যায় আকাশ পরিষ্কার। আবার আকাশ যদি কালো মেঘে ঢাকা থাকে, তাহলে বোঝা যায় বৃষ্টি হতে পারে।",
                "game": {
                    "name": "ওয়েদার চ্যালেঞ্জ",
                    "instruction": "আবহাওয়ার অবস্থাগুলোর নামের সাথে ছবিগুলো ড্র্যাগ এন্ড ড্রপ করতে হবে।",
                    "items": [
                        { "name": "সরাসরি", "imageHint": "পরিষ্কার আকাশ" },
                        { "name": "বৃষ্টি", "imageHint": "বৃষ্টি পড়ার ছবি" },
                        { "name": "ঝড়ো বাতাস", "imageHint": "বাতাসে দুলছে গাছ" },
                        { "name": "ঠান্ডা", "imageHint": "শীতকালে কুয়াশা" }
                    ]
                }
            },
            {
                "title": "সেকশন ০২- জলবায়ু",
                "topic": "জলবায়ু কি?",
                "content": "জলবায়ু হলো অনেক বছরের গড় আবহাওয়া। যেমন সৌদি আরবে গরম সবসময়, কানাডায় ঠান্ডা, আর বাংলাদেশে শীতল উষ্ণ।",
                "game": {
                    "name": "Guess the Climate",
                    "instruction": "দেশের নামের সাথে সঠিক ছবি ড্র্যাগ এন্ড ড্রপ করতে হবে।",
                    "items": [
                        { "name": "বাংলাদেশ", "imageHint": "সরাসরি, বৃষ্টি ও কুয়াশা" },
                        { "name": "কানাডা", "imageHint": "বরফ, জ্যাকেট পরা মানুষ" },
                        { "name": "সৌদি আরব", "imageHint": "মরুভূমির উত্তপ্ত পরিবেশ" }
                    ]
                }
            },
            {
                "title": "সেকশন ০৩- আবহাওয়া সম্পর্কিত যন্ত্র",
                "items": [
                    {
                        "name": "থার্মোমিটার",
                        "desc": "তাপমাত্রা পরিমাপের যন্ত্র",
                        "imageHint": "কাচের থার্মোমিটার লাল দাগ উঠছে"
                    },
                    {
                        "name": "ব্যারোমিটার",
                        "desc": "বায়ুর চাপ পরিমাপের যন্ত্র",
                        "imageHint": "গোলাকার কম্পাস জাতীয় যন্ত্র"
                    },
                    {
                        "name": "চাদর",
                        "desc": "শীতে গা গরম রাখে",
                        "imageHint": "চাদরে মোড়া মানুষ"
                    },
                    {
                        "name": "পাখা",
                        "desc": "গরমে ঠান্ডা করে",
                        "imageHint": "ছাদে ঝুলানো পাখা"
                    }
                ],
                "game": {
                    "name": "Matching Game",
                    "instruction": "উপকরণের ব্যবহার অনুযায়ী মিলাতে হবে।",
                    "hints": ["তাপমাত্রা মাপা", "বায়ুর চাপ মাপা", "শীতে ব্যবহার", "গরমে ব্যবহার"]
                }
            },
            {
                "title": "সেকশন ০৪- দুর্যোগ",
                "definition": "হঠাৎ ঘটে যাওয়া বড় ক্ষতিকর ঘটনা হলো দুর্যোগ। যেমন বন্যা, ঘূর্ণিঝড়, ভূমিকম্প, অগ্নিকাণ্ড।",
                "game": {
                    "name": "Disaster Matching",
                    "items": ["বন্যা", "ঘূর্ণিঝড়", "ভূমিকম্প", "অগ্নিকাণ্ড", "ভূমিধ্বস", "জলচ্ছ্বাস"]
                }
            },
            {
                "title": "সেকশন ০৫- দুর্যোগে প্রয়োজনীয় উপকরণ",
                "items": [
                    "পানির বোতল",
                    "শুকনা খাবার",
                    "টর্চলাইট",
                    "প্রথমিক চিকিৎসা বাক্স",
                    "রেডিও/মোবাইল"
                ],
                "game": {
                    "name": "Disaster Kit Game",
                    "instruction": "ব্যাগে সঠিক জিনিসগুলো ড্র্যাগ করতে হবে।"
                }
            },
            {
                "title": "সেকশন ০৬- দুর্যোগে সতর্কতা",
                "content": "লাল পতাকা মানে হলো বিপদের সংকেত। তখন নিজেকে নিরাপদ রাখতে হবে।",
                "game": {
                    "question": "তুমি সমুদ্রে খেলছো, হঠাৎ লাল পতাকা উঠল। তুমি কী করবে?",
                    "options": [
                        "শুন্য পড়া",
                        "বন্ধুকে জানাব",
                        "নিরাপদ জায়গায় যাব",
                        "খেলতে থাকব"
                    ],
                    "correct": ["নিরাপদ জায়গায় যাব", "বন্ধুকে জানাব"]
                }
            }
        ]
    },
    { "lesson": "অধ্যায় ০২: বায়ুমণ্ডল", "image": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/earths-moon/lunar-science/earth-atmosphere.jpg?w=1920&h=1142&fit=clip&crop=faces%2Cfocalpoint" },
    { "lesson": "অধ্যায় ০৩: নদী ও সমুদ্র", "image": "https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg" },
    { "lesson": "অধ্যায় ০৪: বন ও উদ্ভিদ", "image": "https://www.climate-kic.org/wp-content/uploads/2024/03/INFORMA-Opinion-piece-image.png" },
    { "lesson": "অধ্যায় ০৫: প্রাণীজগৎ", "image": "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg" },
    { "lesson": "অধ্যায় ০৬: পৃথিবীর গঠন", "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16134/production/_128402409_earth-core.jpg" },
    { "lesson": "অধ্যায় ০৭: ভূমিকম্প ও আগ্নেয়গিরি", "image": "https://images.newscientist.com/wp-content/uploads/2020/12/21145328/volcanoes-f0r7pt_web.jpg" },
    { "lesson": "অধ্যায় ০৮: সূর্য ও গ্রহমণ্ডল", "image": "https://www.australianenvironmentaleducation.com.au/wp-content/uploads/2024/11/Solar-System-3-1024x576.jpg" },
    { "lesson": "অধ্যায় ০৯: চাঁদ ও উপগ্রহ", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg" },
    { "lesson": "অধ্যায় ১০: দিন ও রাত", "image": "https://physicsgirl.in/wp-content/uploads/2024/04/Rotation-of-the-Earth-The-Primary-Driver.webp" },
    { "lesson": "অধ্যায় ১১: ঋতু পরিবর্তন", "image": "https://upload.wikimedia.org/wikipedia/commons/0/04/Four_seasons.jpg" },
    { "lesson": "অধ্যায় ১২: জলচক্র", "image": "https://www.shutterstock.com/image-vector/vector-schematic-representation-water-cycle-260nw-694784353.jpg" },
    { "lesson": "অধ্যায় ১৩: মেঘ ও বৃষ্টি", "image": "https://data1.ibtimes.co.in/en/full/804124/kerala-yellow-alert-6-districts-rain-thunderstorm-till-october-11.jpg?h=450&l=50&t=40" },
    { "lesson": "অধ্যায় ১৪: বাতাস ও ঝড়", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-VCmaiziC_1FvHnsulXGzSy9u04XK18B_A&s" },
    { "lesson": "অধ্যায় ১৫: কৃষি ও ফসল", "image": "https://www.bssnews.net/assets/news_photos/2022/01/13/image-38551-1642082159.jpg" },
    { "lesson": "অধ্যায় ১৬: মাছ ও মৎস্য", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVNaWS5HYp_KLYVHx3bnHdX0E-35GalBYBQ&s" },
    { "lesson": "অধ্যায় ১৭: পাহাড় ও টিলা", "image": "https://static.vecteezy.com/system/resources/thumbnails/038/989/935/small_2x/ai-generated-majestic-mountain-peak-snow-covered-sunset-over-landscape-generated-by-ai-free-photo.jpg" },
    { "lesson": "অধ্যায় ১৮: মরুভূমি", "image": "https://whc.unesco.org/uploads/thumbs/site_1505_0011-1200-630-20160616154958.jpg" },
    { "lesson": "অধ্যায় ১৯: হিমবাহ ও তুষার", "image": "https://i0.wp.com/www.terrain.org/wp-content/uploads/2020/09/GlacierBlues_Header3.jpg?fit=1450%2C945&ssl=1" },
    { "lesson": "অধ্যায় ২০: নদীবন্দর ও পরিবহন", "image": "https://www.easyhaul.com/blog/wp-content/uploads/2022/12/Main-image-maritime-ports.png" }
];


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

    // const handleOpenSection = (id)

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
                            {startIndx === index && <h2 className="text-white bg-green-500 p-2 rounded mb-2 absolute z-20 top-3 cursor-pointer">Start</h2>}

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