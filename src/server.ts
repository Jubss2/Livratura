import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import livroRoutes from './routes/livro.route';
import authRoutes from './routes/auth.route';
import { authMiddleware } from './middleware/auth.middleware';

const app = express();

app.use(express.json());
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Livratura API',
            version: '1.0.0',
            description: 'API para gerenciar dados na aplicação Livratura',
        },
    },
    apis: ['./src/schemas/*.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec), swaggerUi.setup(swaggerSpec));

app.use('/livros', authMiddleware, livroRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });