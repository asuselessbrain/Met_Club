import { useState, useEffect, useMemo } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface GameItem {
  name: string;
  isCorrect: boolean;
}

interface DropBoxProps {
  color: string;
  onDrop: (item: GameItem) => void;
  droppedItems: GameItem[];
}

const DropBox = ({ color, droppedItems, onDrop }: DropBoxProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ANSWER",
    drop: (item: GameItem) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className={`rounded-xl p-4 min-h-[70px] w-full sm:w-56 text-left font-semibold text-lg shadow-md border transition-all duration-200 ${
        isOver ? "scale-105 shadow-xl" : ""
      } ${color}`}
    >
      {droppedItems.map((item, idx) => (
        <p key={idx} className="py-1 pl-2">
          {item.name}
        </p>
      ))}
    </div>
  );
};

const DraggableItem = ({ item }: { item: GameItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ANSWER",
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`border border-blue-400 rounded-lg px-4 py-2 mb-3 bg-blue-50 hover:bg-blue-100 text-gray-800 text-left text-lg font-medium cursor-move transition w-full sm:w-56 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {item.name}
    </div>
  );
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Section6WarningGame = () => {
  const initialItems: GameItem[] = useMemo(
    () => [
      { name: "শুয়ে পরবো", isCorrect: false },
      { name: "বন্ধুকে জানাব", isCorrect: true },
      { name: "নিরাপদ জায়গায় যাব", isCorrect: true },
      { name: "খেলতে থাকব", isCorrect: false },
    ],
    []
  );

  const dropBoxOrder = [
    { name: "শুয়ে পরবো", color: "bg-red-400 text-[20px] text-white border-red-500", isGreen: false },
    { name: "বন্ধুকে জানাব", color: "bg-green-400 text-[20px] text-white border-green-500", isGreen: true },
    { name: "নিরাপদ জায়গায় যাব", color: "bg-green-400 text-[20px] text-white border-green-500", isGreen: true },
    { name: "খেলতে থাকব", color: "bg-red-400 text-[20px] text-white border-red-500", isGreen: false },
  ];

  const [availableItems, setAvailableItems] = useState<GameItem[]>([]);
  const [greenBoxes, setGreenBoxes] = useState<GameItem[]>([]);
  const [redBoxes, setRedBoxes] = useState<GameItem[]>([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setAvailableItems(shuffleArray(initialItems));
  }, [initialItems]);

  const handleDrop = (isGreen: boolean, item: GameItem) => {
    const alreadyDropped =
      greenBoxes.find((x) => x.name === item.name) ||
      redBoxes.find((x) => x.name === item.name);
    if (alreadyDropped) return;

    if (isGreen && item.isCorrect) {
      setGreenBoxes((prev) => [...prev, item]);
      setFeedback("✅ সঠিক উত্তর!");
    } else if (!isGreen && !item.isCorrect) {
      setRedBoxes((prev) => [...prev, item]);
      setFeedback("✅ ভুল উত্তরটি সঠিক স্থানে!");
    } else {
      setFeedback("❌ ভুল হয়েছে! আবার চেষ্টা করো।");
    }
  };

  const allCorrect =
    greenBoxes.length === initialItems.filter((i) => i.isCorrect).length &&
    redBoxes.length === initialItems.filter((i) => !i.isCorrect).length;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-6">

        {/* Left and Right Columns */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Left: Draggable items */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            {availableItems.map((item) => (
              <DraggableItem key={item.name} item={item} />
            ))}
          </div>

          {/* Right: Drop boxes */}
          <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
            {dropBoxOrder.map((box) => {
              const droppedItems = box.isGreen
                ? greenBoxes.filter((i) => i.name === box.name)
                : redBoxes.filter((i) => i.name === box.name);

              return (
                <DropBox
                  key={box.name}
                  color={box.color}
                  droppedItems={droppedItems}
                  onDrop={(i) => handleDrop(box.isGreen, i)}
                />
              );
            })}
          </div>
        </div>

        {feedback && (
          <p
            className={`text-center text-lg font-semibold mt-6 ${
              feedback.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        )}

        {allCorrect && (
          <p className="text-center text-2xl font-bold mt-6 text-purple-600">
            🎉 অভিনন্দন! সবগুলো সঠিকভাবে বসানো হয়েছে।
          </p>
        )}
      </div>
    </DndProvider>
  );
};

export default Section6WarningGame;
