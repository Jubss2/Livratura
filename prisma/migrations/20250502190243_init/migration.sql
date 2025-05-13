-- AlterTable
ALTER TABLE "Perfil" ADD COLUMN     "tituloLivro" TEXT;

-- CreateTable
CREATE TABLE "estante" (
    "idUsu" INTEGER NOT NULL,
    "tituloLi" TEXT NOT NULL,

    CONSTRAINT "estante_pkey" PRIMARY KEY ("idUsu","tituloLi")
);

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_tituloLivro_fkey" FOREIGN KEY ("tituloLivro") REFERENCES "Livro"("titulo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estante" ADD CONSTRAINT "estante_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estante" ADD CONSTRAINT "estante_tituloLi_fkey" FOREIGN KEY ("tituloLi") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;
