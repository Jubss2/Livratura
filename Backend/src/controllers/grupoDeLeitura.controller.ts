import { Request, Response } from 'express';
import * as grupoDeLeituraRepository from '../repositories/grupoDeLeitura.repository';

export const getAllGrupoDeLeiturasController = async (req: Request, res: Response) => {
    const grupoDeLeituras = await grupoDeLeituraRepository.getAllGrupoDeLeituras();
    res.json(grupoDeLeituras);
};
export const getGrupoDeLeituraByTituloController = async (req: Request, res: Response) => {
    const grupo = req.params.nome;
    const grupoDeLeitura = await grupoDeLeituraRepository.getGrupoDeLeituraByNome(grupo);
    if (grupoDeLeitura) {
        res.json(grupoDeLeitura);
    } else {
        res.status(404).json({ message: 'GrupoDeLeitura não encontrado' });
    }
};
export const createGrupoDeLeituraController = async (req: Request, res: Response) => {
  const { nome,dataCriacao,dataEncontro,isbnLivro,usuarios } = req.body;
  const newGrupoDeLeitura = await grupoDeLeituraRepository.createGrupoDeLeitura({ nome,dataCriacao,dataEncontro,isbnLivro,usuarios });
  res.status(201).json(newGrupoDeLeitura);
};

export const updateGrupoDeLeituraController = async (req: Request, res: Response) => {
  const grupo = req.params.nome;
  const { nome,dataCriacao,dataEncontro,isbnLivro,usuarios } = req.body;
  try {
    const updatedGrupoDeLeitura = await grupoDeLeituraRepository.updateGrupoDeLeitura(grupo, { nome,dataCriacao,dataEncontro,isbnLivro,usuarios });
    res.json(updatedGrupoDeLeitura);
  } catch (error) {
    res.status(404).json({ message: 'Grupo De Leitura não encontrado' });
  }
};

export const deleteGrupoDeLeituraController = async (req: Request, res: Response) => {
  const grupo = req.params.nome;
  try {
    const deletedGrupoDeLeitura = await grupoDeLeituraRepository.deleteGrupoDeLeitura(grupo);
    res.json({ message: 'Grupo De Leitura deletado', deletedGrupoDeLeitura });
  } catch (error) {
    res.status(404).json({ message: 'Grupo De Leitura não encontrado' });
  }
};