/*
  Warnings:

  - You are about to drop the `CatalagoUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CatalagoToCatalagoUsuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nomeDono` to the `Catalago` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CatalagoUsuario" DROP CONSTRAINT "CatalagoUsuario_nomeUsuario_fkey";

-- DropForeignKey
ALTER TABLE "_CatalagoToCatalagoUsuario" DROP CONSTRAINT "_CatalagoToCatalagoUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatalagoToCatalagoUsuario" DROP CONSTRAINT "_CatalagoToCatalagoUsuario_B_fkey";

-- AlterTable
ALTER TABLE "Catalago" ADD COLUMN     "nomeDono" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Perfil" ADD COLUMN     "temaCat" TEXT;

-- DropTable
DROP TABLE "CatalagoUsuario";

-- DropTable
DROP TABLE "_CatalagoToCatalagoUsuario";

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_temaCat_fkey" FOREIGN KEY ("temaCat") REFERENCES "Catalago"("tema") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalago" ADD CONSTRAINT "Catalago_nomeDono_fkey" FOREIGN KEY ("nomeDono") REFERENCES "Perfil"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
