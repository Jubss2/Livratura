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
 * /livros/{nome}:
 *   get:
 *     tags: [Livros]
 *     summary: Busca um livro pelo título
 *     parameters:
 *       - name: nome
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
 *     summary: Atualiza um livro pelo seu título
 *     parameters:
 *       - name: nome
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Título do livro que será atualizado
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
 * 
 *   delete:
 *     tags: [Livros]
 *     summary: Apaga um livro pelo seu título
 *     parameters:
 *       - name: nome
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
 *           example: Memórias póstumas de Brás Cubas
 *         autor:
 *           type: string
 *           example: Joaquim Maria Machado de Assis
 *         dataPublicacao:
 *           type: string
 *           example: 1881
 *         paginas:
 *           type: integer
 *           example: 368
 *         resumo:
 *           type: string
 *           example: Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria. Com essas palavras, o narrador de Memórias Póstumas de Brás Cubas resume a sua vida. O tom assumido na obra, bem como as técnicas empregadas na composição romanesca, são alguns dos fatores que justificam o lugar de Machado de Assis entre os maiores escritores do século XIX. Neste romance repleto de digressões filosóficas, o escritor se vale da posição privilegiada de Brás Cubas, que, como defunto autor, narra as suas desventuras e revela as contradições da sociedade brasileira do século XIX, por meio de uma análise aprofundada de seus personagens.
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example: ["CLássico", "Literatura Brasileira"]
 *         estrelas:
 *           type: number
 *           format: float
 *           example: 4.7
 */
