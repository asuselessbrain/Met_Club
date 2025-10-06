export const indexData = [
    {
        id: 1,
        lesson: "অধ্যায় ০১: আবহাওয়া ও জলবায়ু",
        image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg",
        sections: [
            {
                id: 1,
                title: "সেকশন ০১: আবহাওয়া",
                topic: "আবহাওয়া কি?",
                content:
                    "আবহাওয়া হলো কোনো এলাকার অল্প সময়ের জন্য তাপমাত্রা, বাতাস, মেঘ, বৃষ্টি ইত্যাদির অবস্থার সমষ্টি। আজ গরম থাকলেও কাল ঠান্ডা হতে পারে—এটাই আবহাওয়ার পরিবর্তন।",
                example:
                    "যখন আকাশ পরিষ্কার নীল থাকে, তখন বুঝা যায় যে আকাশ পরিষ্কার আছে। আবার আকাশ যদি মেঘে ঢেকে যায়, তখন বুঝা যায় যে বৃষ্টি হতে পারে।",
                game: {
                    name: "ওয়েদার চ্যালেঞ্জ",
                    instruction:
                        "আবহাওয়ার অবস্থাগুলোর নামের সাথে ছবিগুলো ড্র্যাগ এন্ড ড্রপ করতে হবে।",
                    items: [
                        {
                            name: "রোদ",
                            image:
                                "https://asset.kalerkantho.com/public/news_images/2024/04/24/1713933307-8de41d2ac5e2b3ce04745dbedbc83694.jpg",
                        },
                        {
                            name: "বৃষ্টি",
                            image:
                                "https://sarabangla.net/wp-content/uploads/2025/03/Rain-2-826x497.jpg",
                        },
                        {
                            name: "ঝড়ো বাতাস",
                            image:
                                "https://www.kalbela.com/assets/news_photos/2024/06/09/image_95243_1717952293.webp",
                        },
                        {
                            name: "ঠান্ডা",
                            image:
                                "https://d2u0ktu8omkpf6.cloudfront.net/cd7c6690e12055e499f52f889f948b9e9257db7c5be81397.jpg",
                        },
                    ],
                },
                audio: "/audios/section1.mp3",

                transcript: [
                    // অধ্যায় ১: আবহাওয়া ও জলবায়ু
                    { text: 'অধ্যায়', start: 1.13, end: 1.67 },
                    { text: '০১: ', start: 1.67, end: 2.18 },
                    { text: 'আবহাওয়া ', start: 2.18, end: 3.05 },
                    { text: 'ও ', start: 3.05, end: 3.23 },
                    { text: 'জলবায়ু', start: 3.23, end: 4.25 },
                    { text: 'আবহাওয়া', start: 4.25, end: 5.06 },
                    { text: 'কি?', start: 5.06, end: 5.69 },

                    // আবহাওয়ার সংজ্ঞা
                    { text: 'আবহাওয়া', start: 5.69, end: 6.47 },
                    { text: 'মানে', start: 6.47, end: 6.77 },
                    { text: 'হল', start: 6.77, end: 7.1 },
                    { text: 'কোন', start: 7.1, end: 7.4 },
                    { text: 'জায়গার', start: 7.4, end: 7.94 },
                    { text: 'অল্প', start: 7.94, end: 8.33 },
                    { text: 'সময়ের', start: 8.33, end: 8.75 },
                    { text: 'তাপমাত্রা,', start: 8.75, end: 9.65 },
                    { text: 'বাতাস,', start: 9.65, end: 10.61 },
                    { text: 'মেঘ,', start: 10.61, end: 11.18 },
                    { text: 'বৃষ্টি', start: 11.18, end: 11.72 },
                    { text: 'ইত্যাদির', start: 11.72, end: 12.2 },
                    { text: 'অবস্থা।', start: 12.2, end: 13.1 },

                    // আবহাওয়ার পরিবর্তন
                    { text: 'আজ', start: 13.1, end: 13.61 },
                    { text: 'গরম', start: 13.61, end: 13.94 },
                    { text: 'থাকলেও', start: 13.94, end: 14.33 },
                    { text: 'কালকে', start: 14.33, end: 14.63 },
                    { text: 'ঠাণ্ডা', start: 14.63, end: 15.02 },
                    { text: 'হতে', start: 15.02, end: 15.23 },
                    { text: 'পারে।', start: 15.23, end: 15.65 },
                    { text: 'এটাই', start: 15.65, end: 16.22 },
                    { text: 'আবহাওয়ার', start: 16.22, end: 16.76 },
                    { text: 'পরিবর্তন।', start: 16.76, end: 17.69 },

                    // উদাহরণের শুরু
                    { text: 'উদাহরণ:', start: 17.69, end: 18.8 },
                    { text: 'যখন', start: 18.8, end: 19.37 },
                    { text: 'আকাশ', start: 19.37, end: 19.67 },
                    { text: 'একেবারে', start: 19.67, end: 20.06 },
                    { text: 'নীল', start: 20.06, end: 20.33 },
                    { text: 'থাকে', start: 20.33, end: 20.75 },
                    { text: 'তখন', start: 20.75, end: 21.14 },
                    { text: 'বুঝতে', start: 21.14, end: 21.53 },
                    { text: 'হবে', start: 21.53, end: 21.86 },
                    { text: 'দিনটা', start: 21.86, end: 22.25 },
                    { text: 'একেবারে', start: 22.25, end: 22.64 },
                    { text: 'পরিষ্কার।', start: 22.64, end: 23.39 },

                    // মেঘের উদাহরণ
                    { text: 'আবার', start: 23.39, end: 23.87 },
                    { text: 'আকাশে', start: 23.87, end: 24.26 },
                    { text: 'যদি', start: 24.26, end: 24.5 },
                    { text: 'অনেক', start: 24.5, end: 24.83 },
                    { text: 'কালো', start: 24.83, end: 25.16 },
                    { text: 'মেঘ', start: 25.16, end: 25.49 },
                    { text: 'জমে', start: 25.49, end: 26 },
                    { text: 'তাহলে', start: 26, end: 26.54 },
                    { text: 'বুঝতে', start: 26.54, end: 26.87 },
                    { text: 'হবে', start: 26.87, end: 27.17 },
                    { text: 'বৃষ্টি', start: 27.17, end: 27.53 },
                    { text: 'নামতে', start: 27.53, end: 27.86 },
                    { text: 'পারে।', start: 27.86, end: 28.76 },

                    // গেম/অ্যাক্টিভিটির নির্দেশ
                    { text: 'আবহাওয়ার', start: 28.76, end: 29.57 },
                    { text: 'অবস্থা', start: 29.57, end: 29.99 },
                    { text: 'গুলোর', start: 29.99, end: 30.29 },
                    { text: 'নামের', start: 30.29, end: 30.65 },
                    { text: 'সাথে', start: 30.65, end: 31.1 },
                    { text: 'এলোমেলো', start: 31.1, end: 31.67 },
                    { text: 'ছবিগুলো', start: 31.67, end: 32.54 },
                    { text: 'ড্র্যাগ', start: 32.54, end: 33.17 },
                    { text: 'এন্ড', start: 33.17, end: 33.41 },
                    { text: 'ড্রপ', start: 33.41, end: 33.74 },
                    { text: 'করে', start: 33.74, end: 33.98 },
                    { text: 'মিলাতে', start: 33.98, end: 34.43 },
                    { text: 'হবে।', start: 34.43, end: 36.505 } // শেষ শব্দ সেগমেন্টের শেষ সময়ে শেষ হচ্ছে
                ]
            },

            {
                id: 2,
                title: "সেকশন ০২: জলবায়ু",
                topic: "জলবায়ু কি?",
                content: "জলবায়ু হলো অনেক বছরের গড় আবহাওয়া। যেমন সৌদিআরবে গরম বেশি, কানাডায় ঠান্ডা বেশি এবং বাংলাদেশ নাতিশীতোষ্ণ থাকে।",
                game: {
                    name: "Guess the Climate",
                    instruction: "দেশের নামের সাথে সঠিক ছবি ড্র্যাগ এন্ড ড্রপ করতে হবে। জলবায়ুর সাথে মিল রেখে ছবিগুলো মিলাতে হবে।",
                    items: [
                        {
                            name: "বাংলাদেশ",
                            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1759651042/6a3187c0-81b2-44a5-ae9e-3f0d67682a04_mttnq4.png", // বাংলাদেশ ছবি (রোদ, বৃষ্টি, কুয়াশা)
                        },
                        {
                            name: "কানাডা",
                            image: "https://cdx.dhakamail.com/media/images/2022August/canada-cold-20220810184136.jpg", // কানাডার ছবি (বরফ, জ্যাকেট পরা মানুষ)
                        },
                        {
                            name: "সৌদিআরব",
                            image: "https://media.prothomalo.com/prothomalo-bangla%2F2024-04%2Fd8c9f089-ed57-4e11-bc3b-93281c24799a%2FSahara.jpg?w=640&auto=format%2Ccompress&fmt=webp", // মরূভূমির উষ্ণ পরিবেশ
                        },
                    ],
                },
                // audio file placed in public/audios/ e.g. public/audios/section2.mp3
                audio: "/audios/section2.mp3",

                transcript: [
                    { "text": "জলবায়ু", "start": 1.55, "end": 2.33 },
                    { "text": "কী?", "start": 2.33, "end": 3.11 },
                    { "text": "জলবায়ু", "start": 3.11, "end": 3.89 },
                    { "text": "হল", "start": 3.89, "end": 4.25 },
                    { "text": "অনেক", "start": 4.25, "end": 4.73 },
                    { "text": "বছরের", "start": 4.73, "end": 5.27 },
                    { "text": "গড়", "start": 5.27, "end": 5.54 },
                    { "text": "আবহাওয়া,", "start": 5.54, "end": 6.26 },
                    { "text": "যেমন", "start": 6.26, "end": 6.74 },
                    { "text": "সৌদি", "start": 6.74, "end": 7.13 },
                    { "text": "আরবে", "start": 7.13, "end": 7.46 },
                    { "text": "গরম", "start": 7.46, "end": 7.82 },
                    { "text": "বেশি,", "start": 7.82, "end": 8.39 },
                    { "text": "কানাডায়", "start": 8.39, "end": 9.11 },
                    { "text": "ঠাণ্ডা", "start": 9.11, "end": 9.53 },
                    { "text": "বেশি", "start": 9.53, "end": 9.98 },
                    { "text": "এবং", "start": 9.98, "end": 10.37 },
                    { "text": "বাংলাদেশ", "start": 10.37, "end": 11.18 },
                    { "text": "নাতিশীতোষ্ণ", "start": 11.18, "end": 12.2 },
                    { "text": "থাকে।", "start": 12.2, "end": 13.28 },
                    { "text": "জলবায়ুর", "start": 13.28, "end": 14.06 },
                    { "text": "সাথে", "start": 14.06, "end": 14.36 },
                    { "text": "মিল", "start": 14.36, "end": 14.69 },
                    { "text": "রেখে", "start": 14.69, "end": 15.08 },
                    { "text": "ছবিগুলো", "start": 15.08, "end": 15.68 },
                    { "text": "ড্র্যাগ", "start": 15.68, "end": 16.07 },
                    { "text": "এন্ড", "start": 16.07, "end": 16.31 },
                    { "text": "ড্রপ", "start": 16.31, "end": 16.61 },
                    { "text": "করে", "start": 16.61, "end": 16.85 },
                    { "text": "মিলাতে", "start": 16.85, "end": 17.21 },
                    { "text": "হবে।", "start": 17.21, "end": 17.66 }
                ]
            },


            {
                title: "সেকশন ০৩- আবহাওয়া সম্পর্কিত সারঞ্জাম",
                audio: "/audios/section3.mp3",
                description: [
                    {
                        name: "থার্মোমিটার (Thermometer)",
                        image: "https://m.media-amazon.com/images/I/61VF7piJ9IL._UF1000,1000_QL80_.jpg",
                        details: "একটি কাচের থার্মোমিটার যেখানে লাল দাগ ওপরে উঠছে। এটি দিয়ে তাপমাত্রা পরিমাপ করে, মানে আজ গরম নাকি ঠান্ডা তা জানায়।"
                    },
                    {
                        name: "ব্যারোমিটার (Barometer)",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBbj3ebSzYQUF-mcMJNYmzo-ApRXUs-5X1A&s",
                        details: "গোলাকার মিটার যেখানে চাপের সূচক আছে। এটি বায়ুর চাপ মাপে, অর্থাৎ ঝড়-বৃষ্টি আসছে নাকি সুন্দর আবহাওয়া থাকবে তা বুঝতে সাহায্য করে।"
                    },
                    {
                        name: "চাদর (Blanket)",
                        image: "https://rukminim2.flixcart.com/image/480/480/km57hjk0/blanket/t/t/g/rd100-100-bhagalpuri-chadar-original-imagf3huydnfhfps.jpeg?q=90",
                        details: "কোনো চাদর জড়িয়ে আছে। এটি ঠান্ডায় গা গরম রাখতে সাহায্য করে অর্থাৎ শীতকালে আমরা চাদর ব্যবহার করি।"
                    },
                    {
                        name: "পাখা (Fan)",
                        image: "https://www.bhorerkagoj.com/uploads/2021/09/online/photos/%E0%A6%AB%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8.jpg",
                        details: "ছাদে ঝুলানো পাখা। এটি গরমে ঠান্ডা করে, মানে গরম আবহাওয়ার সময় আমরা পাখা চালাই।"
                    }
                ],
                matching_game: {
                    instruction: "স্ক্রিনের ছবিগুলোর সাথে উপকরণগুলোর ব্যবহারের লেখা মিলাতে হবে।  ",
                    items: [
                        {
                            name: "থার্মোমিটার (Thermometer)",
                            image: "https://m.media-amazon.com/images/I/61VF7piJ9IL._UF1000,1000_QL80_.jpg",
                            usage: "তাপমাত্রা মাপে"
                        },
                        {
                            name: "ব্যারোমিটার (Barometer)",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBbj3ebSzYQUF-mcMJNYmzo-ApRXUs-5X1A&s",
                            usage: "বায়ুর চাপ মাপে"
                        },
                        {
                            name: "চাদর (Blanket)",
                            image: "https://rukminim2.flixcart.com/image/480/480/km57hjk0/blanket/t/t/g/rd100-100-bhagalpuri-chadar-original-imagf3huydnfhfps.jpeg?q=90",
                            usage: "ঠান্ডায় ব্যবহার হয়"
                        },
                        {
                            name: "পাখা (Fan)",
                            image: "https://www.bhorerkagoj.com/uploads/2021/09/online/photos/%E0%A6%AB%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8.jpg",
                            usage: "গরমে ব্যবহার হয়"
                        }
                    ]
                },
                transcript: [
                    { "text": "থার্মোমিটার (Thermometer)", "start": 0.68, "end": 1.73 },
                    { "text": "ছবি", "start": 1.73, "end": 2.48 },
                    { "text": "একটি", "start": 2.48, "end": 2.93 },
                    { "text": "কাচের", "start": 2.93, "end": 3.35 },
                    { "text": "থার্মোমিটার", "start": 3.35, "end": 4.19 },
                    { "text": "যেখানে", "start": 4.19, "end": 4.76 },
                    { "text": "লাল", "start": 4.76, "end": 5.15 },
                    { "text": "দাগ", "start": 5.15, "end": 5.48 },
                    { "text": "উপরে", "start": 5.48, "end": 5.87 },
                    { "text": "উঠছে,", "start": 5.87, "end": 6.5 },
                    { "text": "এটি", "start": 6.5, "end": 6.95 },
                    { "text": "দিয়ে", "start": 6.95, "end": 7.16 },
                    { "text": "তাপমাত্রা", "start": 7.16, "end": 7.7 },
                    { "text": "পরিমাপ", "start": 7.7, "end": 8.18 },
                    { "text": "করে", "start": 8.18, "end": 8.69 },
                    { "text": "মানে", "start": 8.69, "end": 9.14 },
                    { "text": "আজ", "start": 9.14, "end": 9.41 },
                    { "text": "গরম", "start": 9.41, "end": 9.89 },
                    { "text": "নাকি", "start": 9.89, "end": 10.16 },
                    { "text": "ঠান্ডা", "start": 10.16, "end": 10.73 },
                    { "text": "তা", "start": 10.73, "end": 11.03 },
                    { "text": "জানায়।", "start": 11.03, "end": 11.81 },
                    { "text": "ব্যারোমিটার", "start": 11.81, "end": 12.89 },
                    { "text": "ছবি", "start": 12.89, "end": 13.85 },
                    { "text": "গোলাকার", "start": 13.85, "end": 14.6 },
                    { "text": "মিটার", "start": 14.6, "end": 15.02 },
                    { "text": "যেখানে", "start": 15.02, "end": 15.44 },
                    { "text": "চাপের", "start": 15.44, "end": 15.89 },
                    { "text": "সূচক", "start": 15.89, "end": 16.31 },
                    { "text": "আছে।", "start": 16.31, "end": 16.91 },
                    { "text": "এটি", "start": 16.91, "end": 17.39 },
                    { "text": "বায়ুর", "start": 17.39, "end": 17.75 },
                    { "text": "চাপ", "start": 17.75, "end": 18.05 },
                    { "text": "মাপে।", "start": 18.05, "end": 18.47 },
                    { "text": "অর্থাৎ", "start": 18.47, "end": 19.37 },
                    { "text": "ঝড়", "start": 19.37, "end": 19.94 },
                    { "text": "বৃষ্টি", "start": 19.94, "end": 20.33 },
                    { "text": "আসছে", "start": 20.33, "end": 20.78 },
                    { "text": "নাকি", "start": 20.78, "end": 21.29 },
                    { "text": "সুন্দর", "start": 21.29, "end": 21.98 },
                    { "text": "আবহাওয়া", "start": 21.98, "end": 22.49 },
                    { "text": "থাকবে", "start": 22.49, "end": 23.03 },
                    { "text": "তা", "start": 23.03, "end": 23.3 },
                    { "text": "বুঝতে", "start": 23.3, "end": 23.69 },
                    { "text": "সাহায্য", "start": 23.69, "end": 24.11 },
                    { "text": "করে।", "start": 24.11, "end": 24.8 },
                    { "text": "চাদর (Blanket)", "start": 24.8, "end": 25.52 },
                    { "text": "(Blanket)", "start": 25.52, "end": 26.9 },
                    { "text": "ছবি।", "start": 26.9, "end": 28.04 },
                    { "text": "কেউ", "start": 28.04, "end": 28.52 },
                    { "text": "চাদর", "start": 28.52, "end": 28.91 },
                    { "text": "জড়িয়ে", "start": 28.91, "end": 29.27 },
                    { "text": "আছে।", "start": 29.27, "end": 29.75 },
                    { "text": "এটি", "start": 29.75, "end": 30.2 },
                    { "text": "ঠান্ডায়", "start": 30.2, "end": 30.71 },
                    { "text": "গা", "start": 30.71, "end": 30.95 },
                    { "text": "গরম", "start": 30.95, "end": 31.31 },
                    { "text": "রাখতে", "start": 31.31, "end": 31.67 },
                    { "text": "সাহায্য", "start": 31.67, "end": 32.09 },
                    { "text": "করে।", "start": 32.09, "end": 32.48 },
                    { "text": "অর্থাৎ", "start": 32.48, "end": 33.11 },
                    { "text": "শীতকালে", "start": 33.11, "end": 33.62 },
                    { "text": "আমরা", "start": 33.62, "end": 33.89 },
                    { "text": "চাদর", "start": 33.89, "end": 34.25 },
                    { "text": "ব্যবহার", "start": 34.25, "end": 34.64 },
                    { "text": "করি।", "start": 34.64, "end": 35.45 },
                    { "text": "পাখা", "start": 35.45, "end": 36.23 },
                    { "text": "ফ্যান।", "start": 36.23, "end": 37.37 },
                    { "text": "ছবি।", "start": 37.37, "end": 38.18 },
                    { "text": "ছাদে", "start": 38.18, "end": 38.75 },
                    { "text": "ঝুলানো", "start": 38.75, "end": 39.17 },
                    { "text": "পাখা।", "start": 39.17, "end": 39.74 },
                    { "text": "এটি", "start": 39.74, "end": 40.25 },
                    { "text": "গরমে", "start": 40.25, "end": 40.64 },
                    { "text": "ঠান্ডা", "start": 40.64, "end": 41.06 },
                    { "text": "করে।", "start": 41.06, "end": 41.48 },
                    { "text": "মানে", "start": 41.48, "end": 41.84 },
                    { "text": "গরম", "start": 41.84, "end": 42.29 },
                    { "text": "আবহাওয়ার", "start": 42.29, "end": 42.86 },
                    { "text": "সময়", "start": 42.86, "end": 43.25 },
                    { "text": "আমরা", "start": 43.25, "end": 43.52 },
                    { "text": "পাখা", "start": 43.52, "end": 43.82 },
                    { "text": "চালাই।", "start": 43.82, "end": 45.59 },
                    { "text": "ম্যাচিং", "start": 45.59, "end": 46.25 },
                    { "text": "গেইম।", "start": 46.25, "end": 46.7 },
                    { "text": "স্ক্রিনের", "start": 46.7, "end": 47.33 },
                    { "text": "ছবিগুলোর", "start": 47.33, "end": 47.9 },
                    { "text": "সাথে", "start": 47.9, "end": 48.47 },
                    { "text": "উপকরণগুলোর", "start": 48.47, "end": 49.55 },
                    { "text": "ব্যবহারের", "start": 49.55, "end": 50.15 },
                    { "text": "লেখা", "start": 50.15, "end": 50.54 },
                    { "text": "মেলাতে", "start": 50.54, "end": 50.93 },
                    { "text": "হবে।", "start": 50.93, "end": 51.35 }
                ]
            },

            {
                id: 4,
                title: "সেকশন ০৪: দুর্যোগ",
                topic: "দুর্যোগ কি?",
                content: "হঠাৎ করে ঘটে যাওয়া বড় বিপদকে দুর্যোগ বলে। দুর্যোগের কারণে মানুষ, প্রাণী, ঘরবাড়ি ও পরিবেশের ক্ষয়ক্ষতি হয়। যেমন বন্যা, ঘূর্ণিঝড়, ভূমিকম্প, অগ্নিকাণ্ড এগুলো হোল বিভিন্ন ধরণের দুর্যোগ।",
                example: "যেমন, বন্যার কারণে বাড়ি জলমগ্ন হয়ে যেতে পারে, ঘূর্ণিঝড় অনেক গাছ ও ভবন ক্ষতিগ্রস্ত করতে পারে।",
                game: {
                    name: "দুর্যোগ চিনি",
                    instruction: "দুর্যোগগুলোর নামের সাথে ছবিগুলো ড্র্যাগ এন্ড ড্রপ করে মিলাতে হবে।",
                    items: [
                        {
                            name: "বন্যা",
                            image: "https://www.dainikbangla.com.bd/images/db/2024/09/06/motamot2.jpg"
                        },
                        {
                            name: "ঘূর্ণিঝড়",
                            image: "https://asset.kalerkantho.com/public/news_images/2025/10/02/1759393069-e7df7f96aaaed5810e79dc57d39cd5a6.jpg"
                        },
                        {
                            name: "ভূমিকম্প",
                            image: "https://cdn.jagonews24.com/media/imgAllNew/BG/2017November/earthquake-20171124110724.jpg"
                        },
                        {
                            name: "অগ্নিকাণ্ড",
                            image: "https://static.dw.com/image/47612475_605.jpg"
                        },
                        {
                            name: "ভূমিধ্বস",
                            image: "https://liveingreenworld.wordpress.com/wp-content/uploads/2015/08/en02.jpg?w=321&h=179"
                        },
                        {
                            name: "জলোচ্ছ্বাস",
                            image: "https://www.dhakatimes24.com/assets/news_photos/2022/10/24/image-284336.jpg"
                        }
                    ]
                },
                audio: "/audios/section4.mp3",
                transcript: [
                    { "text": "দুর্যোগ", "start": 0.35, "end": 1.04 },
                    { "text": "(Disease)", "start": 1.04, "end": 2.3 },
                    { "text": "হঠাৎ", "start": 2.3, "end": 3.08 },
                    { "text": "ঘটে", "start": 3.08, "end": 3.44 },
                    { "text": "যাওয়া", "start": 3.44, "end": 3.74 },
                    { "text": "বড়", "start": 3.74, "end": 4.1 },
                    { "text": "বিপদকে", "start": 4.1, "end": 4.67 },
                    { "text": "দুর্যোগ", "start": 4.67, "end": 5.15 },
                    { "text": "বলে।", "start": 5.15, "end": 5.75 },
                    { "text": "দুর্যোগের", "start": 5.75, "end": 6.5 },
                    { "text": "কারণে", "start": 6.5, "end": 7.1 },
                    { "text": "মানুষ,", "start": 7.1, "end": 7.91 },
                    { "text": "প্রাণী,", "start": 7.91, "end": 8.45 },
                    { "text": "ঘরবাড়ি,", "start": 8.45, "end": 9.35 },
                    { "text": "পরিবেশের", "start": 9.35, "end": 10.25 },
                    { "text": "ক্ষয়ক্ষতি", "start": 10.25, "end": 10.82 },
                    { "text": "হয়।", "start": 10.82, "end": 11.27 },
                    { "text": "যেমন", "start": 11.27, "end": 11.84 },
                    { "text": "বন্যা,", "start": 11.84, "end": 12.47 },
                    { "text": "ঘুর্ণিঝড়,", "start": 12.47, "end": 13.67 },
                    { "text": "ভূমিকম্প,", "start": 13.67, "end": 14.69 },
                    { "text": "অগ্নিকান্ড", "start": 14.69, "end": 15.65 },
                    { "text": "এগুলো", "start": 15.65, "end": 16.13 },
                    { "text": "হল", "start": 16.13, "end": 16.4 },
                    { "text": "বিভিন্ন", "start": 16.4, "end": 16.82 },
                    { "text": "ধরনের", "start": 16.82, "end": 17.24 },
                    { "text": "দুর্যোগ।", "start": 17.24, "end": 19.58 },
                    { "text": "দুর্যোগ", "start": 19.58, "end": 21.65 },
                    { "text": "গুলোর", "start": 21.65, "end": 21.92 },
                    { "text": "নামের", "start": 21.92, "end": 22.28 },
                    { "text": "সাথে", "start": 22.28, "end": 22.73 },
                    { "text": "এলোমেলো", "start": 22.73, "end": 23.3 },
                    { "text": "ছবিগুলো", "start": 23.3, "end": 23.93 },
                    { "text": "ড্র্যাগ", "start": 23.93, "end": 24.32 },
                    { "text": "এন্ড", "start": 24.32, "end": 24.53 },
                    { "text": "ড্রপ", "start": 24.53, "end": 24.83 },
                    { "text": "করে", "start": 24.83, "end": 25.07 },
                    { "text": "মিলাতে", "start": 25.07, "end": 25.46 },
                    { "text": "হবে।", "start": 25.46, "end": 25.91 }
                ]
            },

            {
                id: 5,
                title: "সেকশন ০৫: দুর্যোগে প্রয়োজনীয় উপকরণ",
                topic: "দুর্যোগের সময় সাথে রাখার জন্য কিছু প্রয়োজনীয় উপকরণ",
                items: [
                    { "name": "পানির বোতল", "description": "পরিষ্কার পানি পান করার জন্য", "icon": "💧" },
                    { "name": "শুকনা খাবার", "description": "ক্ষুধা লাগলে খাওয়ার জন্য", "icon": "🍪" },
                    { "name": "টর্চলাইট", "description": "অন্ধকারে আলো পাওয়ার জন্য", "icon": "🔦" },
                    { "name": "প্রথমিক চিকিৎসা বাক্স (First Aid Box)", "description": "ছোটখাটো আঘাত সারানো ও প্রাথমিক চিকিৎসার জন্য", "icon": "🩹" },
                    { "name": "রেডিও / মোবাইল", "description": "খবর শোনার জন্য", "icon": "📻" }
                ],
                disestar_game: {
                    name: "ডিজাস্টার কিট গেইম",
                    instruction: "দুর্যোগের সময় কি কি জিনিস সাথে রাখতে হবে?",
                    items: [
                        { name: "পানির বোতল", correct: true },
                        { name: "শুকনা খাবার", correct: true },
                        { name: "টর্চলাইট", correct: true },
                        { name: "প্রথমিক চিকিৎসা বাক্স", correct: true },
                        { name: "রেডিও", correct: true },
                        { name: "খেলনা", correct: false },
                        { name: "ভিডিও গেম", correct: false },
                        { name: "চশমা", correct: false },
                        { name: "বই", correct: false },
                        { name: "সাউন্ড বক্স", correct: false }
                    ]
                },
                audio: "/audios/section5.mp3",
                transcript: [
                    { "text": "দুর্যোগের", "start": 1.7, "end": 2.3 },
                    { "text": "সময়", "start": 2.3, "end": 2.78 },
                    { "text": "সাথে", "start": 2.78, "end": 3.17 },
                    { "text": "রাখার", "start": 3.17, "end": 3.5 },
                    { "text": "জন্য", "start": 3.5, "end": 3.8 },
                    { "text": "কিছু", "start": 3.8, "end": 4.13 },
                    { "text": "প্রয়োজনীয়", "start": 4.13, "end": 4.76 },
                    { "text": "উপকরণ।", "start": 4.76, "end": 5.78 },
                    { "text": "পানির", "start": 5.78, "end": 6.38 },
                    { "text": "বোতল", "start": 6.38, "end": 7.1 },
                    { "text": "পরিষ্কার", "start": 7.1, "end": 7.85 },
                    { "text": "পানি", "start": 7.85, "end": 8.15 },
                    { "text": "পান", "start": 8.15, "end": 8.39 },
                    { "text": "করার", "start": 8.39, "end": 8.75 },
                    { "text": "জন্য", "start": 8.75, "end": 9.29 },
                    { "text": "শুকনা", "start": 9.29, "end": 9.89 },
                    { "text": "খাবার", "start": 9.89, "end": 10.4 },
                    { "text": "ক্ষুধা", "start": 10.4, "end": 11.0 },
                    { "text": "লাগলে", "start": 11.0, "end": 11.33 },
                    { "text": "খাওয়ার", "start": 11.33, "end": 11.72 },
                    { "text": "জন্য", "start": 11.72, "end": 12.35 },
                    { "text": "টর্চ", "start": 12.35, "end": 12.98 },
                    { "text": "লাইট", "start": 12.98, "end": 13.46 },
                    { "text": "অন্ধকারে", "start": 13.46, "end": 14.3 },
                    { "text": "আলো", "start": 14.3, "end": 14.63 },
                    { "text": "পাওয়ার", "start": 14.63, "end": 14.96 },
                    { "text": "জন্য", "start": 14.96, "end": 15.83 },
                    { "text": "প্রাথমিক", "start": 15.83, "end": 16.58 },
                    { "text": "চিকিৎসা", "start": 16.58, "end": 17.09 },
                    { "text": "বাক্স ", "start": 17.09, "end": 17.75 },
                    { "text": "(First", "start": 17.75, "end": 18.26 },
                    { "text": "Aid", "start": 18.26, "end": 18.53 },
                    { "text": "Box)", "start": 18.53, "end": 19.13 },
                    { "text": "ছোটখাটো", "start": 19.13, "end": 20.03 },
                    { "text": "আঘাত", "start": 20.03, "end": 20.57 },
                    { "text": "সারানো", "start": 20.57, "end": 21.05 },
                    { "text": "ও", "start": 21.05, "end": 21.26 },
                    { "text": "প্রাথমিক", "start": 21.26, "end": 21.77 },
                    { "text": "চিকিৎসার", "start": 21.77, "end": 22.28 },
                    { "text": "জন্য।", "start": 22.28, "end": 22.97 },
                    { "text": "রেডিও", "start": 22.97, "end": 23.63 },
                    { "text": "অথবা", "start": 23.63, "end": 23.99 },
                    { "text": "মোবাইল", "start": 23.99, "end": 24.62 },
                    { "text": "খবর", "start": 24.62, "end": 25.19 },
                    { "text": "শোনার", "start": 25.19, "end": 25.52 },
                    { "text": "জন্য।", "start": 25.52, "end": 26.78 },
                    { "text": "দুর্যোগের", "start": 26.78, "end": 27.56 },
                    { "text": "সময়", "start": 27.56, "end": 28.07 },
                    { "text": "কী", "start": 28.07, "end": 28.34 },
                    { "text": "কী", "start": 28.34, "end": 28.52 },
                    { "text": "জিনিস", "start": 28.52, "end": 28.82 },
                    { "text": "সাথে", "start": 28.82, "end": 29.18 },
                    { "text": "রাখতে", "start": 29.18, "end": 29.51 },
                    { "text": "হবে?", "start": 29.51, "end": 29.99 }
                ]
            },


            {
                "id": 6,
                "title": "সেকশন ০৬: দুর্যোগে সতর্কবার্তা",
                "topic": "লাল পতাকার সংকেত",
                "image": "https://files.ekmcdn.com/0ec9a8/images/plain-5ft-x-3ft-red-flag-1-4109-p.jpg",
                "content": "লাল পতাকা মানে হলো বিপদের সংকেত। কেউ লাল পতাকা তুললে বুঝতে হবে ঝুঁকি আছে। তখন নিজে সতর্ক হতে হবে এবং সবাইকে সতর্ক হতে হবে।",
                "audio": "audio/section6.mp3",
                "drag_and_drop_matching_game": {
                    "instruction": "তুমি সমুদ্রের পাশে খেলছো, হঠাৎ লাল পতাকা উঠল। তুমি কী করবে? সঠিক উত্তর সবুজ বক্সে এবং ভুল উত্তর লাল বক্সে বসাও।",
                    "type": "dragAndDrop",
                    "items": [
                        { "name": "শুয়ে পরবো", "image": "images/wrong1.png", "isCorrect": false },
                        { "name": "বন্ধুকে জানাব", "image": "images/correct1.png", "isCorrect": true },
                        { "name": "নিরাপদ জায়গায় যাব", "image": "images/correct2.png", "isCorrect": true },
                        { "name": "খেলতে থাকব", "image": "images/wrong2.png", "isCorrect": false }
                    ]
                },
                "transcript": [
                    { "text": "লাল", "start": 0.89, "end": 1.22 },
                    { "text": "পতাকা", "start": 1.22, "end": 1.61 },
                    { "text": "মানে", "start": 1.61, "end": 1.88 },
                    { "text": "হল", "start": 1.88, "end": 2.24 },
                    { "text": "বিপদের", "start": 2.24, "end": 2.75 },
                    { "text": "সংকেত।", "start": 2.75, "end": 3.5 },
                    { "text": "কেউ", "start": 3.5, "end": 3.98 },
                    { "text": "লাল", "start": 3.98, "end": 4.22 },
                    { "text": "পতাকা", "start": 4.22, "end": 4.64 },
                    { "text": "তুললে", "start": 4.64, "end": 5.12 },
                    { "text": "বুঝতে", "start": 5.12, "end": 5.54 },
                    { "text": "হবে", "start": 5.54, "end": 5.9 },
                    { "text": "ঝুঁকি", "start": 5.9, "end": 6.41 },
                    { "text": "আছে।", "start": 6.41, "end": 7.1 },
                    { "text": "তখন", "start": 7.1, "end": 7.7 },
                    { "text": "নিজে", "start": 7.7, "end": 8.09 },
                    { "text": "সতর্ক", "start": 8.09, "end": 8.57 },
                    { "text": "হতে", "start": 8.57, "end": 8.84 },
                    { "text": "হবে", "start": 8.84, "end": 9.08 },
                    { "text": "এবং", "start": 9.08, "end": 9.35 },
                    { "text": "সবাইকে", "start": 9.35, "end": 10.07 },
                    { "text": "সতর্ক", "start": 10.07, "end": 10.76 },
                    { "text": "হতে", "start": 10.76, "end": 11.03 },
                    { "text": "হবে।", "start": 11.03, "end": 12.95 },
                    { "text": "তুমি", "start": 12.95, "end": 13.37 },
                    { "text": "সমুদ্রের", "start": 13.37, "end": 13.91 },
                    { "text": "পাশে", "start": 13.91, "end": 14.21 },
                    { "text": "খেলছ।", "start": 14.21, "end": 14.93 },
                    { "text": "হঠাৎ", "start": 14.93, "end": 15.59 },
                    { "text": "লাল", "start": 15.59, "end": 15.86 },
                    { "text": "পতাকা", "start": 15.86, "end": 16.25 },
                    { "text": "উঠল।", "start": 16.25, "end": 16.79 },
                    { "text": "তুমি", "start": 16.79, "end": 17.18 },
                    { "text": "কী", "start": 17.18, "end": 17.39 },
                    { "text": "করবে?", "start": 17.39, "end": 18.56 },
                    { "text": "সঠিক", "start": 18.56, "end": 19.25 },
                    { "text": "উত্তর", "start": 19.25, "end": 19.91 },
                    { "text": "সবুজ", "start": 19.91, "end": 20.54 },
                    { "text": "বক্সে", "start": 20.54, "end": 21.26 },
                    { "text": "এবং", "start": 21.26, "end": 21.8 },
                    { "text": "ভুল", "start": 21.8, "end": 22.16 },
                    { "text": "উত্তর", "start": 22.16, "end": 22.67 },
                    { "text": "লাল", "start": 22.67, "end": 23.06 },
                    { "text": "বক্সে", "start": 23.06, "end": 23.42 },
                    { "text": "বসাও।", "start": 23.42, "end": 23.96 }
                ]
            }

        ],
    },
    {
        id: 2,
        lesson: "অধ্যায় ০২: বায়ুমণ্ডল",
        image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/earths-moon/lunar-science/earth-atmosphere.jpg?w=1920&h=1142&fit=clip&crop=faces%2Cfocalpoint"
    },
    {
        id: 3,
        lesson: "অধ্যায় ০৩: নদী ও সমুদ্র",
        image: "https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg"
    },
    {
        id: 4,
        lesson: "অধ্যায় ০৪: বন ও উদ্ভিদ",
        image: "https://www.climate-kic.org/wp-content/uploads/2024/03/INFORMA-Opinion-piece-image.png"
    },
    {
        id: 5,
        lesson: "অধ্যায় ০৫: প্রাণীজগৎ",
        image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg"
    },
    {
        id: 6,
        lesson: "অধ্যায় ০৬: পৃথিবীর গঠন",
        image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16134/production/_128402409_earth-core.jpg"
    },
    {
        id: 7,
        lesson: "অধ্যায় ০৭: ভূমিকম্প ও আগ্নেয়গিরি",
        image: "https://images.newscientist.com/wp-content/uploads/2020/12/21145328/volcanoes-f0r7pt_web.jpg"
    }
];


