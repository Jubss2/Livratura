import { PrismaClient } from "../generated/prisma";
import argon2 from 'argon2';
const prisma = new PrismaClient();
async function main() {
    console.log('Iniciando o seed...')
    const livros = await prisma.livro.createMany({
        data: [{

            titulo: "Dom Casmurro",
            autor: "Joaquim Maria Machado de Assis",
            dataPublicacao: '1889-11-01T10:00:00.000Z',
            paginas: 208,
            resumo: "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.",
            tags: ["Clássico", "Literatura Brasileira", "Fuvest"],
            estrelas: 4.8,
            capaUrl: 'https://ia800404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_55.zip&file=0010558903-L.jpg'
        },
        {

            titulo: "O Alienista",
            autor: "Joaquim Maria Machado de Assis",
            dataPublicacao: '1882-11-01T10:00:00.000Z',
            paginas: 112,
            resumo: "A vila de Itaguaí jamais foi a mesma depois que Simão Bacamarte fez esta declaração a Sua Majestade. Embrenhado pelos fios tênues que separam a loucura da sanidade e amparado pelo poder político e social que a alcunha de “Dr.” lhe confere, Bacamarte se depara com as virtudes e fraquezas humanas da sociedade itaguaiense; um espelho, em menor ou maior grau de qualquer outra sociedade - Já que formada por seres humanos. Cada personagem, cidadãos ilustres da pequena vila, têm suas particularidades intrínsecas dissecadas, nas artimanhas mentais, melindres psíquicos e nos atos coletivos que respondem ao agir do poder público na cidade. Lúcido ou louco? Médico ou monstro? Só o cientista poderá responder, sobre os outros, ou melhor ainda, sobre si mesmo.",
            tags: ["Clássico", "Literatura Brasileira"],
            estrelas: 4.6,
            capaUrl: 'https://ia804605.us.archive.org/view_archive.php?archive=/14/items/l_covers_0011/l_covers_0011_68.zip&file=0011688576-L.jpg'
        },
        {

            titulo: "Memórias Póstumas de Brás Cubas",
            autor: "Joaquim Maria Machado de Assis",
            dataPublicacao: '1881-05-01T10:00:00.000Z',
            paginas: 224,
            resumo: "Um defunto autor, Brás Cubas, decide narrar sua própria vida, desde o túmulo. Através de um tom irônico e cético, ele revisita suas memórias, amores, frustrações e a sociedade carioca do século XIX. A obra é um marco do Realismo brasileiro, subvertendo convenções narrativas e criticando de forma mordaz as hipocrisias e vaidades humanas.",
            tags: ["Clássico", "Humor", "Realismo"],
            estrelas: 4.8,
            capaUrl: 'https://covers.openlibrary.org/b/id/14822565-L.jpg'
        },
        {

            titulo: "Quincas Borba",
            autor: "Joaquim Maria Machado de Assis",
            dataPublicacao: '1891-01-01T10:00:00.000Z',
            paginas: 288,
            resumo: "Rubião, um ex-professor provinciano e ingênuo, herda a fortuna de seu amigo, o excêntrico filósofo Quincas Borba, com uma única condição: cuidar de um cachorro que também se chama Quincas Borba. Acompanhado da filosofia humanitista do finado, Rubião se muda para o Rio de Janeiro e se vê imerso nas artimanhas e jogos sociais da corte. A obra é uma crítica ácida à sociedade da época, à ganância e à loucura que o dinheiro pode trazer, tudo isso sob a lente do irônico 'Humanitismo' de Borba.",
            tags: ["Clássico", "Literatura Brasileira", "Filosofia"],
            estrelas: 4.5,
            capaUrl: 'https://ia801200.us.archive.org/view_archive.php?archive=/19/items/olcovers12/olcovers12-L.zip&file=123420-L.jpg'
        }, {
            titulo: "O Cortiço",
            autor: "Aluísio Azevedo",
            dataPublicacao: '1890-01-01T10:00:00.000Z',
            paginas: 256,
            resumo: "Retrato fiel e contundente do naturalismo no Brasil, o romance narra a vida em um cortiço no Rio de Janeiro, evidenciando o determinismo social, a influência do meio e a luta de classes em uma narrativa rica e envolvente.",
            tags: ["Naturalismo", "Realismo", "Literatura Brasileira"],
            estrelas: 4.5,
            capaUrl: 'https://m.media-amazon.com/images/I/41DLCoO9+yL._SY445_SX342_PQ80_.jpg'
        },
        {
            titulo: "Iracema",
            autor: "José de Alencar",
            dataPublicacao: '1865-01-01T10:00:00.000Z',
            paginas: 160,
            resumo: "Um dos maiores expoentes do romantismo indianista, Iracema conta a trágica história de amor entre a indígena Iracema e o colonizador Martim. A obra é uma alegoria sobre a formação do povo brasileiro e a perda da inocência indígena.",
            tags: ["Romantismo", "Indianismo", "Literatura Brasileira"],
            estrelas: 4.4,
            capaUrl: 'https://ia801200.us.archive.org/view_archive.php?archive=/19/items/olcovers12/olcovers12-L.zip&file=123862-L.jpg'
        },
        {
            titulo: "Grande Sertão: Veredas",
            autor: "João Guimarães Rosa",
            dataPublicacao: '1956-01-01T10:00:00.000Z',
            paginas: 624,
            resumo: "Neste épico sertanejo, Riobaldo, ex-jagunço, narra sua vida e suas reflexões filosóficas, com destaque para seu amor ambíguo por Diadorim. Com linguagem inovadora e poética, a obra mergulha no sertão mineiro e na alma humana.",
            tags: ["Modernismo", "Sertão", "Literatura Brasileira"],
            estrelas: 4.9,
            capaUrl: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9786559210572/grande-sertao-veredas-edicao-de-bolso.jpg'
        },
        {
            titulo: "Vidas Secas",
            autor: "Graciliano Ramos",
            dataPublicacao: '1938-01-01T10:00:00.000Z',
            paginas: 176,
            resumo: "A obra retrata a dura realidade de uma família sertaneja fugindo da seca no nordeste. Com uma linguagem seca e direta, Graciliano Ramos constrói uma crítica social sobre miséria, desigualdade e sobrevivência humana.",
            tags: ["Modernismo", "Regionalismo", "Literatura Brasileira"],
            estrelas: 4.6,
            capaUrl: 'https://m.media-amazon.com/images/I/41DiWFpIFuL._SY445_SX342_PQ80_.jpg'
        },
        {
            titulo: "Marília de Dirceu",
            autor: "Tomás Antônio Gonzaga",
            dataPublicacao: '1792-01-01T10:00:00.000Z',
            paginas: 192,
            resumo: "Obra-prima do arcadismo brasileiro, Marília de Dirceu é uma coletânea de poesias líricas escritas por Tomás Antônio Gonzaga durante o período em que esteve preso, acusado de participar da Inconfidência Mineira. O eu-lírico Dirceu expressa seu amor idealizado por Marília, mesclando sentimentos pessoais com elementos bucólicos e críticas sociais sutis.",
            tags: ["Arcadismo", "Poesia", "Literatura Brasileira", "Colonial"],
            estrelas: 4.2,
            capaUrl: 'https://m.media-amazon.com/images/I/31gsZ17s0QL._SY445_SX342_PQ80_.jpg'
        }
        ]
    });

    const comunidade = await prisma.comunidade.create({
        data: {
            nome: "Comunidade Literária",
            comentario: "Bem-vindo ao nosso clube de leitura!",
            data: "2024-11-01T10:00:00.000Z",
            curtidas: 15
        }
    });
    const grupoLeitura = await prisma.grupoDeLeitura.create({
        data: {
            nome: "Clube Machado de Assis",
            dataCriacao: "2023-11-01T10:00:00.000Z",
            dataEncontro: "2023-11-01T10:00:00.000Z",
            isbnLivro: 'Dom Casmurro'
        }
    });

    const usuarios = await prisma.usuario.createMany({
        data: [{
            senha: await argon2.hash('Joao#2025'),
            idLivro: 'Dom Casmurro',
            nome: "João",
            email: "joao@email.com",
            descricao: "Apaixonado por literatura brasileira",
            nomeCom: "Comunidade Literária",
            nomeGrupoDeLeitura: "Clube Machado de Assis"
        },
        {
            senha: await argon2.hash('Maria#2025'),
            idLivro: "O Alienista",
            nome: "Maria",
            email: "maria@email.com",
            descricao: "Amante da literatura brasileira",
            nomeCom: "Comunidade Literária",
            nomeGrupoDeLeitura: "Clube Machado de Assis",

        }
        ]
    });

    const UsuarioAmigo = await prisma.usuariosAmigo.create({
        data: {
            emailAmigo: 'joao@email.com',
            emailUsuario: 'maria@email.com'
        }
    });
    const catalogo1 = await prisma.catalogo.create({
        data: {
            tema: "Literatura Brasileira",
            curtidas: 5,
            tags: ["Literatura Brasileira", "Realismo"],
            descricao: "Junção dos melhores da literatura brasileira",
            tipo: "COLECAO",
            emailDono: 'joao@email.com',
            privado: false
        },

    });
    const catalogo2 = await prisma.catalogo.create({
        data: {
            tema: "Machado de Assis",
            curtidas: 8,
            tags: ["Machado de Assis", "Literatura Brasileira"],
            descricao: " Coleção com todos os livros publicados por Machado de Assis",
            tipo: "COLECAO",
            emailDono: 'maria@email.com',
            privado: false
        },

    });

    const catalogo3 = await prisma.catalogo.create({
        data: {
            tema: "Fuvest 2024",
            curtidas: 10,
            tags: ["Fuvest", "Clássicos", "Vestibular"],
            descricao: "Venha ver os livros usados no vestibular da Fuvest",
            tipo: "COLECAO",
            emailDono: 'joao@email.com',
            privado: false
        },

    });
    const desafio1 = await prisma.catalogo.create({
        data: {
            tema: "Desafio Realismo Brasileiro",
            curtidas: 5,
            tags: ["Realismo", "Clássicos", "Literatura Brasileira"],
            descricao: "Desafio para ler grandes obras realistas da literatura nacional.",
            tipo: "DESAFIO",
            privado: false,
            criterio: "paginas >= 200",
            emailDono: 'maria@email.com',

        },
    })
    const livroCatalogo = await prisma.livrosNoCatalogo.createMany({
        data: [{
            temaCat: "Literatura Brasileira",
            idLivro: 'Memórias Póstumas de Brás Cubas',

        },
        {
            temaCat: "Literatura Brasileira",
            idLivro: "Grande Sertão: Veredas",

        },
        {
            temaCat: "Desafio Realismo Brasileiro",
            idLivro: "O Alienista",

        },
        {
            temaCat: "Desafio Realismo Brasileiro",
            idLivro: 'Memórias Póstumas de Brás Cubas',

        },
        {
            temaCat: "Machado de Assis",
            idLivro: 'Dom Casmurro',

        },
        {
            temaCat: "Machado de Assis",
            idLivro: "O Alienista",

        },
        {
            temaCat: "Machado de Assis",
            idLivro: 'Memórias Póstumas de Brás Cubas',

        },
        {
            temaCat: "Machado de Assis",
            idLivro: "Quincas Borba",

        },
        {
            temaCat: "Fuvest 2024",
            idLivro: "Quincas Borba",

        },
        {
            temaCat: "Fuvest 2024",
            idLivro: 'Marília de Dirceu',

        },
        {
            temaCat: "Literatura Brasileira",
            idLivro: "Iracema",
        },
        {
            temaCat: "Literatura Brasileira",
            idLivro: "Quincas Borba",
        },
        {
            temaCat: "Literatura Brasileira",
            idLivro: "Vidas Secas",
        }
        ]
    });

    await prisma.usuario.updateMany({
        where: { email: { in: ["joao@email.com", "maria@email.com"] } },
        data: {
            temaDesafio: desafio1.tema
        }
    });

    const estantesUsuario = await prisma.estante.createMany({
        data: [{
            emailUsuario: 'joao@email.com',
            idLivro: 'Memórias Póstumas de Brás Cubas'
        },
        {
            emailUsuario: 'joao@email.com',
            idLivro: 'Dom Casmurro'
        },
        {
            emailUsuario: 'maria@email.com',
            idLivro: "O Alienista"
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
            emailUsuario: 'joao@email.com',
            nomeConquista: "Desafio Literário 2025"
        },
        {
            nome: "Ler 8 livros no ano",
            tipo: "Anual",
            meta: 8,
            progresso: 15,
            paginasLidas: 300,
            livrosLidos: 1,
            emailUsuario: 'maria@email.com',
            nomeConquista: "Desafio Literário 2025"
        }
        ]
    });


    const resenhaLivro = await prisma.resenha.create({
        data: {
            estrelas: 4.8,
            avaliacao: "Um clássico fascinante!",
            tituloLivro: 'Dom Casmurro',
            emailUsuario: 'joao@email.com'
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