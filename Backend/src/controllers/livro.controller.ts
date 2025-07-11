import { Request, Response } from 'express';
import * as livroRepository from '../repositories/livro.repository';

export const getAllLivrosController = async (req: Request, res: Response) => {
    const livros = await livroRepository.getAllLivros();
    res.json(livros);
};
export const getLivroByTituloController = async (req: Request, res: Response) => {
    const titulo = req.params.titulo;
    const livro = await livroRepository.getLivroByTitulo(titulo);
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).json({ message: 'Livro não encontrado' });
    }
};
export const createLivroController = async (req: Request, res: Response) => {
  const { titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas,capaUrl } = req.body;
  const newLivro = await livroRepository.createLivro({ titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas,capaUrl});
  res.status(201).json(newLivro);
};

export const updateLivroController = async (req: Request, res: Response) => {
  const nome = req.params.titulo;
  const {titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas,capaUrl } = req.body;
  try {
    const updatedLivro = await livroRepository.updateLivro(nome, {titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas,capaUrl});
    res.json(updatedLivro);
  } catch (error) {
    res.status(404).json({ message: 'Livro não encontrado' });
  }
};

export const deleteLivroController = async (req: Request, res: Response) => {
  const titulo = req.params.titulo;
  try {
    const deletedLivro = await livroRepository.deleteLivro(titulo);
    res.json({ message: 'Livro deletado', deletedLivro });
  } catch (error) {
    res.status(404).json({ message: 'Livro não encontrado' });
  }
};