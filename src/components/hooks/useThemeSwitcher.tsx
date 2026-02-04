import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = () => {
            const userPref = window.localStorage.getItem('theme');
            if (userPref) {
                setMode(userPref);
            } else {
                setMode(mediaQuery.matches ? 'dark' : 'light');
            }
        };

        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
    
    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return [mode, setMode] as const;
};

export default useThemeSwitcher;