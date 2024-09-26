import { useState } from 'react'
import About from "./components/firstdivision/FirstDivision";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <About/>
  </>
  )
}

export default App
