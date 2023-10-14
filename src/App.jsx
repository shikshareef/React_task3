import React, { useState } from 'react';

const colors = [
  '#FFCCCC', // Light Red
  '#CCFFCC', // Light Green
  '#CCCCFF', // Light Blue
  '#FFFFCC', // Light Yellow
  '#FFCCFF', // Light Magenta
  '#CCFFFF', // Light Cyan
  '#FFD700', // Gold
  '#F0E68C', // Khaki
  '#98FB98', // Pale Green
  '#87CEFA', // Light Sky Blue
];

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
     <h1 className='text-black text-center bg-blue-300 text-xl'>BACKGROUND COLOR PICKER</h1>
     <div  style={{ backgroundColor: selectedColor }} className="flex items-center justify-center flex-col h-screen m-10 rounded-lg mt-0">
      <button onClick={() => setShowColors(true)} className="mb-4 p-2 bg-blue-500 text-white rounded-md">
        Choose Color
      </button>
      {showColors && (
        <div className="flex">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-10 h-10 m-1 cursor-pointer shadow-xl border-px"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
    </>
   
  );
}

export default App;
