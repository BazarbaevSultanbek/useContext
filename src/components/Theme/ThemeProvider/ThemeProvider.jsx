import { createContext, useContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);

    const switchTheme = (theme) => {
        setTheme(theme)
    }

    return (
        <themeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </themeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error('Error Theme');
    }
    return context;
};

export default ThemeProvider;
