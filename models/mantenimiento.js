import mongoose,{Schema} from 'mongoose';

const mantenimientoSchema = new Schema({
    equipo_id:{type: Schema.ObjectId, ref:'equipo'},
    asignacion_id:{type: Schema.ObjectId, ref:'asignacion'},
    tecnico:{type:String, maxlength:100,unique:true,required:true},
    fecha_ultimo_mantenimiento:{type:Date},
    fecha_mantenimiento:{type:Date},
    comentarios:{type:String,maxlength:100,unique:true,required:true},
    evidencia:{type:String, maxlength:100,unique:true,required:true},
    estatus:{type:String,maxlength:100,unique:true,required:true},
    elaborado_por:{type:String, maxlength:100,unique:true,required:true},
    created_at:{type:Date, default:Date.now},

});

const mantenimiento = mongoose.model('mantenimiento',mantenimientoSchema);

export default mantenimiento ;