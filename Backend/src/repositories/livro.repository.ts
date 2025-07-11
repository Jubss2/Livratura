import { PrismaClient, Livro } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllLivros = async (): Promise<Livro[]> => {
    return prisma.livro.findMany();
};
 export const getLivroByTitulo = async (nome: string) : Promise<Livro | null> => {
   return prisma.livro.findUnique({where: {titulo:  nome}});
 }

type aLivro = {
  titulo: string
  autor: string
  dataPublicacao: Date
  paginas: number
  resumo: string
  tags: string[]
  estrelas: number
  capaUrl: string
};

 export const createLivro = async (data: aLivro):
 Promise<Livro> =>{
    return prisma.livro.create({data});
 }
export const deleteLivro = async (titulo: string): Promise<Livro> => {
  return prisma.livro.delete({ where: { titulo: titulo } });
};

export const updateLivro = async (titulo: string, data: aLivro): Promise<Livro> => {
  return prisma.livro.update({ where: { titulo: titulo }, data: data });
};
