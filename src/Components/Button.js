import React, { useState } from 'react';
const Button = () => {
  const [colors, setColors] = useState({
    colorA: 'black',
    colorB: 'black',
    colorC: 'black',
    colorD: 'black',
  });

  const [array, setArray] = useState([]);

  const checkAndInsert = (x, exist) => {
    let arr = [...array];
    if (!exist) {
      arr.push(x);
    } else {
      arr = arr.filter((e) => e !== x);
    }
    console.log(arr);
    setArray(arr);
  };

  return (
    <div className="flex gap-40 flex-wrap p-6">
      <button
        className="text-purple-500 border border-black font-bold uppercase text-xs px-8 py-4 "
        style={{ backgroundColor: `${colors.colorA}` }}
        onClick={() => {
          if (colors.colorA === 'black') {
            checkAndInsert('A', false);
          } else {
            checkAndInsert('A', true);
          }
          setColors((prevColors) =>
            colors.colorA === 'black'
              ? { ...prevColors, colorA: 'purple' }
              : { ...prevColors, colorA: 'black' }
          );
        }}
      >
        A
      </button>
      <button
        className="text-blue-500 border border-black font-bold uppercase text-xs px-8 py-4 "
        style={{ backgroundColor: `${colors.colorB}` }}
        onClick={() => {
          if (colors.colorB === 'black') {
            checkAndInsert('B', false);
          } else {
            checkAndInsert('B', true);
          }
          setColors((prevColors) =>
            colors.colorB === 'black'
              ? { ...prevColors, colorB: 'blue' }
              : { ...prevColors, colorB: 'black' }
          );
        }}
      >
        B
      </button>
      <button
        className="text-orange-500 border border-black font-bold uppercase text-xs px-8 py-4"
        style={{ backgroundColor: `${colors.colorC}` }}
        onClick={() => {
          if (colors.colorC === 'black') {
            checkAndInsert('C', false);
          } else {
            checkAndInsert('C', true);
          }
          setColors((prevColors) =>
            colors.colorC === 'black'
              ? { ...prevColors, colorC: 'orange' }
              : { ...prevColors, colorC: 'black' }
          );
        }}
      >
        C
      </button>
      <button
        className="text-green-500 border border-black font-bold uppercase text-xs px-8 py-4"
        style={{ backgroundColor: `${colors.colorD}` }}
        onClick={() => {
          if (colors.colorD === 'black') {
            checkAndInsert('D', false);
          } else {
            checkAndInsert('D', true);
          }
          setColors((prevColors) =>
            colors.colorD === 'black'
              ? { ...prevColors, colorD: 'green' }
              : { ...prevColors, colorD: 'black' }
          );
        }}
      >
        D
      </button>
    </div>
  );
};

export default Button;
