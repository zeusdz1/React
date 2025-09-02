import React, { useState, useCallback, useEffect, useRef } from 'react';


const usePasswordGenerator = (length, numberAllowed, characterAllowed) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [strength, setStrength] = useState('');

  const passwordGenerator = useCallback(() => {
    setError('');
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!str) {
      setError('Please select at least one character type.');
      setPassword('');
      setStrength('');
      return;
    }

    if (length < 6 || length > 100) {
      setError('Password length must be between 6 and 100.');
      setPassword('');
      setStrength('');
      return;
    }

    let pass = '';
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);

   
    if (length < 8) {
      setStrength('Weak');
    } else if (length < 12) {
      setStrength('Medium');
    } else {
      setStrength('Strong');
    }
  }, [length, numberAllowed, characterAllowed]);

  
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return { password, error, strength, passwordGenerator };
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);


  const { password, error, strength } = usePasswordGenerator(
    length,
    numberAllowed,
    characterAllowed
  );

 
  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return;
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h1>

    
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          className="outline-none w-full py-2 px-3 text-gray-900"
          placeholder="Password"
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`outline-none px-4 py-2 shrink-0 transition ${
            copied ? 'bg-green-600' : 'bg-blue-700 hover:bg-blue-600'
          } text-white`}
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
          <label htmlFor="numberInput" className="text-white">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={characterAllowed}
            id="characterInput"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-white">
            Include Special Characters
          </label>
        </div>
      </div>

     
      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

      
      {strength && !error && (
        <p
          className={`mt-3 text-sm font-semibold ${
            strength === 'Weak'
              ? 'text-red-400'
              : strength === 'Medium'
              ? 'text-yellow-400'
              : 'text-green-400'
          }`}
        >
          Strength: {strength}
        </p>
      )}
    </div>
  );
};

export default PasswordGenerator;
