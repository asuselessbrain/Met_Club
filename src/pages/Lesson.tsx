/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import flag from "../assets/images/flag.jpg"
import {
    FaCheckCircle,
    FaRegCircle,
    FaPlayCircle,
    FaPauseCircle,
} from "react-icons/fa";
import { indexData } from "./indexData";
import DragAndDropGame from "../components/DragAndDropGame";
import MatchingGame from "../components/MatchingGame";
import DisasterKitGame from "../components/DisasterKitGame";
import Section6WarningGame from "../components/Section6WarningGame";

const Lesson = () => {
    const { id } = useParams<{ id: string }>();
    const [currentSection, setCurrentSection] = useState(0);
    const [completedSections, setCompletedSections] = useState<number[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState<number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const lesson = indexData.find((item) => item.id === Number(id));
    const section = lesson?.sections![currentSection];

    // Stop audio
    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
        setIsPlaying(false);
        setCurrentWordIndex(null);
    };

    // Play audio with transcript sync
    const playAudio = () => {
        if (!audioRef.current) {
            if (!lesson || !section) return;
            const audioPath = `/audios/section${currentSection + 1}.mp3`;
            const audio = new Audio(audioPath);
            audioRef.current = audio;

            audio.ontimeupdate = () => {
                const currentTime = audio.currentTime;
                const currentTranscript = section?.transcript || [];
                const activeWordIndex = currentTranscript.findIndex(
                    (word: any) => currentTime >= word.start && currentTime <= word.end
                );
                setCurrentWordIndex(activeWordIndex !== -1 ? activeWordIndex : null);
            };

            audio.onended = () => {
                setIsPlaying(false);
                setCurrentWordIndex(null);
                audioRef.current = null;
            };
        }

        audioRef.current.play();
        setIsPlaying(true);
    };

    const toggleAudio = () => (isPlaying ? stopAudio() : playAudio());

    // Navigation
    const handlePrev = () => {
        stopAudio();
        if (currentSection > 0) setCurrentSection(currentSection - 1);
    };
    const handleNext = () => {
        stopAudio();
        if (lesson && currentSection < lesson.sections!.length - 1)
            setCurrentSection(currentSection + 1);
    };
    const goToSection = (index: number) => {
        stopAudio();
        if (lesson && (completedSections.includes(index) || index === currentSection)) {
            setCurrentSection(index);
        }
    };

    // Mark completed
    useEffect(() => {
        if (!lesson || !section) return;
        setCompletedSections((prev) => [...new Set([...prev, currentSection])]);
    }, [currentSection, lesson, section]);
    useEffect(() => () => stopAudio(), []);

    if (!lesson || !lesson.sections)
        return (
            <div className="flex justify-center items-center h-screen text-xl text-red-600">
                Lesson not found
            </div>
        );

    // Transcript line ranges for sections
    const getTranscriptLineRanges = (sectionIndex: number) => {
        switch (sectionIndex) {
            case 0:
                return [
                    { start: 1.13, end: 4.25, style: "text-4xl mb-6 font-bold text-center hidden" },
                    { start: 4.25, end: 5.69, style: "text-[24px] font-semibold text-left" },
                    { start: 5.69, end: 17.69, style: "text-[20px] font-normal text-left" },
                    { start: 17.69, end: 28.76, style: "italic text-[20px] text-left" },
                    { start: 28.76, end: 36.505, style: "text-[20px] font-semibold text-green-600 text-left" },
                ];
            case 1: // Section 2
                return [
                    { start: 1.55, end: 3.11, style: "text-[24px] font-semibold text-left" },
                    { start: 3.11, end: 13.28, style: "text-[20px] text-left" },
                    { start: 13.28, end: 17.66, style: "text-[20px] font-semibold text-green-600 text-left" },
                ];
            case 3: // Section 4
                return [
                    { start: 0.35, end: 2.3, style: "text-[24px] font-semibold text-left" },
                    { start: 2.3, end: 19.58, style: "text-[20px] text-left" },
                    { start: 19.58, end: 25.91, style: "text-[20px] font-semibold text-green-600 text-left" },
                ];
            default:
                return null;
        }
    };

    const transcriptLineRanges = getTranscriptLineRanges(currentSection);

    const groupedTranscript =
        transcriptLineRanges && section?.transcript
            ? transcriptLineRanges.map(({ start, end, style }) => {
                const words = section?.transcript.filter((w: any) => w.start >= start && w.end <= end);
                return { words, style, start, end };
            })
            : null;

    // Section titles
    const sectionTitle =
        currentSection === 0
            ? "সেকশন ০১: আবহাওয়া"

            : currentSection === 1
                ? "সেকশন ০২: জলবায়ু"
                : currentSection === 2
                    ? "সেকশন ০৩: আবহাওয়া সম্পর্কিত সারঞ্জাম"
                    : currentSection === 3
                        ? "সেকশন ০৪: দুর্যোগ"
                        : currentSection === 4
                            ? "সেকশন ০৫: দুর্যোগে প্রয়োজনীয় উপকরণ"
                            : currentSection === 5
                                ? "সেকশন ০৬: দুর্যোগে সতর্কবার্তা"
                                : null;

    return (
        <div className="min-h-screen flex flex-col bg-[#f3eded]">
            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-4 p-4 bg-gray-100 sticky top-0 z-20 shadow-md">
                {lesson.sections.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSection(index)}
                        className="cursor-pointer flex flex-col items-center"
                    >
                        {completedSections.includes(index) ? (
                            <FaCheckCircle className="text-green-500 text-2xl" />
                        ) : (
                            <FaRegCircle
                                className={`text-2xl ${currentSection === index ? "text-yellow-400" : "text-gray-300"
                                    }`}
                            />
                        )}
                        <span className="text-xs mt-1">{index + 1}</span>
                    </div>
                ))}
            </div>

            {/* Section Content */}
            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-7xl w-full h-full flex flex-col justify-between">

                    {currentSection === 0 && section?.transcript && (
                        <div
                            className="mb-4 max-w-7xl w-full text-center text-4xl font-bold"
                            style={{ wordSpacing: "0.5rem" }} // adjust spacing as needed
                        >
                            {section.transcript
                                .filter((w: any) => w.start >= 1.13 && w.end <= 4.25)
                                .map((w: any, idx: number) => {
                                    const isActive =
                                        currentWordIndex !== null && section.transcript.indexOf(w) === currentWordIndex;
                                    return (
                                        <span
                                            key={idx}
                                            className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                        >
                                            {w.text}
                                        </span>
                                    );
                                })}
                        </div>
                    )}
                    {/* Section Title */}
                    {sectionTitle && (
                        <h2 className="text-3xl font-semibold text-center mb-4">{sectionTitle}</h2>
                    )}

                    {/* Audio */}
                    {section?.audio && (
                        <div className="flex items-center mb-4 gap-2">
                            <button
                                onClick={toggleAudio}
                                className="w-16 h-16 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                            >
                                {isPlaying ? (
                                    <FaPauseCircle className="text-5xl" />
                                ) : (
                                    <FaPlayCircle className="text-5xl" />
                                )}
                            </button>
                            <p className="ml-2 text-gray-800 font-medium">বাক্যটি শুনুন ও অনুসরণ করুন</p>
                        </div>
                    )}

                    {/* Section 3 Cards */}
                    {currentSection === 2 && section?.transcript && (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
                                {[
                                    { start: 0.68, end: 11.81, icon: "thermometer", boldRangeAboveImage: [0.68, 1.73], imageRange: [1.73, 2.48] },
                                    { start: 11.81, end: 24.8, icon: "barometer", boldRangeAboveImage: [11.81, 12.89], imageRange: [12.89, 13.85] },
                                    { start: 24.8, end: 35.45, icon: "sheet", boldRangeAboveImage: [24.8, 25.52], imageRange: [26.9, 29.75] },
                                    { start: 35.45, end: 45.59, icon: "fan", boldRangeAboveImage: [35.45, 36.23], imageRange: [37.37, 39.74] },
                                ].map((card, idx) => {
                                    const wordsInCard = section?.transcript.filter(
                                        (w: any) => w.start >= card.start && w.end <= card.end
                                    );

                                    // Words above image
                                    const wordsAboveImage = wordsInCard.filter(
                                        (w: any) => w.start >= card.boldRangeAboveImage[0] && w.end <= card.boldRangeAboveImage[1]
                                    );

                                    // Words below image
                                    const wordsBelowImage = wordsInCard.filter(
                                        (w: any) => w.start >= card.imageRange[1] && w.end <= card.end
                                    );

                                    return (
                                        <div
                                            key={idx}
                                            className="relative bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start break-words"
                                        >
                                            {/* Bold text above image */}
                                            <div className="text-[20px] font-bold text-left mb-2">
                                                {wordsAboveImage.map((w: any, i: number) => {
                                                    const isActive =
                                                        currentWordIndex !== null &&
                                                        section?.transcript.indexOf(w) === currentWordIndex;
                                                    return (
                                                        <span
                                                            key={i}
                                                            className={`mr-1 ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                                        >
                                                            {w.text}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            {/* Image in the middle */}
                                            <div className="flex justify-center w-full my-2">
                                                <img
                                                    src={`/images/${card.icon}.png`}
                                                    alt={card.icon}
                                                    className="w-48 h-48"
                                                />
                                            </div>

                                            {/* Only text below image */}
                                            <div className="text-[20px] font-normal w-full break-words">
                                                {wordsBelowImage.map((w: any, i: number) => {
                                                    const isActive =
                                                        currentWordIndex !== null &&
                                                        section?.transcript.indexOf(w) === currentWordIndex;
                                                    return (
                                                        <span
                                                            key={i}
                                                            className={`mr-1 ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                                        >
                                                            {w.text}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Final green semibold line 45.59 -> 51.35 */}
                            <div className="text-[20px] font-semibold mt-4 text-left text-green-600">
                                {section?.transcript
                                    .filter((w: any) => w.start >= 45.59 && w.end <= 51.35)
                                    .map((w: any, idx: number) => {
                                        const isActive =
                                            currentWordIndex !== null &&
                                            section?.transcript.indexOf(w) === currentWordIndex;
                                        return (
                                            <span
                                                key={idx}
                                                className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                            >
                                                {w.text}
                                            </span>
                                        );
                                    })}
                            </div>
                        </>
                    )}


                    {/* Section 5 Cards */}
                    {currentSection === 4 && (
                        <>
                            {/* First line 1.7 -> 5.78 */}
                            <div className="text-[20px] font-normal mb-4 text-left">
                                {section?.transcript
                                    .filter((w: any) => w.start >= 1.7 && w.end <= 5.78)
                                    .map((w: any, idx: number) => {
                                        const isActive =
                                            currentWordIndex !== null &&
                                            section?.transcript.indexOf(w) === currentWordIndex;
                                        return (
                                            <span
                                                key={idx}
                                                className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""
                                                    }`}
                                            >
                                                {w.text}
                                            </span>
                                        );
                                    })}
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                {[
                                    { start: 5.78, end: 9.29, icon: "water", boldRanges: [[5.78, 7.1], [7.1, 9.29]] },
                                    { start: 9.29, end: 12.35, icon: "biscuit", boldRanges: [[9.29, 10.4], [10.4, 12.35]] },
                                    { start: 12.35, end: 15.83, icon: "torch", boldRanges: [[12.35, 13.46], [13.46, 15.83]] },
                                    { start: 15.83, end: 22.97, icon: "firstaid", boldRanges: [[15.83, 19.13], [19.13, 22.97]] },
                                    { start: 22.97, end: 26.78, icon: "mobile", boldRanges: [[22.97, 24.62], [24.62, 26.78]] },
                                ].map((card, idx) => {
                                    const wordsInCard = section?.transcript.filter(
                                        (w: any) => w.start >= card.start && w.end <= card.end
                                    );

                                    return (
                                        <div
                                            key={idx}
                                            className="relative bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
                                        >
                                            {/* Icon on top */}
                                            <div className="mb-4 bg-white p-2 rounded-full shadow-md">
                                                <img
                                                    src={`/icons/${card.icon}.png`}
                                                    alt={card.icon}
                                                    className="w-12 h-12"
                                                />
                                            </div>

                                            {/* Card text */}
                                            <div className="flex flex-col gap-2 w-full">
                                                {card.boldRanges.map((range, rIdx) => {
                                                    const lineWords = wordsInCard?.filter(
                                                        (w: any) => w.start >= range[0] && w.end <= range[1]
                                                    );
                                                    return (
                                                        <div
                                                            key={rIdx}
                                                            className={`text-[20px] ${rIdx === 0 ? "font-bold" : "font-normal"}`}
                                                        >
                                                            {lineWords?.map((w: any, i: number) => {
                                                                const isActive =
                                                                    currentWordIndex !== null &&
                                                                    section?.transcript.indexOf(w) === currentWordIndex;
                                                                return (
                                                                    <span
                                                                        key={i}
                                                                        className={`mr-1 ${isActive ? "bg-yellow-300 px-1 rounded" : ""
                                                                            }`}
                                                                    >
                                                                        {w.text}
                                                                    </span>
                                                                );
                                                            })}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Last line 26.78 -> 29.99 */}
                            <div className="text-[20px] font-semibold mt-4 text-left text-green-600">
                                {section?.transcript
                                    .filter((w: any) => w.start >= 26.78 && w.end <= 29.99)
                                    .map((w: any, idx: number) => {
                                        const isActive =
                                            currentWordIndex !== null &&
                                            section?.transcript.indexOf(w) === currentWordIndex;
                                        return (
                                            <span
                                                key={idx}
                                                className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""
                                                    }`}
                                            >
                                                {w.text}
                                            </span>
                                        );
                                    })}
                            </div>
                        </>
                    )}


                    {/* Section 6 Flag and transcript */}
                    {currentSection === 5 && section?.transcript && (
                        <div className="mt-4 flex flex-col items-start">
                            {/* Flag centered */}
                            <div className="w-full flex justify-center mb-4">
                                <img src={flag} alt="flag" className="w-80 h-48 rounded-lg" />
                            </div>

                            {/* Transcript lines */}
                            <div className="text-left max-w-7xl w-full flex flex-col gap-2">
                                {/* First line 0.89 -> 12.95 */}
                                <div className="text-[20px] font-normal">
                                    {section?.transcript
                                        .filter((w: any) => w.start >= 0.89 && w.end <= 12.95)
                                        .map((w: any, idx: number) => {
                                            const isActive = currentWordIndex === section?.transcript.indexOf(w);
                                            return (
                                                <span
                                                    key={idx}
                                                    className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                                >
                                                    {w.text}
                                                </span>
                                            );
                                        })}
                                </div>

                                {/* Second line 12.95 -> 23.96 */}
                                <div className="text-[20px] font-semibold text-green-600">
                                    {section?.transcript
                                        .filter((w: any) => w.start >= 12.95 && w.end <= 23.96)
                                        .map((w: any, idx: number) => {
                                            const isActive = currentWordIndex === section?.transcript.indexOf(w);
                                            return (
                                                <span
                                                    key={idx}
                                                    className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                                >
                                                    {w.text}
                                                </span>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Other Sections (excluding 3) */}
                    {currentSection !== 2 && currentSection !== 4 && currentSection !== 5 && section?.transcript && (
                        <div className="mt-4 flex flex-col gap-3 max-w-7xl w-full">
                            {groupedTranscript
                                ? groupedTranscript.map(({ words, style }, idx) => {
                                    const alignmentClass = style.includes("text-center") ? "justify-center" : "justify-start";
                                    return (
                                        <div
                                            key={idx}
                                            className={`flex flex-wrap gap-2 ${alignmentClass} ${style}`}
                                            style={{ textAlign: style.includes("text-center") ? "center" : "left" }}
                                        >
                                            {words.map((word: any, index: number) => {
                                                const isActive =
                                                    currentWordIndex !== null &&
                                                    section?.transcript.indexOf(word) === currentWordIndex;
                                                return (
                                                    <span
                                                        key={index}
                                                        className={`transition-all duration-150 ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}
                                                    >
                                                        {word.text}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                                : section?.transcript.map((word: any, idx: number) => {
                                    const isActive = currentWordIndex === idx;
                                    return (
                                        <span key={idx} className={`mr-1 mb-1 inline-block ${isActive ? "bg-yellow-300 px-1 rounded" : ""}`}>
                                            {word.text}
                                        </span>
                                    );
                                })}
                        </div>
                    )}

                    {/* Games */}
                    <div className="mt-6">
                        {section?.game && <DragAndDropGame items={section?.game.items || []} />}
                        {section?.matching_game && (
                            <MatchingGame
                                items={section?.matching_game.items || []}
                                instruction={section?.matching_game.instruction}
                            />
                        )}
                        {section?.id === 5 && section?.disestar_game && (
                            <DisasterKitGame
                                items={section?.disestar_game.items}
                            />
                        )}
                        {section?.id === 6 && section?.drag_and_drop_matching_game && <Section6WarningGame />}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentSection === 0}
                            className={`px-6 py-2 rounded-lg ${currentSection === 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-green-500 text-white hover:bg-green-600"
                                }`}
                        >
                            পূর্ববর্তী
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentSection === lesson.sections.length - 1}
                            className={`px-6 py-2 rounded-lg ${currentSection === lesson.sections.length - 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-green-500 text-white hover:bg-green-600"
                                }`}
                        >
                            পরবর্তী
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson;
