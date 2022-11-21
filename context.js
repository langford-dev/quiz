import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const answeredQuestions = []

    return <>
        <AppContext.Provider value={{
            answeredQuestions
        }}>
            {children}
        </AppContext.Provider>
    </>
}
