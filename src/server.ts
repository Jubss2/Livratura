import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import livroRoutes from './routes/livro.route';
const app = express();
app.use(express.json());
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Divindades API',
            version: '1.0.0',
            description: 'API para gerenciar dados na aplicação Livratura',
        },
    },
    apis: ['./src/schemas/*.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/livros', livroRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });