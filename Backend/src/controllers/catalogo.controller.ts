import { Request, Response } from 'express';
import * as catalogoRepository from '../repositories/catalogo.repository';

export enum TipoCatalogo {
  COLECAO = 'COLECAO',
  DESAFIO = 'DESAFIO',
}

export const getAllCatalogoController = async (req: Request, res: Response) => {
    const tipo = req.params.tipo as TipoCatalogo;
    const catalogos = await catalogoRepository.getAllCatalogos(tipo);
    res.json(catalogos);
};


export const getCatalogoByNomeController = async (req: Request, res: Response) => {
    const tema = req.params.tema;
    const tipo = req.params.tipo as TipoCatalogo;

    const catalogo = await catalogoRepository.getCatalogoByNome(tema,tipo);
    if (catalogo) {
        res.json(catalogo);
    } else {
        res.status(404).json({ message: 'Catalogo não encontrado' });
    }
};
export const createCatalogoController = async (req: Request, res: Response) => {
  const { tema ,curtidas ,tags,descricao,tipo,privado,criterio,emailDono,livros } = req.body;
  const newCatalogo = await catalogoRepository.createCatalogo({ tema ,curtidas ,tags,descricao,tipo,privado,criterio,emailDono, livros});
  res.status(201).json(newCatalogo);
};

export const updateCatalogoController = async (req: Request, res: Response) => {
  const nome = req.params.tema;
  const tipo = req.params.tipo as TipoCatalogo;

  const {tema,curtidas,tags,descricao,privado,criterio,emailDono,livros }  = req.body;
  try {
    const updatedCatalogo = await catalogoRepository.updateCatalogo(nome,tipo, {tipo,tema ,curtidas ,tags,descricao,privado,criterio,emailDono,livros });
    res.json(updatedCatalogo);
  } catch (error) {
    res.status(404).json({ message: 'Catalogo não encontrado' });
  }
};

export const deleteCatalogoController = async (req: Request, res: Response) => {
  const tema = req.params.tema;
  try {
    const deletedCatalogo = await catalogoRepository.deleteCatalogo(tema);
    res.json({ message: 'Catalogo deletado', deletedCatalogo });
  } catch (error) {
    res.status(404).json({ message: 'Catologo não encontrado' });
  }
};