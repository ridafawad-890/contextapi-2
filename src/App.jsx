
import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themebutton'
import Card from './components/card'
import './App.css'

function App() {

    const [thememode, setthememode] = useState("light")

    const lighttheme = () => {
        setthememode("light")
    }

    const darktheme = () => {
        setthememode("dark")
    }

    // Actual theme change is done by JavaScript
    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark")
        document.querySelector("html").classList.add(thememode)
    }, [thememode])

    return (
        <ThemeProvider value={{ thememode, darktheme, lighttheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
