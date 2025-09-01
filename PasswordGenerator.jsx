import React, { useState, useCallback } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btnFlash, setBtnFlash] = useState(false);

  const passwordGenerator = useCallback(() => {
    if (length < 6) {
      alert("Password length must be at least 6.");
      return;
    }

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = lower + upper;
    let guaranteed = "";

    if (numberAllowed) {
      charset += numbers;
      guaranteed += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (characterAllowed) {
      charset += special;
      guaranteed += special[Math.floor(Math.random() * special.length)];
    }

    let newPassword = guaranteed;
    for (let i = guaranteed.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

   
    newPassword = newPassword.split("").sort(() => 0.5 - Math.random()).join("");

    setPassword(newPassword);

  
    setBtnFlash(true);
    setTimeout(() => setBtnFlash(false), 300);
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-xl font-bold">
        Password Generator
      </h1>

    
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button
          className={`outline-none px-3 py-0.5 shrink-0 transition-colors ${
            btnFlash ? "bg-green-600" : "bg-blue-700"
          } text-white`}
          onClick={passwordGenerator}
        >
          Generate
        </button>
      </div>

      
      <div className="flex flex-col gap-y-3 text-sm">
      
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

       
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>

       
        <p className="text-gray-400 text-xs mt-2">
          Tip: Longer passwords with numbers + special characters are stronger 🔒
        </p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
