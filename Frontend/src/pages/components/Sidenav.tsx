import * as React from 'react';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import { Divider, ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material'
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Collapse from '@mui/material/Collapse';
import CachedIcon from '@mui/icons-material/Cached';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PeopleIcon from '@mui/icons-material/People';
import CheckIcon from '@mui/icons-material/Check';

export default function ButtonAppBar() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [openPerfil, setOpenPerfil] = React.useState(false);
  const [openDesafio, setOpenDesafio] = React.useState(false);
  const [openColecao, setOpenColecao] = React.useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const handleCatalogo = () => {
    navigate('/');
  };

  const handleColecao = () => {
    navigate('/colecao');
  };
  const handleColecaoUsuario = () => {
    navigate('/colecao/perfil');
  };
  const ListaDrawer = (

    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItem disablePadding >
          <ListItemButton onClick={() => setOpenPerfil(!openPerfil)}>
            <ListItemIcon > <PersonIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Perfil" />
            {openPerfil ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openPerfil} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EditIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Escrever Resenha" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FolderIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Estantes" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CheckCircleIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Meta de Leitura" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Medalhas" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FavoriteIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Grupo de Leitura" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon > <CachedIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Atualizar Leitura" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton onClick={handleCatalogo}>
            <ListItemIcon > <ViewModuleIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Cátalogo" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton onClick={ () => setOpenDesafio(!openDesafio)}>
            <ListItemIcon > <PlayArrowIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Desafios" />
            {openDesafio ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openDesafio} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PeopleIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Da comunidade"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CheckIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Visualizar as suas" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding >
          <ListItemButton onClick={() => setOpenColecao(!openColecao)}>
            <ListItemIcon > <PlayArrowIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Coleções" />
            {openColecao ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openColecao} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={handleColecao}>
              <ListItemIcon>
                <PeopleIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Da comunidade"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={handleColecaoUsuario}>
              <ListItemIcon>
                <CheckIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Visualizar os seus" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding >
          <ListItemButton >
            <ListItemIcon > <PeopleIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Comunidade" />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ marginTop: 'auto' }} />
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon > <SettingsIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon > <LogoutIcon color="secondary" /> </ListItemIcon>
            <ListItemText primary="Desconectar" />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  )
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >

        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {ListaDrawer}
      </Drawer>
    </>

  );
}