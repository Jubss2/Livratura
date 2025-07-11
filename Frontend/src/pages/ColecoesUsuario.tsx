import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Alert, Container, TextField, IconButton, Button, Snackbar } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { Grid } from '@mui/material';
import axios from '../auth/axios';
import Header from './components/Header';
import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CriarColecaoForm from './CriarColecaoForm';

export enum TipoCatalogo {
    COLECAO = 'COLECAO',
    DESAFIO = 'DESAFIO',
}
interface Livro {
    id: number
    titulo: string
    autor: string
    dataPublicacao: Date
    paginas: number
    tags: string[]
    estrelas?: number
    capaUrl: string
};

interface LivroNoCatalogo {
    idLivro: string;
    livros: Livro;
}

interface Catalogo {
    tema: string
    curtidas: number
    tags: string[]
    descricao: string
    tipo: TipoCatalogo
    privado: boolean
    criterio?: string
    emailDono: string
    livros: LivroNoCatalogo[]
};

function ColecoesUsuario() {
    const [colecoes, setColecoes] = useState<Catalogo[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [openForm, setOpenForm] = useState(false);
    const [catalogoEditando, setCatalogoEditando] = useState<Catalogo | null>(null);
    const [alerta, setAlerta] = useState('');
   const [pesquisa, setPesquisa] = useState('');

    const handleChangePesquisa = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(e.target.value);
    };

    const carregaColecoes = async () => {
        try {
            const response = await axios.get('/catalogos/COLECAO');
            setColecoes(response.data);
        } catch (err: any) {
            setErro('Erro ao carregar as coleções');
        } finally { setCarregando(false); }
    };
    useEffect(() => {
        carregaColecoes();
    }, []);

    const handleSalvarCatalogo = async (colecao: Partial<Catalogo>) => {
        try {
            if (catalogoEditando) {
                await axios.put(`/catalogos/${colecao.tipo}/${colecao.tema}`, colecao);
                setAlerta('Coleção atualizada')
            } else {  
                await axios.post(`/catalogos/COLECAO`, colecao);
                setAlerta('Coleção criada')
            }
            setOpenForm(false);
            setCatalogoEditando(null);
            carregaColecoes();
        } catch {
            setAlerta("Erro durante o salvamento")
        }
    };

    const handleExcluir = async (tema: string) => {
        try {
            await axios.delete(`/catalogos/COLECAO/${tema}`);
            setAlerta("Coleção excluída");
            carregaColecoes();
        } catch {
            setAlerta(" Erro ao excluir");
        }
    };

    return (
        <>   <Header />
            <Box sx={{ height: '97vh', display: 'flex', }}>
                <Container>

                    <Typography variant='h4' color='secondary' gutterBottom textAlign="left" sx={{ marginTop: '100px', marginBottom: '20px' }}>
                        Busque pelas suas coleções
                    </Typography>
                    <TextField onChange={handleChangePesquisa} label='Procure o tema que deseje' fullWidth sx={{ marginBottom: '10px', color: 'secondary' }} />
                    <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Button variant='contained' startIcon = {<Add/>} onClick={() => { setCatalogoEditando(null); setOpenForm(true) }} sx ={{marginBottom:'10px'}}>Adicionar Coleção</Button>
                    </Box>
                    {carregando ? (
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', mt: 4, borderRadius: 3 }}>
                            <CircularProgress />
                        </Box>
                    ) : erro ? (<Alert severity='error'>{erro}</Alert>
                    ) : (<Grid container spacing={3} borderRadius={3}>
                        {colecoes.map((colecao) => (
                        (colecao.tema.toLowerCase().includes(pesquisa.toLowerCase()) && colecao.emailDono == 'joao@email.com') &&
                            <Grid size={6} key={colecao.tema}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', border: 3, borderColor: '#6750A4', height: '229', width: '550', padding: '15px', borderRadius: 3 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', flexGrow: 1, minWidth: 0 }}>
                                        <Typography variant='h6'>{colecao.tema}</Typography>
                                        <Typography variant='body2' color='textSecondary'>{colecao.descricao}</Typography>
                                        <Stack direction="row" spacing={1} sx={{ marginTop: 'auto', flexWrap: 'wrap' }}>
                                            {colecao.tags.slice(0, 2).map((tag) => (
                                                <Chip key={tag} sx={{ marginBottom: '50px' }} label={tag} size='small' />
                                            ))}
                                        </Stack>
                                      
                                        <Box sx={{marginTop:'auto'}}>
                                        <IconButton color='secondary' aria-label="curtido" sx={{ alignSelf: 'flex-start' }} >
                                            <FavoriteIcon fontSize='small' />
                                            <Typography variant='body1' sx={{ marginLeft: '5px' }}> {colecao.curtidas}</Typography>
                                        </IconButton>
                                        <IconButton size='small' onClick={() => { setCatalogoEditando(colecao); setOpenForm(true); }} sx={{ alignSelf: 'flex-start', marginLeft:"140px" }}> <Edit />  </IconButton>
                                        <IconButton size='small' onClick={() => handleExcluir(colecao.tema)} sx={{ alignSelf: 'flex-start' }}> <Delete /></IconButton>
                                        </Box>
                                       
                                    </Box>
                                    {colecao.livros.slice(0, 2).map((lista, index) => (
                                        <Box key={index} sx={{ padding: '0 5px' }}>
                                            <img height='155' width='100' key={index} alt={`Capa do livro ${lista.livros.titulo}`} src={lista.livros.capaUrl} />
                                        </Box>
                                    ))}

                                </Box>

                            </Grid>))}
                    </Grid>)}

                    <CriarColecaoForm open={openForm} onClose={() => setOpenForm(false)} onSubmit={handleSalvarCatalogo} catalogoEditar={catalogoEditando} />
                    <Snackbar open={!!alerta} autoHideDuration={4000} onClose={() => setAlerta('')} message={alerta} />

                </Container> </Box></>);
}
export default ColecoesUsuario;
