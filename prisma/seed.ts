import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
async function main(){
    console.log('Iniciando o seed...')
    const domCasmurro = await prisma.livro.create({
    data:{
        titulo: "Dom Casmurro",
        autor: "Joaquim Maria Machado de Assis",
        dataPublicacao: new Date('1899'), 
        paginas:208,
        resumo: "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.",
        tags:["Clássico", "Literatura Brasileira" , "Fuvest"] , estrelas: 4.8
          }
    })
   const perfil = await prisma.perfil.create({
  data: {
    id: 1,
    senha: "senha123",
    tipo: "USUARIO",
    nome: "jose.leitor",
    email: "jose@example.com",
    descricao: "Amante da literatura clássica.",
    cargo: "Leitor",
  }
})
const perfilAdm = await prisma.perfil.create({
    data: {
      id: 2,
      senha: "admin123",
      tipo: "ADMINSTRADOR",
      nome: "ana.admin",
      email: "ana@example.com",
      descricao: "Administrador do sistema.",
      cargo: "Administrador"
    }
  });
  
const grupo = await prisma.grupoDeLeitura.create({
    data: {
      nome: "Grupo Machado",
      dataCriacao: new Date(),
      dataEncontro: new Date('2025-05-10'),
      tituloLivro: "Dom Casmurro",
    }
  })
  const catalogo = await prisma.catalogo.create({
    data: {
      tema: "Desafio Clássicos",
      curtidas: 20,
      tags: ["Clássico", "Machado"],
      descricao: "Leia obras clássicas da literatura brasileira.",
      tipo: "DESAFIO",
      visibilidade: "Público",
      criterio: "Ler 3 clássicos",
      idDono: perfil.id,
     
    }
  })
  const conquista = await prisma.conquista.create({
    data: {
      nome: "Primeira Meta",
      criterio: "Ler 1 livro clássico",
      nomeMeta: "Meta Clássicos 2025"
    }
  })
  const relacionamentoAdm = await prisma.admSubordinados.create({
    data: {
      idAdm: 2,
      idUsu: 1  
    }
  })  
  const meta = await prisma.metaDeLeitura.create({
    data: {
      nome: "Meta Clássicos 2025",
      tipo: "Páginas",
      meta: 1000,
      progresso: 200,
      paginasLidas: 200,
      livrosLidos: 1,
      idUsuario: perfil.id,
      nomeConquista: "Primeira Meta"
    }
  })

  const comunidade = await prisma.comunidade.create({
    data: {
      nome: "Clube de Leitura",
      comentario: "Vamos debater os clássicos!",
      data: new Date(),
      curtidas: 15,
      
    }
  })
  const resenha = await prisma.resenha.create({
    data: {
      estrelas: 4.8,
      avaliacao: "Obra-prima de Machado!",
      tituloLivro: "Dom Casmurro",
    }
  })
  const usuarioResenha = await prisma.usuarioResenha.create({
    data: {
      idUsu: 1, // ID do Perfil
      estrelasResenha: 4.8 
    }
  });
  const participanteDesafio = await prisma.participantesDesafio.create({
    data: {
      idUsu: 1, 
      temaDesafio: "Desafio Clássicos" 
    }
  });
  
  const estante = await prisma.estante.create({
    data: {
      idUsu: perfil.id,
      tituloLi: "Dom Casmurro"
    }
  })
    
          
}

main()
.catch((e) => {
    console.error('Erro no seed:', e)
    process.exit(1)
})

.finally(() => {
    prisma.$disconnect();
    console.log('Seed concluído!');
});