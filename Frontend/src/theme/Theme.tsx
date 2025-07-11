import { createTheme } from '@mui/material/styles';
const commonSettings = {
    typography: {
        fontFamily: 'Roboto, sans-serif, Stylish'
    }
   
};
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#5056BF' }, 
        secondary: { main: '#030A8C' }, 
        error: {main: '#FFFFFF'}

    },
    ...commonSettings,
});
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#A4A5E7' },
        secondary: { main: '#BCBBF2' },
        error: { main: '#6B8096'}

    },
    ...commonSettings,
})
