import { PrismaClient, Livro } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllLivros = async (): Promise<Livro[]> => {
    return prisma.livro.findMany();
};
 export const getLivroByTitulo = async (nome: string) : Promise<Livro | null> => {
   return prisma.livro.findUnique({where: {titulo:  nome}});
 }

type aLivro = {
  titulo: string;
  autor: string;
  dataPublicacao: string;
  paginas: number;
  resumo: string;
  tags: string[];
  estrelas: number;
};

 export const createLivro = async (data: aLivro):
 Promise<Livro> =>{
    return prisma.livro.create({data});
 }
export const deleteLivro = async (nome: string): Promise<Livro> => {
  return prisma.livro.delete({ where: { titulo: nome } });
};

export const updateLivro = async (nome: string, data: aLivro): Promise<Livro> => {
  return prisma.livro.update({ where: { titulo: nome }, data: data });
};
