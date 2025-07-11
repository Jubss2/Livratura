import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Stack, Autocomplete, Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { tiposColecao } from '../assets/tags';
import axios from '../auth/axios';

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

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (catalogo: Catalogo) => void;
    catalogoEditar?: Catalogo | null;
}

function CriarColecaoForm({ open, onClose, onSubmit, catalogoEditar }: Props) {
    const [tema, setTema] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [descricao, setDescricao] = useState('');
    const [livros, setLivros] = useState<LivroNoCatalogo[]>([]);
    const [todosLivros, setTodosLivros] = useState<Livro[]>([]);
    const [privado, setPrivado] = useState(false);
    const tipo = TipoCatalogo.COLECAO;
    const emailDono = 'joao@email.com';
    const [curtidas, setCurtidas] = useState(0);
    const [livrosEscolhidos, setLivrosEscolhidos] = useState<Livro[]>([]);

    useEffect(() => {
        const carregaLivros = async () => {
            const response = await axios.get('/livros');
            setTodosLivros(response.data);
        };

        carregaLivros();


        if (catalogoEditar) {
            setTema(catalogoEditar.tema);
            setTags(catalogoEditar.tags);
            setDescricao(catalogoEditar.descricao);
            setLivros(catalogoEditar.livros);
            setPrivado(catalogoEditar.privado);
            setCurtidas(catalogoEditar.curtidas);

            const livrosJaPresentes = catalogoEditar.livros.map((livroNoCatalogo) => livroNoCatalogo.livros);
            setLivrosEscolhidos(livrosJaPresentes);


        } else {
            setTema('');
            setTags([]);
            setDescricao('');
            setLivros([]);
            setPrivado(false);
            setCurtidas(0);
        }


    }, [catalogoEditar]);

    const handleSubmit = () => {
        const livrosParaEnviar = LivrosParaLivroCatalogo(livrosEscolhidos);

        onSubmit({ tema, descricao, tags, livros: livrosParaEnviar, privado, tipo, emailDono, curtidas });
        setTema(''); setTags([]); setDescricao(''); setLivros([]); setLivrosEscolhidos([]); setPrivado(false);
    };
    
    const LivrosParaLivroCatalogo = (livrosEscolhidos: Livro[] = []): LivroNoCatalogo[] => {
        return livrosEscolhidos.map((livro) => ({
            idLivro: livro.titulo,
            livros: livro,
        }));
    }


    return (

        <Dialog open={open} onClose={onClose}>
            <DialogTitle variant='h4' sx={{ color: 'primary' }}>{catalogoEditar ? "Editar Coleção" : 'Criar Coleção'}</DialogTitle>
            <DialogContent sx={{ width: '600px' }}>
                <Stack spacing={2} mt={1}>
                    <FormControlLabel
                        control={<Switch checked={privado} onChange={(e) => setPrivado(e.target.checked)} />}
                        label="Privado"
                    />
                    {!catalogoEditar && <TextField required label="Tema" value={tema} onChange={(e) => setTema(e.target.value)} fullWidth />}
                    <TextField required label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    <Autocomplete

                        multiple
                        options={tiposColecao}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Tags" />}
                        onChange={(e, v) => setTags(v)}
                        value={tags}
                    />

                    <Autocomplete
                        multiple
                        options={todosLivros}
                        getOptionLabel={(todosLivros) => todosLivros.titulo}
                        renderInput={(params) => <TextField {...params} label="Livros" />}
                        value={livrosEscolhidos}
                        onChange={(e, v) => setLivrosEscolhidos(v)}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>
                    {catalogoEditar ? 'Atualizar' : 'Cadastrar'}
                </Button>
            </DialogActions>
        </Dialog>

    );
}

export default CriarColecaoForm;