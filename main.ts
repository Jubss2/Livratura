abstract class Perfil{
    constructor(public id: string, private senha:string) {}
    
}

class Administrador extends Perfil{
    constructor(id: string, senha: string, public cargo: string){
        super(id,senha);
    };
}

class Usuario extends Perfil{
    constructor(id: string, senha: string, public nome: string, 
        private email:string, public descricao: string, public amigos:Usuario[],
        public estante: Livro[]){
        super(id,senha);
    };
}
class MetasDeLeitura{
    constructor(public usuario: Usuario, public tipo:string, 
        public meta: number, private progresso : number,
        public paginasLidas: number, public livrosLidos: number,
    ){};
    
}
class Comunidade{
    constructor(public comentario: string, public data:Date, participantesCom: Usuario[]){};
}
 
class GrupoDeLeitura{
    constructor(private nome: string, private dataCriacao: Date, private dataEncontro: Date, private participantesGDL: Usuario[], private leituraConjunta: Livro ) {};
}

class Livro{
    constructor(private titulo: string,private autor: string,private dataPublicacao: Date, paginas: number,
        private resumo: string, private tags : string[], private estrelas: number) {};
}
abstract class Catalogo{
    constructor(public tema: string, public curtidas: number, public tags: string[],
         public descricao: string, public verificador:Administrador, public dono:Usuario,
        public livros:Livro[]) {};
}

class Colecoes extends Catalogo{
    constructor(tema: string, curtidas: number, tags: string[], descricao: string, 
        verificador:Administrador, dono:Usuario, livros: Livro[], public visibilidade: string ) {
        super(tema,curtidas, tags, descricao, verificador, dono, livros);
    };
}
class Desafios extends Catalogo{
    constructor(tema: string, curtidas: number, tags: string[], descricao: string, 
        verificador:Administrador, dono:Usuario,livros: Livro[],public criterio: string,){
        super(tema,curtidas, tags, descricao, verificador, dono, livros);
    };
}
class Medalhas_Conquistas{
    constructor(private nome: string, private criterio: string, 
        public meta:MetasDeLeitura, public desafio:Desafios) {};
}

class Resenha{
    constructor(public livro: Livro,
        public usuario: Usuario,
        public estrelas?:number, 
        public avaliacao?:string,
        ) {};
}