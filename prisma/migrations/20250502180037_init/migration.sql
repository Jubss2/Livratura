/*
  Warnings:

  - The primary key for the `Resenha` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarioResenha` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "usuarioResenha" DROP CONSTRAINT "usuarioResenha_estrelasResenha_fkey";

-- AlterTable
ALTER TABLE "Livro" ALTER COLUMN "estrelas" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Resenha" DROP CONSTRAINT "Resenha_pkey",
ALTER COLUMN "estrelas" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "Resenha_pkey" PRIMARY KEY ("estrelas");

-- AlterTable
ALTER TABLE "usuarioResenha" DROP CONSTRAINT "usuarioResenha_pkey",
ALTER COLUMN "estrelasResenha" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "usuarioResenha_pkey" PRIMARY KEY ("nomeUsu", "estrelasResenha");

-- AddForeignKey
ALTER TABLE "usuarioResenha" ADD CONSTRAINT "usuarioResenha_estrelasResenha_fkey" FOREIGN KEY ("estrelasResenha") REFERENCES "Resenha"("estrelas") ON DELETE RESTRICT ON UPDATE CASCADE;
