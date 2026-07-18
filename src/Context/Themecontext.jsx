import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeContextProvider ({children}) {
    const [theme, setTheme] = useState("dark")
    const provider_values = {
        theme: theme,
        name: name,
        setTheme: setTheme
    }

    return (
        <ThemeContext.Provider value={provider_values}>{children}</ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}