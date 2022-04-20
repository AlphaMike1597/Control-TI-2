import routerx from 'express-promise-router';
import equipoController from '../controllers/equipoController';


const router=routerx();

router.post('/add',equipoController.add);
router.get('/query',equipoController.query);
router.get('/list',equipoController.list);
router.put('/update',equipoController.update);
router.delete('/remove',equipoController.remove);
router.put('/activate',equipoController.activate);
router.put('/deactivate',equipoController.deactivate);

export default router;

