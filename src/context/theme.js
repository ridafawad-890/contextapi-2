
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode: "light",
    darktheme: () => {},
    lighttheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}

//this is used to export the hook that we can use in any component to access the context value. It allows us to consume the context value without having to wrap the component in a provider.



//react.createcontext mean when there is no already exsisting value
//createcontext is used to create a context object that can be used to share data between components without having to pass props down manually at every level. It allows for a more efficient way to manage state and share it across the component tree.