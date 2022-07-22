
import routerx from 'express-promise-router';
import usuarioController from '../controllers/usuarioController';
import auth from '../middlewares/auth';


const router=routerx();


router.get('/query',auth.verifysuperAdministrador,usuarioController.query);
router.get('/list',auth.verifysuperAdministrador,usuarioController.list);
router.put('/update',auth.verifysuperAdministrador,usuarioController.update);
router.delete('/remove',auth.verifysuperAdministrador,usuarioController.remove);
router.put('/activate',auth.verifysuperAdministrador,usuarioController.activate);
router.put('/deactivate',auth.verifysuperAdministrador,usuarioController.deactivate);
router.post('/add',auth.verifysuperAdministrador,usuarioController.add);
router.post('/login',usuarioController.login);

export default router;
