// However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.
import React, { useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa"; // Import icons

const Note = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [noteData, setNoteData] = useState(props.noteData);
  
    return (
      <div
        className={`${noteData.color} shadow-lg rounded-xl p-4 border border-gray-300 flex flex-col justify-between`}
        style={{ width: "250px", height: "300px" }} // Fixed size
      >
        {isEditing ? (
          <div className="flex flex-col gap-3 h-full">
            <input
              className="border-2 border-gray-300 rounded-md p-2 text-lg font-semibold text-center"
              type="text"
              name="heading"
              placeholder="Note Heading"
              value={noteData.heading}
              onChange={(e) => {
                setNoteData((prev) => ({ ...prev, heading: e.target.value }));
              }}
            />
            <textarea
              className="border-2 border-gray-300 rounded-md p-2 text-base resize-none flex-grow"
              name="description"
              placeholder="Describe your note"
              value={noteData.description}
              onChange={(e) => {
                setNoteData((prev) => ({ ...prev, description: e.target.value }));
              }}
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition flex items-center justify-center gap-2"
              onClick={() => setIsEditing(false)}
            >
              <FaCheck />
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 h-full">
            <h3 className="font-bold text-2xl text-gray-900 text-center">
              {noteData.heading}
            </h3>
            <p className="text-gray-700 text-lg text-center flex-grow overflow-y-auto">
              {noteData.description}
            </p>
            <button
              className="text-blue-500 hover:text-blue-700 p-1 self-end"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit />
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Note;
  