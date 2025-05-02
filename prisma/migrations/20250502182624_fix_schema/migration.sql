/*
  Warnings:

  - The values [Colacao,Desafio] on the enum `TipoCatalogo` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `nomeUsuario` on the `MetaDeLeitura` table. All the data in the column will be lost.
  - The primary key for the `admSubordinados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nomeUsu` on the `admSubordinados` table. All the data in the column will be lost.
  - The primary key for the `participantesDesafio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nomeUsu` on the `participantesDesafio` table. All the data in the column will be lost.
  - The primary key for the `usuarioResenha` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nomeUsu` on the `usuarioResenha` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idUsuario]` on the table `MetaDeLeitura` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idUsuario` to the `MetaDeLeitura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsu` to the `admSubordinados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsu` to the `participantesDesafio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsu` to the `usuarioResenha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoCatalogo_new" AS ENUM ('COLECAO', 'DESAFIO');
ALTER TABLE "Catalogo" ALTER COLUMN "tipo" TYPE "TipoCatalogo_new" USING ("tipo"::text::"TipoCatalogo_new");
ALTER TYPE "TipoCatalogo" RENAME TO "TipoCatalogo_old";
ALTER TYPE "TipoCatalogo_new" RENAME TO "TipoCatalogo";
DROP TYPE "TipoCatalogo_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "MetaDeLeitura" DROP CONSTRAINT "MetaDeLeitura_nomeUsuario_fkey";

-- DropForeignKey
ALTER TABLE "admSubordinados" DROP CONSTRAINT "admSubordinados_nomeUsu_fkey";

-- DropForeignKey
ALTER TABLE "participantesDesafio" DROP CONSTRAINT "participantesDesafio_nomeUsu_fkey";

-- DropForeignKey
ALTER TABLE "usuarioResenha" DROP CONSTRAINT "usuarioResenha_nomeUsu_fkey";

-- DropIndex
DROP INDEX "MetaDeLeitura_nomeUsuario_key";

-- AlterTable
ALTER TABLE "MetaDeLeitura" DROP COLUMN "nomeUsuario",
ADD COLUMN     "idUsuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "admSubordinados" DROP CONSTRAINT "admSubordinados_pkey",
DROP COLUMN "nomeUsu",
ADD COLUMN     "idUsu" INTEGER NOT NULL,
ADD CONSTRAINT "admSubordinados_pkey" PRIMARY KEY ("idAdm", "idUsu");

-- AlterTable
ALTER TABLE "participantesDesafio" DROP CONSTRAINT "participantesDesafio_pkey",
DROP COLUMN "nomeUsu",
ADD COLUMN     "idUsu" INTEGER NOT NULL,
ADD CONSTRAINT "participantesDesafio_pkey" PRIMARY KEY ("idUsu", "temaDesafio");

-- AlterTable
ALTER TABLE "usuarioResenha" DROP CONSTRAINT "usuarioResenha_pkey",
DROP COLUMN "nomeUsu",
ADD COLUMN     "idUsu" INTEGER NOT NULL,
ADD CONSTRAINT "usuarioResenha_pkey" PRIMARY KEY ("idUsu", "estrelasResenha");

-- CreateIndex
CREATE UNIQUE INDEX "MetaDeLeitura_idUsuario_key" ON "MetaDeLeitura"("idUsuario");

-- AddForeignKey
ALTER TABLE "admSubordinados" ADD CONSTRAINT "admSubordinados_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantesDesafio" ADD CONSTRAINT "participantesDesafio_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaDeLeitura" ADD CONSTRAINT "MetaDeLeitura_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioResenha" ADD CONSTRAINT "usuarioResenha_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
