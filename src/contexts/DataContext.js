import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { initialState, dataReducer } from "../reducers";
import { fetchAllProducts, fetchAllCategories } from "../services";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchAllCategories(dispatch);
    fetchAllProducts(dispatch);
  }, []);

  return (
    <DataContext.Provider
      value={{ ...state, drawerOpen, setDrawerOpen, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
