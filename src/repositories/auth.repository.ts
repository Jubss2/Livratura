import {PrismaClient} from '../../generated/prisma'

const prisma = new PrismaClient();

export const findUsuariobyNome = async(nome: string) => {
    return prisma.usuario.findUnique({where:{nome}});
};