/**
 * @openapi
 * /gruposDeLeitura:
 *   get:
 *     tags: [GruposDeLeitura]
 *     summary: Lista todos os Grupos de Leitura
 *     responses:
 *       200:
 *         description: Lista dos Grupos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/grupoDeLeitura'
 *   post:
 *     tags: [GruposDeLeitura]
 *     summary: Adiciona novo Grupo de Leitura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/grupoDeLeitura'
 *     responses:
 *       201:
 *         description: Grupo de leitura criado
 *
 * /gruposDeLeitura/{nome}:
 *   get:
 *     tags: [GruposDeLeitura]
 *     summary: Busca um grupo de leitura pelo título
 *     parameters:
 *       - name: nome
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Grupo de leitura encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/grupoDeLeitura'
 *       404:
 *         description: Grupo de leitura não encontrado
 *   put:
 *     tags: [GruposDeLeitura]
 *     summary: Atualiza um grupo de leitura pelo seu título
 *     parameters:
 *       - name: nome
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Título do grupo de leitura que será atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/grupoDeLeitura'
 *     responses:
 *       200:
 *         description: Grupo de leitura atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/grupoDeLeitura'
 *       404:
 *         description: Grupo de leitura não encontrado
 * 
 *   delete:
 *     tags: [GruposDeLeitura]
 *     summary: Apaga um grupo de leitura pelo seu nome
 *     parameters:
 *       - name: nome
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: grupo de leitura apagado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/grupoDeLeitura'
 *       404:
 *         description: Grupo de leitura não encontrado
 * 
 * components:
 *   schemas:
 *     grupoDeLeitura:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           example: Melhor clube Machadiano
 *         dataCriacao:
 *           type: string
 *           example: 05/04/2024
 *         dataEncontro: 
 *            type: string
 *            examplo: 02/06/2025
 *         tituloLivro:
 *            type: string
 *            example: O Alienista
 *         
 */
