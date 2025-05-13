/*
  Warnings:

  - You are about to drop the column `nomeMeta` on the `Conquista` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Conquista_nome_key";

-- DropIndex
DROP INDEX "MetaDeLeitura_nomeConquista_key";

-- AlterTable
ALTER TABLE "Conquista" DROP COLUMN "nomeMeta";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Usuario_id_seq";
