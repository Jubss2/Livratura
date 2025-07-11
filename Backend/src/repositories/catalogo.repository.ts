import { create } from 'domain';
import { PrismaClient, Catalogo, livrosNoCatalogo } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllCatalogos = async (tipo: TipoCatalogo): Promise<Catalogo[]> => {
  return prisma.catalogo.findMany({ include: { livros: { include: { livros: true } } }, where: { tipo: tipo } });
};

export const getCatalogoByNome = async (tema: string, tipo: TipoCatalogo): Promise<Catalogo | null> => {
  return prisma.catalogo.findUnique({ where: { tema: tema, tipo: tipo } });
}

export const TipoCatalogo: {
  COLECAO: 'COLECAO'
  DESAFIO: 'DESAFIO'
} = {
  COLECAO: 'COLECAO',
  DESAFIO: 'DESAFIO',
}

export type TipoCatalogo = typeof TipoCatalogo[keyof typeof TipoCatalogo]
type aLivro = {
  id: number
  titulo: string
  autor: string
  dataPublicacao: Date
  paginas: number
  tags: string[]
  estrelas?: number
  capaUrl: string
}

type aLivroNoCatalogo = {
  temaCat: string
  idLivro: string
  livros: aLivro
}

type aCatalogo = {
  tema: string
  curtidas: number
  tags: string[]
  descricao: string
  tipo: TipoCatalogo
  privado?: boolean
  criterio?: string
  emailDono: string
  livros: aLivroNoCatalogo[]
};

export const createCatalogo = async (data: aCatalogo):
  Promise<Catalogo> => {
  const { livros, ...dados } = data;

  return await prisma.catalogo.create({
    data: {...dados, livros: {
        create: livros.map((l) => ({
          idLivro: l.livros.titulo,
        })),},}, include: { livros: { include: { livros: true, }, }, },
  });

};
export const deleteCatalogo = async (tema: string): Promise<Catalogo> => {
  await prisma.livrosNoCatalogo.deleteMany({
    where: {
      temaCat: tema,
    },
  });
  return prisma.catalogo.delete({ where: { tema: tema } });
};

export const updateCatalogo = async (tema: string, tipo: TipoCatalogo, data: aCatalogo,): Promise<Catalogo> => {
  const { livros, ...resto } = data;

  await prisma.livrosNoCatalogo.deleteMany({
    where: {
      temaCat: tema,
    },
  });

  return prisma.catalogo.update({where: { tema: tema, tipo: tipo },
    data: {...resto,livros: {
        create: livros.map((l) => ({
          idLivro: l.livros.titulo,
        })),},},include: {livros: {include: {livros: true,},},},});};
