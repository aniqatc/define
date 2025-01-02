import React, { createContext, useState, useEffect } from 'react';
const FontContext = createContext();

function FontProvider({ children }) {
  const [font, setFont] = useState(() => {
    return localStorage.getItem('font') || 'sans';
  });

  useEffect(() => {
    localStorage.setItem('font', font);
    document.body.className = document.body.className.replace(/font-(sans|serif|mono)/, '');
    document.body.classList.add(`font-${font}`);
  }, [font]);

  return <FontContext.Provider value={{ font, setFont }}>{children}</FontContext.Provider>;
}

export { FontContext, FontProvider };
