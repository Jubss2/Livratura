import { Request, Response } from 'express';
import * as livroRepository from '../repositories/livro.repository';

export const getAllLivrosController = async (req: Request, res: Response) => {
    const livros = await livroRepository.getAllLivros();
    res.json(livros);
};
export const getLivroByTituloController = async (req: Request, res: Response) => {
    const nome = req.params.nome;
    const livro = await livroRepository.getLivroByTitulo(nome);
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).json({ message: 'Livro not found' });
    }
};
export const createLivroController = async (req: Request, res: Response) => {
  const { titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas } = req.body;
  const newLivro = await livroRepository.createLivro({ titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas});
  res.status(201).json(newLivro);
};

export const updateLivroController = async (req: Request, res: Response) => {
  const nome = req.params.nome;
  const {titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas } = req.body;
  try {
    const updatedLivro = await livroRepository.updateLivro(nome, {titulo, autor,dataPublicacao,paginas,resumo,tags,estrelas});
    res.json(updatedLivro);
  } catch (error) {
    res.status(404).json({ message: 'Livro not found' });
  }
};

export const deleteLivroController = async (req: Request, res: Response) => {
  const nome = req.params.nome;
  try {
    const deletedLivro = await livroRepository.deleteLivro(nome);
    res.json({ message: 'Livro deleted', deletedLivro });
  } catch (error) {
    res.status(404).json({ message: 'Livro not found' });
  }
};