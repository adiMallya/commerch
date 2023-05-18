import { createContext, useContext, useEffect, useReducer } from "react";

import { initialState, dataReducer } from "../reducers/DataReducer";
import { fetchAllProducts, fetchAllCategories } from "../services";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    fetchAllCategories(dispatch);
    fetchAllProducts(dispatch);
  }, []);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
