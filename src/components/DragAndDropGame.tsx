import { useState, useMemo } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export interface GameItem {
  name: string;
  image: string;
}

interface GameProps {
  items: GameItem[];
}

// Utility: Shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Draggable image item
const DraggableItem = ({ item }: { item: GameItem }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "GAME_ITEM",
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={dragRef as unknown as React.Ref<HTMLImageElement>}
      src={item.image}
      alt={item.name}
      className={`w-44 h-44 object-cover rounded-lg cursor-grab border-2 transition-all duration-300 ${
        isDragging ? "opacity-50 scale-95" : "opacity-100"
      }`}
    />
  );
};

// Drop target box
const DropTarget = ({
  targetName,
  onDrop,
  children,
}: {
  targetName: string;
  onDrop: (item: GameItem) => void;
  children?: React.ReactNode;
}) => {
  const [{ isOver }, dropRef] = useDrop<GameItem, void, { isOver: boolean }>(
    () => ({
      accept: "GAME_ITEM",
      drop: (item) => onDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    })
  );

  return (
    <div
      ref={dropRef as unknown as React.Ref<HTMLDivElement>}
      className={`w-28 h-28 flex items-center justify-center border-2 rounded-lg m-2 text-center text-sm font-medium transition-all duration-200 ${
        isOver ? "bg-green-100 border-green-400" : "bg-gray-100 border-gray-300"
      }`}
    >
      {children || <span className="text-gray-600">{targetName}</span>}
    </div>
  );
};

const DragAndDropGame = ({ items = [] }: GameProps) => {
  const [matched, setMatched] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState<string | null>(null);

  // Shuffle items once per component mount
  const shuffledItems = useMemo(() => shuffleArray(items), [items]);

  const handleDrop = (item: GameItem, targetName: string) => {
    if (item.name === targetName) {
      if (!matched.includes(targetName)) {
        setMatched((prev) => [...prev, targetName]);
        setWrongMatch(null);
      }
    } else {
      setWrongMatch(`❌ "${item.name}" এবং "${targetName}" মেলেনি! আবার চেষ্টা করো।`);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full">

        {/* Draggable items */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {shuffledItems
            .filter((item) => !matched.includes(item.name))
            .map((item) => (
              <DraggableItem key={item.name} item={item} />
            ))}
        </div>

        {/* Drop targets */}
        <div className="flex flex-wrap gap-4 justify-center">
          {items.map((item) => (
            <DropTarget
              key={item.name}
              targetName={item.name}
              onDrop={(droppedItem) => handleDrop(droppedItem, item.name)}
            >
              {matched.includes(item.name) && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
            </DropTarget>
          ))}
        </div>

        {/* Feedback Messages */}
        {wrongMatch && (
          <p className="mt-4 text-center text-red-500 font-semibold text-lg">
            {wrongMatch}
          </p>
        )}
        {matched.length === items.length && (
          <p className="mt-4 text-center text-green-600 font-bold text-xl">
            🎉 সবগুলো মিলিয়ে গেছে! চমৎকার কাজ! 🎉
          </p>
        )}
      </div>
    </DndProvider>
  );
};

export default DragAndDropGame;
