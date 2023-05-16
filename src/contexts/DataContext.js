import { createContext, useContext, useReducer } from "react";

import { initialState, dataReducer } from "../reducers/DataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
