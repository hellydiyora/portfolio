import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState('light');

    const onChange = () => {
        if (theme === 'light'){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }
  return (
   <ThemeContext.Provider value={{theme, onChange}}>    
   {children}
   </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProvider};

export const useTheme = () => {
    return useContext(ThemeContext);
}