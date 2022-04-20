import routerx from 'express-promise-router';
import personalController from '../controllers/personalController';


const router=routerx();

router.post('/add',personalController.add);
router.get('/query',personalController.query);
router.get('/list',personalController.list);
router.put('/update',personalController.update);
router.delete('/remove',personalController.remove);
router.put('/activate',personalController.activate);
router.put('/deactivate',personalController.deactivate);

export default router;
