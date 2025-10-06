/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface GameItem {
    name: string;
    correct: boolean;
}

interface DisasterKitGameProps {
    items: GameItem[];
}

const DisasterKitGame: React.FC<DisasterKitGameProps> = ({ items }) => {
    const [availableItems, setAvailableItems] = useState<GameItem[]>(items);
    const [droppedItems, setDroppedItems] = useState<GameItem[]>([]);
    const [message, setMessage] = useState<string>("");
    const [gameFinished, setGameFinished] = useState<boolean>(false);

    const requiredItems = items.filter((item) => item.correct);

    const handleItemClick = (item: GameItem) => {
        if (gameFinished) return;

        // Duplicate check
        if (droppedItems.find((i) => i.name === item.name)) {
            setMessage("⚠️ এই আইটেমটি আগেই রাখা হয়েছে!");
            return;
        }

        // ❌ ভুল আইটেম হলে ব্যাগে না যাবে
        if (!item.correct) {
            setMessage("❌ ভুল আইটেম! এইটা ব্যাগে রাখা যাবে না।");
            return;
        }

        // ✅ সঠিক আইটেম হলে ব্যাগে যাবে
        const updatedDropped = [...droppedItems, item];
        setDroppedItems(updatedDropped);

        // তালিকা থেকে সরাও
        const updatedAvailable = availableItems.filter((i) => i.name !== item.name);
        setAvailableItems(updatedAvailable);

        // Feedback
        setMessage("✅ সঠিক আইটেম রাখা হয়েছে!");

        // Check if finished
        const correctDroppedCount = updatedDropped.filter((i) => i.correct).length;
        if (correctDroppedCount === requiredItems.length) {
            setMessage("🎉 খুব ভালো! সব সঠিক জিনিস ব্যাগে আছে!");
            setGameFinished(true);
        }
    };

    const handleReset = () => {
        setDroppedItems([]);
        setAvailableItems(items);
        setMessage("");
        setGameFinished(false);
    };

    return (
        <div className="flex flex-col items-center text-center px-4">

            <div className="flex flex-col md:flex-row items-start justify-center gap-10 mb-6">
                {/* 📜 Left - Available Items */}
                <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">তালিকা</h4>
                    <div className="flex flex-wrap justify-center max-w-xs">
                        {availableItems.length === 0 ? (
                            <p className="text-gray-500 text-sm">সব আইটেম ব্যাগে রাখা হয়েছে!</p>
                        ) : (
                            availableItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleItemClick(item)}
                                    disabled={gameFinished}
                                    className={`px-4 py-2 m-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg shadow-md text-gray-800 font-medium transition-transform hover:scale-105 ${
                                        gameFinished ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* 🎒 Right - Bag */}
                <div className="relative flex flex-col items-center">
                    <div
                        className={`relative w-52 h-64 bg-gradient-to-b from-red-400 to-red-600 rounded-b-[40px] border-[3px] border-red-700 shadow-2xl overflow-hidden flex flex-col justify-end items-center ${
                            gameFinished ? "opacity-70" : ""
                        }`}
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-red-700 rounded-t-[35px] border-4 border-red-800 shadow-inner flex justify-center items-center">
                            <div className="w-16 h-2 bg-gray-200 rounded-full" />
                        </div>

                        <div className="absolute top-10 w-40 h-1 bg-gray-300 rounded-full"></div>

                        <div className="pb-10 flex flex-wrap justify-center items-end w-full">
                            {droppedItems.length === 0 ? (
                                <p className="text-white text-sm mt-6 animate-pulse">ব্যাগে কিছু রাখুন</p>
                            ) : (
                                droppedItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="m-1 px-2 py-1 bg-white text-gray-800 rounded-md text-xs font-medium shadow-sm"
                                    >
                                        {item.name}
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="absolute bottom-0 w-full h-16 bg-red-700 border-t-4 border-red-800 rounded-b-[40px] flex justify-center items-center">
                            <div className="w-2/3 h-2 bg-gray-300 rounded-full" />
                        </div>
                    </div>
                    <p className="mt-3 font-semibold text-gray-700 text-center">🎒 আমার জরুরি ব্যাগ</p>
                </div>
            </div>

            {message && (
                <p
                    className={`mt-2 font-semibold transition-all ${
                        message.includes("❌")
                            ? "text-red-600"
                            : message.includes("⚠️")
                            ? "text-yellow-600"
                            : "text-green-600"
                    }`}
                >
                    {message}
                </p>
            )}

            {gameFinished && (
                <button
                    onClick={handleReset}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all"
                >
                    🔄 আবার খেলুন
                </button>
            )}
        </div>
    );
};

export default DisasterKitGame;
