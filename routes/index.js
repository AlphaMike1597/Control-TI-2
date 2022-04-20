import routerx from 'express-promise-router';
import empresaRouter from './empresa';
import proyectoRouter from './proyecto';
import tipoEquipoRouter from './tipoEquipo';
import baseRouter from './base';
import departamentoRouter from './departamento';
import equiposRouter from './equipo';
import asignacionRouter from './asignacion';
import mantenimientoRouter from './mantenimiento';


const router=routerx();

router.use('/empresa',empresaRouter);
router.use('/tipoequipo',tipoEquipoRouter);
router.use('/proyecto',proyectoRouter);
router.use('/base',baseRouter);
router.use('/departamento',departamentoRouter);
router.use('/equipos',equiposRouter);
router.use('/asignacion',asignacionRouter);
router.use('/mantenimiento',mantenimientoRouter);

export default router;