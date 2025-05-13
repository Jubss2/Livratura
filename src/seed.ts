import { PrismaClient } from "../generated/prisma";
import argon2 from 'argon2';
const prisma = new PrismaClient();
async function main(){
    console.log('Iniciando o seed...')
    const livros = await prisma.livro.createMany({
    data:[{
        titulo: "Dom Casmurro",
        autor: "Joaquim Maria Machado de Assis",
        dataPublicacao: "1899", 
        paginas:208,
        resumo: "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.",
        tags:["Clássico", "Literatura Brasileira" , "Fuvest"] ,
        estrelas: 4.8
          },
          {
        titulo: "O Alienista",
        autor: "Joaquim Maria Machado de Assis",
        dataPublicacao: "1882",
        paginas:112,
        resumo: "A vila de Itaguaí jamais foi a mesma depois que Simão Bacamarte fez esta declaração a Sua Majestade. Embrenhado pelos fios tênues que separam a loucura da sanidade e amparado pelo poder político e social que a alcunha de “Dr.” lhe confere, Bacamarte se depara com as virtudes e fraquezas humanas da sociedade itaguaiense; um espelho, em menor ou maior grau de qualquer outra sociedade - Já que formada por seres humanos. Cada personagem, cidadãos ilustres da pequena vila, têm suas particularidades intrínsecas dissecadas, nas artimanhas mentais, melindres psíquicos e nos atos coletivos que respondem ao agir do poder público na cidade. Lúcido ou louco? Médico ou monstro? Só o cientista poderá responder, sobre os outros, ou melhor ainda, sobre si mesmo.",
        tags:["Clássico", "Literatura Brasileira" ] ,
        estrelas: 4.6
          }
        ]
    });
  
    const comunidade = await prisma.comunidade.create({
    data: {
        nome: "Comunidade Literária",
        comentario: "Bem-vindo ao nosso clube de leitura!",
        data: new Date(),
        curtidas: 15
        }
    });
    const grupoLeitura = await prisma.grupoDeLeitura.create({
    data: {
          nome: "Clube Machado de Assis",
          dataCriacao: "04/02/2025",
          dataEncontro: "02/06/2025",
          tituloLivro: "Dom Casmurro"
        }
    });

    const usuarios = await prisma.usuario.createMany({
    data:[ {
        id: 1,
        senha: await argon2.hash('12345'),
        tituloLivro: "Dom Casmurro",
        nome: "João Leitor",
        email: "joao@email.com",
        descricao: "Apaixonado por literatura brasileira",
        nomeCom: "Comunidade Literária",
        nomeGrupoDeLeitura: "Clube Machado de Assis"
    },
    {
        id: 2,
        senha: await argon2.hash('6789'),
        tituloLivro: "Dom Casmurro",
        nome: "Maria Leitora",
        email: "Maria@email.com",
        descricao: "Amante da literatura brasileira",
        nomeCom: "Comunidade Literária",
        nomeGrupoDeLeitura: "Clube Machado de Assis"
    }
  ]
    });
    
    const UsuarioAmigo = await prisma.usuariosAmigo.create({
    data: {
        idAmigo: 1,
        idUsu: 2
        }
    });
    const catalogo = await prisma.catalogo.create({
    data: {
        tema: "Literatura Brasileira",
        curtidas: 10,
        tags: ["Machado de Assis", "Realismo"],
        descricao: "Um catálogo para quem ama a literatura clássica brasileira",
        tipo: "COLECAO",
        idDono: 1,
        visibilidade: "publica"
    }
    });
    const livroCatalogo = await prisma.livrosNoCatalogo.createMany({
    data: [{
        temaCat: "Literatura Brasileira",
        tituloLi: "Dom Casmurro",
    },
    {
        temaCat: "Literatura Brasileira",
        tituloLi: "O Alienista",
    } 
    ]
    });

    const estantesUsuario = await prisma.estante.createMany({
    data: [{
        idUsu: 1, 
        tituloLi: "Dom Casmurro"
    },
    {
        idUsu: 1, 
        tituloLi: "O Alienista"
    },
    {
        idUsu: 2, 
        tituloLi: "Dom Casmurro"
    }
  ]
    });
    const conquista = await prisma.conquista.create({
    data: {
        nome: "Desafio Literário 2025",
        criterio: "Livro Lidos",
    } 
    });
    const metaLeitura = await prisma.metaDeLeitura.createMany({
    data: [{
        nome: "Ler 12 livros no ano",
        tipo: "Anual",
        meta: 12,
        progresso: 3,
        paginasLidas: 500,
        livrosLidos: 3,
        idUsuario: 1,
        nomeConquista: "Desafio Literário 2025"
    },
    {
        nome: "Ler 8 livros no ano",
        tipo: "Anual",
        meta: 8,
        progresso: 15,
        paginasLidas: 300,
        livrosLidos: 1,
        idUsuario: 2,
        nomeConquista: "Desafio Literário 2025"
    }
  ]
    });


    const resenhaLivro = await prisma.resenha.create({
    data: {
        estrelas: 4.8,
        avaliacao: "Um clássico fascinante!",
        tituloLivro: "O Alienista",
        idUsu: 1
    }
    });
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