import React, { createContext, useState } from "react";
import { Product } from "../../types/products";
import { User } from "../../types/user";

export const AppContext = createContext<{
  state: { user?: User; products?: Product[] };
  setState: React.Dispatch<React.SetStateAction<{}>>;
}>({ state: {}, setState: () => {} });

const AppContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
