/**
 * @openapi
 * /livros:
 *   get:
 *     tags: [Livros]
 *     summary: Lista todos os livros
 *     responses:
 *       200:
 *         description: Lista dos Livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 *   post:
 *     tags: [Livros]
 *     summary: Adiciona novo livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       201:
 *         description: Livro criado
 *
 * /livros/{titulo}:
 *   get:
 *     tags: [Livros]
 *     summary: Busca um livro pelo titulo
 *     parameters:
 *       - name: titulo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 *   put:
 *     tags: [Livros]
 *     summary: Atualiza um livro pelo seu titulo
 *     parameters:
 *       - name: titulo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do livro que será atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       200:
 *         description: Livro atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 *   delete:
 *     tags: [Livros]
 *     summary: Apaga um livro pelo seu titulo
 *     parameters:
 *       - name: titulo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro apagado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 *
 * components:
 *   schemas:
 *     Livro:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           example: A Moreninha
 *         autor:
 *           type: string
 *           example: Joaquim Manuel de Macedo
 *         dataPublicacao:
 *           type: string
 *           example: 1844-07-01T10:00:00.000Z
 *         paginas:
 *           type: integer
 *           example: 192
 *         resumo:
 *           type: string
 *           example: Considerado o primeiro romance romântico brasileiro, A Moreninha narra a história do estudante Augusto, que jura nunca se apaixonar, mas muda de ideia ao conhecer a misteriosa Carolina durante uma visita a uma ilha. A obra explora o amor idealizado, com leveza e bom humor.
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Romantismo", "Literatura Brasileira", "Juventude"]
 *         estrelas:
 *           type: number
 *           format: float
 *           example: 4.3
 *         capaUrl:
 *           type: string
 *           example: https://m.media-amazon.com/images/I/41De8JcIdYL._SY445_SX342_PQ80_.jpg
 */
