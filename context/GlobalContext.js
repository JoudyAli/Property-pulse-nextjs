"use client";
import { createContext, useContext, useState } from "react";

// Create a Context for global state
const GlobalContext = createContext();

// Create a provider component
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export function useGlobalContext() {
  return useContext(GlobalContext);
}
