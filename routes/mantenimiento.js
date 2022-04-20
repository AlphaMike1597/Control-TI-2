import routerx from 'express-promise-router';
import mantenimientoController from '../controllers/mantenimientoController';


const router=routerx();

router.post('/add',mantenimientoController.add);
router.get('/query',mantenimientoController.query);
router.get('/list',mantenimientoController.list);
router.put('/update',mantenimientoController.update);
router.delete('/remove',mantenimientoController.remove);
router.put('/activate',mantenimientoController.activate);
router.put('/deactivate',mantenimientoController.deactivate);

export default router;
