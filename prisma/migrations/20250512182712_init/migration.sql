-- CreateTable
CREATE TABLE "UsuariosAmigo" (
    "idAmigo" INTEGER NOT NULL,
    "idUsu" INTEGER NOT NULL,

    CONSTRAINT "UsuariosAmigo_pkey" PRIMARY KEY ("idAmigo","idUsu")
);

-- AddForeignKey
ALTER TABLE "UsuariosAmigo" ADD CONSTRAINT "UsuariosAmigo_idAmigo_fkey" FOREIGN KEY ("idAmigo") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuariosAmigo" ADD CONSTRAINT "UsuariosAmigo_idUsu_fkey" FOREIGN KEY ("idUsu") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
