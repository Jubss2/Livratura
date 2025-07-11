import { useEffect, useState } from 'react';
import {
    Box, Typography, CircularProgress, Alert, Container,
    TextField,
} from '@mui/material';
import { Grid } from '@mui/material';
import axios from '../auth/axios';
import Header from './components/Header';

import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


interface Livro {
    titulo: string
    autor: string
    dataPublicacao: Date
    paginas: number
    tags: string[]
    estrelas?: number
    capaUrl: string
};


function formatDate(date: Date) {
    const dateAux = new Date(date);
    return dateAux.getFullYear();
}
function Biblioteca() {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [pesquisa, setPesquisa] = useState('');

    const handleChangePesquisa = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(e.target.value);
    };
    useEffect(() => {
        const carregaLivros = async () => {
            try {
                const response = await axios.get('/livros');
                setLivros(response.data);
            } catch (err: any) {
                setErro('Erro ao carregar os livros');
            } finally { setCarregando(false); }
        };
        carregaLivros();
    }, []);

    return (
        <>   <Header />
            <Box sx={{ height: '97vh', display: 'flex', }}>
                <Container>

                    <Typography variant='h4' color='secondary' gutterBottom textAlign="left" sx={{ marginTop: '100px', marginBottom: '20px' }}>
                        Buscar no Catálogo
                    </Typography>
                    <TextField onChange={handleChangePesquisa} label='Busque pelo título, autor ou ISBN da obra: ' fullWidth sx={{ marginBottom: '10px', color: 'secondary' }} />

                    {carregando ? (
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', mt: 4, borderRadius: 3 }}>
                            <CircularProgress />
                        </Box>
                    ) : erro ? (<Alert severity='error'>{erro}</Alert>
                    ) : (<Grid container spacing={3} borderRadius={3}>
                        {livros.map((livro) => (
                            (livro.titulo.toLowerCase().includes(pesquisa.toLowerCase()) || livro.autor.toLowerCase().includes(pesquisa.toLowerCase())) &&
                            <Grid size={6} key={livro.titulo} >
                                <Box sx={{ display: 'flex', flexDirection: 'row', border: 3, borderColor: '#6750A4', height: '229', width: '550', padding: '15px', borderRadius: 3 }}>
                                    <img height='155' width='100' alt={`Capa do livro ${livro.titulo}`} src={livro.capaUrl} />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', flexGrow: 1, minWidth: 0 }}>
                                        <Typography variant='h6'>{livro.titulo}</Typography>
                                        <Typography variant='body1' color='textSecondary'>{livro.autor}</Typography>
                                        <Typography variant='body2' color='textSecondary'>{formatDate(livro.dataPublicacao)}</Typography>
                                        <Stack direction="row" spacing={1} sx={{ marginTop: '8px', flexWrap: 'wrap' }}>
                                            {livro.tags.slice(0, 3).map((tag) => (
                                                <Chip key={tag} sx={{ marginBottom: '50px' }} label={tag} size='small' />
                                            ))}
                                        </Stack>

                                        <Typography variant='body2' color='textSecondary' sx={{ marginTop: 'auto' }}>Páginas: {livro.paginas}</Typography>

                                    </Box>
                                    <Rating
                                        sx={{ alignItems: 'flex-start' }}
                                        name="text-feedback"
                                        value={livro.estrelas}
                                        readOnly
                                        precision={0.25}
                                        size={'small'}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'secondary' }} fontSize="inherit" />}
                                    />

                                </Box>
                            </Grid>))}
                    </Grid>)}
                </Container> </Box> </>);
}
export default Biblioteca;
