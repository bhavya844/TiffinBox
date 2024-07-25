import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";


const backendURLs = {
    
}

const initialState = {

};

const AppContext = createContext();

const AdminAppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
          value={{
            ...state,
          }}
        >
          {children}
        </AppContext.Provider>
      );
};

const useAdminContext = () => {
    return useContext(AppContext);
  };
  
  export { AdminAppProvider, useAdminContext };