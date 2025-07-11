import { Router } from 'express';
import {getAllGrupoDeLeiturasController, getGrupoDeLeituraByTituloController, createGrupoDeLeituraController, updateGrupoDeLeituraController, deleteGrupoDeLeituraController} from '../controllers/grupoDeLeitura.controller';
const router = Router();
router.get('/', getAllGrupoDeLeiturasController);
router.get('/:nome', getGrupoDeLeituraByTituloController);
router.post('/', createGrupoDeLeituraController);
router.put('/:nome',updateGrupoDeLeituraController);
router.delete('/:nome',deleteGrupoDeLeituraController);

export default router;
