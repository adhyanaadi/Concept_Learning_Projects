// import React, { useState } from 'react';
// import ThemeContext from './ThemeContext';

// const ThemeContextProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export default ThemeContextProvider;

import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({ children }) => {
    // Use state to manage theme (default to 'light')
    const [theme, setTheme] = useState('light');

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Apply theme directly to the document (html) level on every render
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--bg-color', '#222');
            document.documentElement.style.setProperty('--text-color', '#fff');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
        }
    }, [theme]); // Runs every time `theme` changes

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
