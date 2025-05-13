/*
  Warnings:

  - You are about to drop the `Perfil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_livrosParticipantes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `admSubordinados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `participantesDesafio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarioResenha` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idUsu` to the `Resenha` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Catalogo" DROP CONSTRAINT "Catalogo_idDono_fkey";

-- DropForeignKey
ALTER TABLE "MetaDeLeitura" DROP CONSTRAINT "MetaDeLeitura_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_nomeCom_fkey";

-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_nomeGrupoDeLeitura_fkey";

-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_tituloLivro_fkey";

-- DropForeignKey
ALTER TABLE "_livrosParticipantes" DROP CONSTRAINT "_livrosParticipantes_A_fkey";

-- DropForeignKey
ALTER TABLE "_livrosParticipantes" DROP CONSTRAINT "_livrosParticipantes_B_fkey";

-- DropForeignKey
ALTER TABLE "admSubordinados" DROP CONSTRAINT "admSubordinados_idAdm_fkey";

-- DropForeignKey
ALTER TABLE "admSubordinados" DROP CONSTRAINT "admSubordinados_idUsu_fkey";

-- DropForeignKey
ALTER TABLE "estante" DROP CONSTRAINT "estante_idUsu_fkey";

-- DropForeignKey
ALTER TABLE "participantesDesafio" DROP CONSTRAINT "participantesDesafio_idUsu_fkey";

-- DropForeignKey
ALTER TABLE "participantesDesafio" DROP CONSTRAINT "participantesDesafio_temaDesafio_fkey";

-- DropForeignKey
ALTER TABLE "usuarioResenha" DROP CONSTRAINT "usuarioResenha_estrelasResenha_fkey";

-- DropForeignKey
ALTER TABLE "usuarioResenha" DROP CONSTRAINT "usuarioResenha_idUsu_fkey";

-- AlterTable
ALTER TABLE "Resenha" ADD COLUMN     "idUsu" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Perfil";

-- DropTable
DROP TABLE "_livrosParticipantes";

-- DropTable
DROP TABLE "admSubordinados";

-- DropTable
DROP TABLE "participantesDesafio";

-- DropTable
DROP TABLE "usuarioResenha";

-- DropEnum
DROP TYPE "TipoPerfil";

-- CreateTable
CREATE TABLE "livrosNoCatalogo" (
    "temaCat" TEXT NOT NULL,
    "tituloLi" TEXT NOT NULL,

    CONSTRAINT "livrosNoCatalogo_pkey" PRIMARY KEY ("temaCat","tituloLi")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "senha" TEXT NOT NULL,
    "tituloLivro" TEXT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nomeGrupoDeLeitura" TEXT,
    "nomeCom" TEXT NOT NULL,
    "temaDesafio" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nome_key" ON "Usuario"("nome");

-- AddForeignKey
ALTER TABLE "livrosNoCatalogo" ADD CONSTRAINT "livrosNoCatalogo_temaCat_fkey" FOREIGN KEY ("temaCat") REFERENCES "Catalogo"("tema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livrosNoCatalogo" ADD CONSTRAINT "livrosNoCatalogo_tituloLi_fkey" FOREIGN KEY ("tituloLi") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_tituloLivro_fkey" FOREIGN KEY ("tituloLivro") REFERENCES "Livro"("titulo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_nomeGrupoDeLeitura_fkey" FOREIGN KEY ("nomeGrupoDeLeitura") REFERENCES "GrupoDeLeitura"("nome") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_nomeCom_fkey" FOREIGN KEY ("nomeCom") REFERENCES "Comunidade"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_temaDesafio_fkey" FOREIGN KEY ("temaDesafio") REFERENCES "Catalogo"("tema") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estante" ADD CONSTRAINT "estante_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_idDono_fkey" FOREIGN KEY ("idDono") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaDeLeitura" ADD CONSTRAINT "MetaDeLeitura_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resenha" ADD CONSTRAINT "Resenha_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
