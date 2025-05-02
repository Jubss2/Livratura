/*
  Warnings:

  - The primary key for the `Perfil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[nome]` on the table `Perfil` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Perfil` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoCatalogo" AS ENUM ('Colacao', 'Desafio');

-- AlterTable
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "PerfilPerfil" (
    "idAdm" INTEGER NOT NULL,

    CONSTRAINT "PerfilPerfil_pkey" PRIMARY KEY ("idAdm")
);

-- CreateTable
CREATE TABLE "Catalago" (
    "tema" TEXT NOT NULL,
    "curtidas" INTEGER NOT NULL,
    "tags" TEXT[],
    "descricao" TEXT NOT NULL,
    "tipo" "TipoCatalogo" NOT NULL,
    "visibilidade" TEXT,
    "criterio" TEXT,

    CONSTRAINT "Catalago_pkey" PRIMARY KEY ("tema")
);

-- CreateTable
CREATE TABLE "CatalagoUsuario" (
    "nomeUsuario" TEXT NOT NULL,

    CONSTRAINT "CatalagoUsuario_pkey" PRIMARY KEY ("nomeUsuario")
);

-- CreateTable
CREATE TABLE "_subordinados" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_subordinados_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_livrosParticipantes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_livrosParticipantes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CatalagoToCatalagoUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CatalagoToCatalagoUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_subordinados_B_index" ON "_subordinados"("B");

-- CreateIndex
CREATE INDEX "_livrosParticipantes_B_index" ON "_livrosParticipantes"("B");

-- CreateIndex
CREATE INDEX "_CatalagoToCatalagoUsuario_B_index" ON "_CatalagoToCatalagoUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_nome_key" ON "Perfil"("nome");

-- AddForeignKey
ALTER TABLE "PerfilPerfil" ADD CONSTRAINT "PerfilPerfil_idAdm_fkey" FOREIGN KEY ("idAdm") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatalagoUsuario" ADD CONSTRAINT "CatalagoUsuario_nomeUsuario_fkey" FOREIGN KEY ("nomeUsuario") REFERENCES "Perfil"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_subordinados" ADD CONSTRAINT "_subordinados_A_fkey" FOREIGN KEY ("A") REFERENCES "Perfil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_subordinados" ADD CONSTRAINT "_subordinados_B_fkey" FOREIGN KEY ("B") REFERENCES "PerfilPerfil"("idAdm") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_livrosParticipantes" ADD CONSTRAINT "_livrosParticipantes_A_fkey" FOREIGN KEY ("A") REFERENCES "Catalago"("tema") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_livrosParticipantes" ADD CONSTRAINT "_livrosParticipantes_B_fkey" FOREIGN KEY ("B") REFERENCES "Livro"("titulo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalagoToCatalagoUsuario" ADD CONSTRAINT "_CatalagoToCatalagoUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Catalago"("tema") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalagoToCatalagoUsuario" ADD CONSTRAINT "_CatalagoToCatalagoUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "CatalagoUsuario"("nomeUsuario") ON DELETE CASCADE ON UPDATE CASCADE;
