import express from 'express';
import livroRoutes from './routes/livro.route';
const app = express();
app.use(express.json());
app.use('/livros', livroRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });