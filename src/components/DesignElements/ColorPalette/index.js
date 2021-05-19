// == Import npm
import React, { useState } from 'react';

// == Composant
const ColorPalette = () => {
  const toHSL = (hex) => {
    // @see https://stackoverflow.com/questions/62390243/java-script-how-can-i-pull-the-hsl-value-when-a-colour-is-selected-from-input-t

    // On décompose le code hexa
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // On recupere chaque valeur du rgb
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = (max + min) / 2;
    let l = (max + min) / 2;

    if (max === min) {
      h = 0;
      s = 0;
    }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d) + (g < b ? 6 : 0); break;
        case g: h = ((b - r) / d) + 2; break;
        case b: h = ((r - g) / d) + 4; break;
        default: break;
      }
      h /= 6;
    }

    s *= 100;
    // eslint-disable-next-line no-unused-vars
    s = Math.round(s);
    l *= 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    // var colorInHSL = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    return `${h}, 100%`;
  };

  const [colorToDisplay, setColor] = useState('#11ff00');

  const handleColor = (e) => {
    document.documentElement.style.setProperty('--color', toHSL(e.target.value));
    document.documentElement.style.setProperty('--neonColoring', e.target.value);
    setColor(e.target.value);
  };

  return (
    <div className="color-changer-container">
      <label htmlFor="color-changer">
        Change Me
      </label>
      <input
        id="color-changer"
        onChange={handleColor}
        type="color"
        value={colorToDisplay}
        className="color-changer"
      />
    </div>
  );
};

// == Export
export default ColorPalette;
