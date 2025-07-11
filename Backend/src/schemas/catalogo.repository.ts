/**
 * @openapi
 * /catalogos/{tipo}:
 *   get:
 *     tags: [Catalogos]
 *     summary: Lista todos os catálogos de um tipo
 *     parameters:
 *       - name: tipo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           enum: [COLECAO, DESAFIO]
 *     responses:
 *       200:
 *         description: Lista de catálogos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Catalogo'
 *   post:
 *     tags: [Catalogos]
 *     summary: Cria um novo catálogo (primeiro precisa adicionar o Livro de exemplo)
 *     parameters:
 *       - name: tipo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           enum: [COLECAO, DESAFIO]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Catalogo'
 *     responses:
 *       201:
 *         description: Catálogo criado com sucesso
 *
 * /catalogos/{tipo}/{tema}:
 *   get:
 *     tags: [Catalogos]
 *     summary: Retorna um catálogo específico pelo tema
 *     parameters:
 *       - name: tipo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           enum: [COLECAO, DESAFIO]
 *       - name: tema
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catálogo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Catalogo'
 *       404:
 *         description: Catálogo não encontrado
 *   put:
 *     tags: [Catalogos]
 *     summary: Atualiza um catálogo pelo tema
 *     parameters:
 *       - name: tipo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           enum: [COLECAO, DESAFIO]
 *       - name: tema
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Catalogo'
 *     responses:
 *       200:
 *         description: Catálogo atualizado com sucesso
 *       404:
 *         description: Catálogo não encontrado
 *   delete:
 *     tags: [Catalogos]
 *     summary: Remove um catálogo pelo tema
 *     parameters:
 *       - name: tipo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           enum: [COLECAO, DESAFIO]
 *       - name: tema
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catálogo removido com sucesso
 *       404:
 *         description: Catálogo não encontrado
 *
 * components:
 *   schemas:
 *     Livro:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           example: "A Moreninha"
 *         autor:
 *           type: string
 *           example: "Joaquim Manuel de Macedo"
 *         dataPublicacao:
 *           type: string
 *           example: "1844-07-01T10:00:00.000Z"
 *         paginas:
 *           type: integer
 *           example: 192
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Romantismo", "Literatura Brasileira", "Juventude"]
 *         estrelas:
 *           type: number
 *           example: 5
 *         capaUrl:
 *           type: string
 *           example: "https://m.media-amazon.com/images/I/41De8JcIdYL._SY445_SX342_PQ80_.jpg"
 *     LivroNoCatalogo:
 *       type: object
 *       properties:
 *         idLivro:
 *           type: string
 *           example: "A Moreninha"
 *         livros:
 *           $ref: '#/components/schemas/Livro'
 *     Catalogo:
 *       type: object
 *       properties:
 *         tema:
 *           type: string
 *           example: "Obras 1900"
 *         descricao:
 *           type: string
 *           example: "Obras do século XIX que representam o movimento realista no Brasil."
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Realismo", "Literatura Brasileira"]
 *         curtidas:
 *           type: integer
 *           example: 120
 *         tipo:
 *           type: string
 *           enum: [COLECAO, DESAFIO]
 *           example: "COLECAO"
 *         privado:
 *           type: boolean
 *           example: false
 *         emailDono:
 *           type: string
 *           example: "joao@email.com"
 *         livros:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/LivroNoCatalogo'
 */
