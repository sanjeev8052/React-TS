import { ReactNode, createContext, useState } from "react";

type themeType = "Light" | "Dark";

interface ThemeContext {
    theme: themeType
    ChangeTheme: () => void
}

export const MyTheme = createContext<ThemeContext>({
    theme: "Light",
    ChangeTheme: () => { }

})


const ThemeContext = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<themeType>("Light")

    const ChangeTheme = () => {
        setTheme((preTheme) => preTheme === "Light" ? "Dark" : "Light")
    }
    return (
        <MyTheme.Provider value={{ theme, ChangeTheme }}>
            {children}
        </MyTheme.Provider>
    )
}

export default ThemeContext
