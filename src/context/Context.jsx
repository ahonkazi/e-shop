import { createContext } from "react";
export const GetContext = createContext()
export const Context = ({ children }) => {
    return (
        <GetContext.Provider value={{}}>
            {children}
        </GetContext.Provider>
    )
}