/*
  Warnings:

  - You are about to drop the column `temaCat` on the `Perfil` table. All the data in the column will be lost.
  - You are about to drop the `Catalago` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerfilPerfil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_subordinados` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Catalago" DROP CONSTRAINT "Catalago_nomeDono_fkey";

-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_temaCat_fkey";

-- DropForeignKey
ALTER TABLE "PerfilPerfil" DROP CONSTRAINT "PerfilPerfil_idAdm_fkey";

-- DropForeignKey
ALTER TABLE "_livrosParticipantes" DROP CONSTRAINT "_livrosParticipantes_A_fkey";

-- DropForeignKey
ALTER TABLE "_subordinados" DROP CONSTRAINT "_subordinados_A_fkey";

-- DropForeignKey
ALTER TABLE "_subordinados" DROP CONSTRAINT "_subordinados_B_fkey";

-- AlterTable
ALTER TABLE "Perfil" DROP COLUMN "temaCat",
ADD COLUMN     "nomeCom" TEXT,
ADD COLUMN     "nomeGrupoDeLeitura" TEXT;

-- DropTable
DROP TABLE "Catalago";

-- DropTable
DROP TABLE "PerfilPerfil";

-- DropTable
DROP TABLE "_subordinados";

-- CreateTable
CREATE TABLE "admSubordinados" (
    "idAdm" INTEGER NOT NULL,
    "nomeUsu" TEXT NOT NULL,

    CONSTRAINT "admSubordinados_pkey" PRIMARY KEY ("idAdm","nomeUsu")
);

-- CreateTable
CREATE TABLE "participantesDesafio" (
    "nomeUsu" TEXT NOT NULL,
    "temaDesafio" TEXT NOT NULL,

    CONSTRAINT "participantesDesafio_pkey" PRIMARY KEY ("nomeUsu","temaDesafio")
);

-- CreateTable
CREATE TABLE "Catalogo" (
    "tema" TEXT NOT NULL,
    "curtidas" INTEGER NOT NULL,
    "tags" TEXT[],
    "descricao" TEXT NOT NULL,
    "tipo" "TipoCatalogo" NOT NULL,
    "visibilidade" TEXT,
    "criterio" TEXT,
    "idDono" INTEGER NOT NULL,

    CONSTRAINT "Catalogo_pkey" PRIMARY KEY ("tema")
);

-- CreateTable
CREATE TABLE "MetaDeLeitura" (
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "meta" INTEGER NOT NULL,
    "progresso" INTEGER NOT NULL,
    "paginasLidas" INTEGER NOT NULL,
    "livrosLidos" INTEGER NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "nomeConquista" TEXT NOT NULL,

    CONSTRAINT "MetaDeLeitura_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Conquista" (
    "nome" TEXT NOT NULL,
    "criterio" TEXT NOT NULL,
    "nomeMeta" TEXT NOT NULL,
    "temaCatalago" TEXT,

    CONSTRAINT "Conquista_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Comunidade" (
    "nome" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "curtidas" INTEGER NOT NULL,
    "nomeUsuario" TEXT NOT NULL,

    CONSTRAINT "Comunidade_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Resenha" (
    "estrelas" INTEGER NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "tituloLivro" TEXT NOT NULL,

    CONSTRAINT "Resenha_pkey" PRIMARY KEY ("estrelas")
);

-- CreateTable
CREATE TABLE "usuarioResenha" (
    "nomeUsu" TEXT NOT NULL,
    "estrelasResenha" INTEGER NOT NULL,

    CONSTRAINT "usuarioResenha_pkey" PRIMARY KEY ("nomeUsu","estrelasResenha")
);

-- CreateIndex
CREATE UNIQUE INDEX "MetaDeLeitura_nomeUsuario_key" ON "MetaDeLeitura"("nomeUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "MetaDeLeitura_nomeConquista_key" ON "MetaDeLeitura"("nomeConquista");

-- CreateIndex
CREATE UNIQUE INDEX "Conquista_nome_key" ON "Conquista"("nome");

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_nomeGrupoDeLeitura_fkey" FOREIGN KEY ("nomeGrupoDeLeitura") REFERENCES "GrupoDeLeitura"("nome") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_nomeCom_fkey" FOREIGN KEY ("nomeCom") REFERENCES "Comunidade"("nome") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admSubordinados" ADD CONSTRAINT "admSubordinados_idAdm_fkey" FOREIGN KEY ("idAdm") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admSubordinados" ADD CONSTRAINT "admSubordinados_nomeUsu_fkey" FOREIGN KEY ("nomeUsu") REFERENCES "Perfil"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantesDesafio" ADD CONSTRAINT "participantesDesafio_nomeUsu_fkey" FOREIGN KEY ("nomeUsu") REFERENCES "Perfil"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participantesDesafio" ADD CONSTRAINT "participantesDesafio_temaDesafio_fkey" FOREIGN KEY ("temaDesafio") REFERENCES "Catalogo"("tema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_idDono_fkey" FOREIGN KEY ("idDono") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaDeLeitura" ADD CONSTRAINT "MetaDeLeitura_nomeUsuario_fkey" FOREIGN KEY ("nomeUsuario") REFERENCES "Perfil"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaDeLeitura" ADD CONSTRAINT "MetaDeLeitura_nomeConquista_fkey" FOREIGN KEY ("nomeConquista") REFERENCES "Conquista"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conquista" ADD CONSTRAINT "Conquista_temaCatalago_fkey" FOREIGN KEY ("temaCatalago") REFERENCES "Catalogo"("tema") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resenha" ADD CONSTRAINT "Resenha_tituloLivro_fkey" FOREIGN KEY ("tituloLivro") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioResenha" ADD CONSTRAINT "usuarioResenha_nomeUsu_fkey" FOREIGN KEY ("nomeUsu") REFERENCES "Perfil"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioResenha" ADD CONSTRAINT "usuarioResenha_estrelasResenha_fkey" FOREIGN KEY ("estrelasResenha") REFERENCES "Resenha"("estrelas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_livrosParticipantes" ADD CONSTRAINT "_livrosParticipantes_A_fkey" FOREIGN KEY ("A") REFERENCES "Catalogo"("tema") ON DELETE CASCADE ON UPDATE CASCADE;
