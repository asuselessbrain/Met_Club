import React, { useState, useEffect, useRef } from "react";

export interface MatchItem {
  id?: number;
  name: string;
  image: string;
  usage: string;
}

interface MatchingGameProps {
  items: MatchItem[];
  instruction?: string;
}

interface SelectedItem {
  type: "image" | "usage";
  index: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const MatchingGame: React.FC<MatchingGameProps> = ({ items }) => {
  const [shuffledImages, setShuffledImages] = useState<MatchItem[]>([]);
  const [shuffledUsage, setShuffledUsage] = useState<MatchItem[]>([]);
  const [selected, setSelected] = useState<SelectedItem | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [lines, setLines] = useState<{ from: number; to: number; color: string }[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const usageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const itemsWithId = items.map((item, idx) => ({ ...item, id: idx }));
    setShuffledImages(shuffleArray(itemsWithId));
    setShuffledUsage(shuffleArray(itemsWithId));
  }, [items]);

  useEffect(() => {
    // যদি সবগুলো match হয়ে যায়
    if (matchedPairs.length === items.length && items.length > 0) {
      setShowMessage(true);
    }
  }, [matchedPairs, items.length]);

  const handleClick = (type: "image" | "usage", index: number) => {
    if (selected && selected.type !== type) {
      const firstIndex = selected.index;
      const firstItem =
        selected.type === "image"
          ? shuffledImages[firstIndex]
          : shuffledUsage[firstIndex];
      const secondItem =
        type === "image" ? shuffledImages[index] : shuffledUsage[index];

      const correct = firstItem.id === secondItem.id;
      const color = correct ? "green" : "red";

      const from = selected.type === "usage" ? firstIndex : index;
      const to = selected.type === "image" ? firstIndex : index;

      setLines((prev) => [...prev, { from, to, color }]);

      if (correct) {
        setMatchedPairs((prev) => [...prev, firstItem.id!]);
      }

      setSelected(null);
    } else {
      setSelected({ type, index });
    }
  };

  const isMatched = (id?: number) => id !== undefined && matchedPairs.includes(id);

  const getPositions = () => {
    const positions: {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      color: string;
    }[] = [];

    const containerRect = containerRef.current?.getBoundingClientRect();

    lines.forEach((line) => {
      const fromEl = usageRefs.current[line.from];
      const toEl = imageRefs.current[line.to];
      if (fromEl && toEl && containerRect) {
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        const fromX = fromRect.right - containerRect.left;
        const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
        const toX = toRect.left - containerRect.left;
        const toY = toRect.top + toRect.height / 2 - containerRect.top;

        positions.push({ fromX, fromY, toX, toY, color: line.color });
      }
    });

    return positions;
  };

  const linePositions = getPositions();

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center">

      {/* SVG Lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {linePositions.map((line, idx) => (
          <line
            key={idx}
            x1={line.fromX}
            y1={line.fromY}
            x2={line.toX}
            y2={line.toY}
            stroke={line.color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Matching Columns */}
      <div className="flex justify-between w-full max-w-5xl relative z-10">
        {/* Left Side (Text Usages) */}
        <div className="flex flex-col justify-center gap-8">
          {shuffledUsage.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                usageRefs.current[idx] = el;
              }}
              onClick={() => handleClick("usage", idx)}
              className={`p-4 min-h-[144px] flex items-center justify-center border rounded-md text-center cursor-pointer font-medium text-lg bg-white
                ${
                  isMatched(item.id)
                    ? "opacity-50 pointer-events-none"
                    : selected?.type === "usage" && selected.index === idx
                    ? "border-blue-400"
                    : "border-gray-300"
                }`}
            >
              {item.usage}
            </div>
          ))}
        </div>

        {/* Right Side (Images only) */}
        <div className="flex flex-col justify-center gap-8">
          {shuffledImages.map((item, idx) => (
            <img
              key={idx}
              ref={(el) => {
                imageRefs.current[idx] = el;
              }}
              src={item.image}
              alt={item.name}
              onClick={() => handleClick("image", idx)}
              className={`w-36 h-36 object-contain cursor-pointer
                ${
                  isMatched(item.id)
                    ? "opacity-50 pointer-events-none"
                    : selected?.type === "image" && selected.index === idx
                    ? "ring-2 ring-blue-400 rounded-md"
                    : ""
                }`}
            />
          ))}
        </div>
      </div>

      {/* ✅ Success Message */}
      {showMessage && (
        <div className="mt-10 text-green-600 font-semibold text-xl bg-green-100 px-6 py-3 rounded-lg shadow">
          🎉 সবগুলো ঠিকভাবে মেলানো হয়েছে! চমৎকার কাজ! 🎉
        </div>
      )}
    </div>
  );
};

export default MatchingGame;
