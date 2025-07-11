import { PrismaClient, GrupoDeLeitura} from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllGrupoDeLeituras = async (): Promise<GrupoDeLeitura[]> => {
    return prisma.grupoDeLeitura.findMany();
};
 export const getGrupoDeLeituraByNome = async (grupo: string) : Promise<GrupoDeLeitura | null> => {
   return prisma.grupoDeLeitura.findUnique({where: {nome:  grupo}});
 }


type aGrupoDeLeitura = {
    nome: string
    dataCriacao: Date
    dataEncontro: Date
    usuarios: number[]
    isbnLivro: string
};

 export const createGrupoDeLeitura = async (data: aGrupoDeLeitura):
 Promise<GrupoDeLeitura> =>{
    return prisma.grupoDeLeitura.create({data});
 }
export const deleteGrupoDeLeitura = async (grupo: string): Promise<GrupoDeLeitura> => {
  return prisma.grupoDeLeitura.delete({ where: { nome: grupo } });
};

export const updateGrupoDeLeitura = async (grupo: string, data: aGrupoDeLeitura): Promise<GrupoDeLeitura> => {
  return prisma.grupoDeLeitura.update({ where: { nome: grupo }, data: data });
};
