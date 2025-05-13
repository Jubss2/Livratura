import { Router } from 'express';
import {getAllLivrosController, getLivroByTituloController, createLivroController, updateLivroController, deleteLivroController} from '../controllers/livro.controller';
const router = Router();
router.get('/', getAllLivrosController);
router.get('/:nome', getLivroByTituloController);
router.post('/', createLivroController);
router.put('/:nome',updateLivroController);
router.delete('/:nome',deleteLivroController);

export default router;
