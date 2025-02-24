import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("random");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "'~`!@#$%^&*(){}[]|?<>,.:;";
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [numAllowed, charAllowed, length, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerate();
  }, [length, numAllowed, charAllowed, passwordGenerate]);

  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center">
        <div className="flex flex-row p-4 px-10 m-4 rounded-2xl text-3xl font-semibold bg-blue-500 shadow-4xl">
          Password Generator
        </div>
        <div className="flex flex-row bg-red-800 m-4 p-4 px-6 text-4xl rounded-2xl">
          <input
            type="text"
            value={password}
            id="password"
            name="password"
            placeholder="Your Password"
            readOnly
            ref={passwordRef}
            onChange={() => {
              passwordGenerate();
            }}
          />
          <input type="button" value="Copy" onClick={copyPassword} className="bg-amber-600 py-2 px-6 rounded-2xl hover:bg-amber-500 cursor-pointer text-center"/>
        </div>

        <div className="flex flex-row m-4 text-2xl bg-red-800 p-1 px-3 rounded-sm">
          <input
            onChange={(e) => setLength(e.target.value)}
            type="range"
            min="6"
            max="20"
            name="length"
            value={length}
            className="mx-2"
          />
          <label htmlFor="length" className="mx-2">Length:{length}</label>
          <input
            onChange={() => setNumAllowed((prev) => !prev)}
            type="checkbox"
            id="numbers"
            name="numbers"
            defaultChecked={numAllowed}
            className="mx-2 w-6"
          />
          <label htmlFor="numbers" className="mx-2">Numbers</label>
          <input
            onChange={() => setCharAllowed((prev) => !prev)}
            type="checkbox"
            id="characters"
            name="characters"
            defaultChecked={charAllowed}
            className="mx-2 w-6"
          />
          <label htmlFor="characters" className="mx-2">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
