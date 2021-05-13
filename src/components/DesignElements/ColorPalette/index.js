// == Import npm
import React from 'react';

// == Composant
const ColorPalette = () => {
  const handleColor = (e) => {
    document.documentElement.style.setProperty('--neonColoring', e.target.value)
  };

  return (
    <input onChange={handleColor} type="color" value="#ffffff" name="color_hexa" />
  );
};

// == Export
export default ColorPalette;
