import Test from "./components/Test"
import "./App.css"
import ThemeContext from "./components/ThemeContext"

const App = () => {
  return (
    <ThemeContext >
      <Test />
    </ThemeContext>
  )
}

export default App
