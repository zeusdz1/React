import React, { useState, useCallback, useEffect } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    setError('');
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!str) {
      setError('Please select at least one character type.');
      setPassword('');
      return;
    }

    if (length < 6 || length > 100) {
      setError('Password length must be between 6 and 100.');
      setPassword('');
      return;
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
    }, [length, numberAllowed, characterAllowed]);

    const copyPasswordToClipboard = () => {
      if (!password) return;
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    useEffect(() => {
      passwordGenerator();
    }, [length, numberAllowed, characterAllowed, passwordGenerator]);


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center text-xl font-semibold mb-4">
        Password Generator
      </h1>

    
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
       <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-gray-900"
          placeholder="Password"
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-4 py-2 shrink-0 hover:bg-blue-600 transition"
          onClick={copyPasswordToClipboard}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      
      <div className="flex flex-col gap-y-3 text-sm">
      
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-white">Length: {length}</label>
        </div>

       
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-white">Include Numbers</label>
        </div>

        
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-white">Include Special Characters</label>
        </div>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordGenerator;
