import { createContext } from "react";
import { data } from "./Data";

export const contex = createContext()
export function AppProvider({ children }) {
    return (
    <contex.Provider value={data}>
        {children}
    </contex.Provider>)
} 