import { Router } from 'express';
import { getAllCatalogoController,getCatalogoByNomeController, createCatalogoController,updateCatalogoController,deleteCatalogoController } from '../controllers/catalogo.controller';
const router = Router();
router.get('/:tipo', getAllCatalogoController);
router.get('/:tipo/:tema', getCatalogoByNomeController);
router.post('/:tipo', createCatalogoController);
router.put('/:tipo/:tema',updateCatalogoController);
router.delete('/:tipo/:tema',deleteCatalogoController);

export default router;
