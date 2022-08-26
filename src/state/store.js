import { useReducer } from "react";
import { initialState } from ".";
import { Context } from "./context";
import reducer from "./reducer";

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
