import routerx from 'express-promise-router';
import asignacionController from '../controllers/asignacionController';


const router=routerx();

router.post('/add',asignacionController.add);
router.get('/query',asignacionController.query);
router.get('/list',asignacionController.list);
router.put('/update',asignacionController.update);
router.delete('/remove',asignacionController.remove);
router.put('/activate',asignacionController.activate);
router.put('/deactivate',asignacionController.deactivate);

export default router;
