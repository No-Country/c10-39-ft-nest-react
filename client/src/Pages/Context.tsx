import { createContext, FC, ReactNode } from "react";

type ContextType = {};

export const Context = createContext<ContextType>({});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default ContextProvider;
