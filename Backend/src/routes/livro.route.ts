import { Router } from 'express';
import {getAllLivrosController, getLivroByTituloController, createLivroController, updateLivroController, deleteLivroController} from '../controllers/livro.controller';
const router = Router();
router.get('/', getAllLivrosController);
router.get('/:titulo', getLivroByTituloController);
router.post('/', createLivroController);
router.put('/:titulo',updateLivroController);
router.delete('/:titulo',deleteLivroController);

export default router;
