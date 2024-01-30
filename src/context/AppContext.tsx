import React, { ReactNode, createContext, useReducer } from "react";
import { User } from "../types/User";
import { Ticket } from "../types/Ticket";
import { GROUP_BY, SORT_BY } from "../utils/constants";

interface AppState {
  users?: User[];
  tickets?: Ticket[];
  groupBy: string;
  sortBy: string;
}

const initialState: AppState = {
  users: undefined,
  tickets: undefined,
  groupBy: GROUP_BY.STATUS,
  sortBy: SORT_BY.PRIORITY,
};

export const ACTIONS = {
  SET_DATA: "SET_DATA",
  UPDATE_SORT_BY: "UPDATE_SORT_BY",
  UPDATE_GROUP_BY: "UPDATE_GROUP_BY",
};

const appReducer = (state: AppState, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ACTIONS.UPDATE_GROUP_BY: {
      return {
        ...state,
        groupBy: action.payload,
      };
    }
    case ACTIONS.UPDATE_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default:
      throw new Error("Invalid Action");
  }
};

export const AppStateContext = createContext(initialState);
export const AppDispatchContext = createContext<any>(null);

interface AppContextProps {
  children: ReactNode;
}

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppContext;
