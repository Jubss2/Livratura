import TableFooter from '@mui/material/TableFooter';

import { AppBar, Typography } from '@mui/material';



const Footer = () => {
   
    return (
        <AppBar position="static" color="primary" elevation={2} sx={{ top: 'auto', bottom: 0, alignItems:'center', height:'45px', justifyContent:'center' }} >
            <Typography >www.livratura.com.br</Typography>
        </AppBar>
    );
};
export default Footer;