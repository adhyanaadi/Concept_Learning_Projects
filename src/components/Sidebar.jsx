import React from "react";

function Sidebar({ onAddNote, color, setColor, colors }) {
  return (
    <div className="sidebar flex w-[10%] flex-col items-center border-r-2 h-screen p-4">
      <button onClick={onAddNote} className="bg-black text-white font-light text-6xl p-3 pt-0 rounded-4xl px-4 w-fit my-8">
        +
      </button>
      <div className="flex flex-col gap-4">
        {colors.map((bgColor) => (
          <label key={bgColor} className="cursor-pointer">
            <input
              type="radio"
              name="color"
              className="hidden"
              checked={color === bgColor}
              onChange={() => setColor(bgColor)} // Update color on selection
            />
            <div
              className={`${bgColor} w-8 h-8 rounded-full border-3 ${
                color === bgColor ? "border-black" : "border-transparent"
              } transition-all`}
            ></div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
