-- CreateEnum
CREATE TYPE "TipoPerfil" AS ENUM ('USUARIO', 'ADMINSTRADOR');

-- CreateTable
CREATE TABLE "Livro" (
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL,
    "paginas" INTEGER NOT NULL,
    "resumo" TEXT NOT NULL,
    "tags" TEXT[],
    "estrelas" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("titulo")
);

-- CreateTable
CREATE TABLE "GrupoDeLeitura" (
    "nome" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL,
    "dataEncontro" TIMESTAMP(3) NOT NULL,
    "tituloLivro" TEXT NOT NULL,

    CONSTRAINT "GrupoDeLeitura_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" "TipoPerfil" NOT NULL,
    "nome" TEXT,
    "email" TEXT,
    "descricao" TEXT,
    "cargo" TEXT,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GrupoDeLeitura" ADD CONSTRAINT "GrupoDeLeitura_tituloLivro_fkey" FOREIGN KEY ("tituloLivro") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;
