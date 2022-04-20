import routerx from 'express-promise-router';
import departamentoController from '../controllers/departamentoController';


const router=routerx();

router.post('/add',departamentoController.add);
router.get('/query',departamentoController.query);
router.get('/list',departamentoController.list);
router.put('/update',departamentoController.update);
router.delete('/remove',departamentoController.remove);
router.put('/activate',departamentoController.activate);
router.put('/deactivate',departamentoController.deactivate);

export default router;
