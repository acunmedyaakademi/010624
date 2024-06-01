import { useContext, createContext } from "react";
import { initialState } from "./initialState";

const GlobalStateContext = createContext({
    state: initialState,
    dispatch: () => {},
});

export default function useGlobalState() {
    return useContext(GlobalStateContext);
}