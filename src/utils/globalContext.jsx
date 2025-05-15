import { createContext, useContext, useState } from "react"

const context = createContext()

export const GlobalContext = ({ children }) => {
    const [preloaderDone, setPreloaderDone] = useState(false);
    return (
        <context.Provider value={{ preloaderDone, setPreloaderDone }}>
            {children}
    </context.Provider>
    )
}

export const useGlobalContext = () => useContext(context);