// In react we cannot pass props directly from one children to another. Instead we have to lift them up to the parent and then pass them down to the child.
import { useState } from "react"
import Note from "./components/Note"
import Sidebar from "./components/Sidebar"

function App() {
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("bg-yellow-400");

  const colors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500",
  ];

  const addNewNote = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(),
        heading: "New Note",
        description: "Note Description",
        color: color,
      },
    ]);
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar onAddNote={addNewNote} color={color} setColor={setColor} colors={colors} />

        {/* Notes container with justify-around and vertical scroll */}
        <div className="p-4 flex flex-wrap justify-around gap-4 flex-1 h-screen overflow-y-auto">
          {notes.map((note) => (
            <Note key={note.id} noteData={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
