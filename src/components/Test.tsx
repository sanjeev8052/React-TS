import { useContext } from "react"
import { MyTheme } from "./ThemeContext"



const Test = () => {
    const { theme, ChangeTheme } = useContext(MyTheme)
    return (
        <>
            <div style={{
                color: theme === "Dark" ? "white" : "#565656",
                backgroundColor: theme === "Dark" ? "#565656" : "white",
            }}>
                <h1>Them is {theme}</h1>
                <button onClick={ChangeTheme}>change theme</button>
            </div>

        </>

    )
}

export default Test
