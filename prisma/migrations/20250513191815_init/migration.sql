-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_nomeCom_fkey";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "nomeCom" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_nomeCom_fkey" FOREIGN KEY ("nomeCom") REFERENCES "Comunidade"("nome") ON DELETE SET NULL ON UPDATE CASCADE;
