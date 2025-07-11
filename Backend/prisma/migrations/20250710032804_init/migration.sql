-- CreateEnum
CREATE TYPE "TipoCatalogo" AS ENUM ('COLECAO', 'DESAFIO');

-- CreateTable
CREATE TABLE "Livro" (
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL,
    "paginas" INTEGER NOT NULL,
    "resumo" TEXT NOT NULL,
    "tags" TEXT[],
    "estrelas" DOUBLE PRECISION NOT NULL,
    "capaUrl" TEXT NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("titulo")
);

-- CreateTable
CREATE TABLE "livrosNoCatalogo" (
    "temaCat" TEXT NOT NULL,
    "idLivro" TEXT NOT NULL,

    CONSTRAINT "livrosNoCatalogo_pkey" PRIMARY KEY ("temaCat","idLivro")
);

-- CreateTable
CREATE TABLE "GrupoDeLeitura" (
    "nome" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL,
    "dataEncontro" TIMESTAMP(3) NOT NULL,
    "isbnLivro" TEXT NOT NULL,

    CONSTRAINT "GrupoDeLeitura_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "senha" TEXT NOT NULL,
    "idLivro" TEXT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nomeGrupoDeLeitura" TEXT,
    "nomeCom" TEXT,
    "temaDesafio" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "UsuariosAmigo" (
    "emailAmigo" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,

    CONSTRAINT "UsuariosAmigo_pkey" PRIMARY KEY ("emailAmigo","emailUsuario")
);

-- CreateTable
CREATE TABLE "estante" (
    "emailUsuario" TEXT NOT NULL,
    "idLivro" TEXT NOT NULL,

    CONSTRAINT "estante_pkey" PRIMARY KEY ("emailUsuario","idLivro")
);

-- CreateTable
CREATE TABLE "Catalogo" (
    "tema" TEXT NOT NULL,
    "curtidas" INTEGER NOT NULL,
    "tags" TEXT[],
    "descricao" TEXT NOT NULL,
    "tipo" "TipoCatalogo" NOT NULL,
    "privado" BOOLEAN,
    "criterio" TEXT,
    "emailDono" TEXT NOT NULL,

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
    "emailUsuario" TEXT NOT NULL,
    "nomeConquista" TEXT NOT NULL,

    CONSTRAINT "MetaDeLeitura_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Conquista" (
    "nome" TEXT NOT NULL,
    "criterio" TEXT NOT NULL,
    "temaCatalogo" TEXT,

    CONSTRAINT "Conquista_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Comunidade" (
    "nome" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "curtidas" INTEGER NOT NULL,

    CONSTRAINT "Comunidade_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Resenha" (
    "estrelas" DOUBLE PRECISION NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "tituloLivro" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,

    CONSTRAINT "Resenha_pkey" PRIMARY KEY ("avaliacao")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MetaDeLeitura_emailUsuario_key" ON "MetaDeLeitura"("emailUsuario");

-- AddForeignKey
ALTER TABLE "livrosNoCatalogo" ADD CONSTRAINT "livrosNoCatalogo_temaCat_fkey" FOREIGN KEY ("temaCat") REFERENCES "Catalogo"("tema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livrosNoCatalogo" ADD CONSTRAINT "livrosNoCatalogo_idLivro_fkey" FOREIGN KEY ("idLivro") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrupoDeLeitura" ADD CONSTRAINT "GrupoDeLeitura_isbnLivro_fkey" FOREIGN KEY ("isbnLivro") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idLivro_fkey" FOREIGN KEY ("idLivro") REFERENCES "Livro"("titulo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_nomeGrupoDeLeitura_fkey" FOREIGN KEY ("nomeGrupoDeLeitura") REFERENCES "GrupoDeLeitura"("nome") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_nomeCom_fkey" FOREIGN KEY ("nomeCom") REFERENCES "Comunidade"("nome") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_temaDesafio_fkey" FOREIGN KEY ("temaDesafio") REFERENCES "Catalogo"("tema") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuariosAmigo" ADD CONSTRAINT "UsuariosAmigo_emailAmigo_fkey" FOREIGN KEY ("emailAmigo") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuariosAmigo" ADD CONSTRAINT "UsuariosAmigo_emailUsuario_fkey" FOREIGN KEY ("emailUsuario") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estante" ADD CONSTRAINT "estante_emailUsuario_fkey" FOREIGN KEY ("emailUsuario") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estante" ADD CONSTRAINT "estante_idLivro_fkey" FOREIGN KEY ("idLivro") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_emailDono_fkey" FOREIGN KEY ("emailDono") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaDeLeitura" ADD CONSTRAINT "MetaDeLeitura_emailUsuario_fkey" FOREIGN KEY ("emailUsuario") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaDeLeitura" ADD CONSTRAINT "MetaDeLeitura_nomeConquista_fkey" FOREIGN KEY ("nomeConquista") REFERENCES "Conquista"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conquista" ADD CONSTRAINT "Conquista_temaCatalogo_fkey" FOREIGN KEY ("temaCatalogo") REFERENCES "Catalogo"("tema") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resenha" ADD CONSTRAINT "Resenha_tituloLivro_fkey" FOREIGN KEY ("tituloLivro") REFERENCES "Livro"("titulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resenha" ADD CONSTRAINT "Resenha_emailUsuario_fkey" FOREIGN KEY ("emailUsuario") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
