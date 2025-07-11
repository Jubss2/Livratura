import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../../theme/ThemeContext';
import Livratura from '../../assets/Livratura.svg';
import Logo from '../../assets/Group1.svg'


const Header = () => {
    const { isDark, toggleTheme } = useThemeMode();

    return (

        <AppBar position="fixed" color="primary" elevation={2} >

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                    <img src={Livratura} alt="Logo da Livratura" style={{ width: '110px', padding: 4, marginBottom: '5px', marginRight: '2px' }} />
                    <img src={Logo} alt="Logo da Livratura" style={{ width: '70px', padding: 4, marginBottom: '5px', marginRight: '2px' }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                    <IconButton color="inherit" onClick={toggleTheme}>
                        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>


                </Box></Toolbar></AppBar>
    );
};
export default Header;