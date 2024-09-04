// CleverTapProvider.js
import React, { createContext } from 'react';
import usePageLoadEvents from './usePageLoadEvents'; // Import the custom hook

const CleverTapContext = createContext();

const CleverTapProvider = ({ children }) => {
  // Use the custom hook to handle CleverTap events on route change
  usePageLoadEvents();

  return (
    <CleverTapContext.Provider value={{}}>
      {children}
    </CleverTapContext.Provider>
  );
};

export { CleverTapContext, CleverTapProvider };
