import { createContext, useContext, useReducer, useState } from "react";

import { initialState, orderReducer } from "../reducers/OrderReducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={{ ...state, dispatch, order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => useContext(OrderContext);

export { OrderProvider, useOrderContext };
