import {PrismaClient} from '../../generated/prisma'

const prisma = new PrismaClient();

export const findUsuariobyEmail = async(email: string) => {
    return prisma.usuario.findUnique({where:{email}});
};