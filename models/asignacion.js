import mongoose,{Schema} from 'mongoose';

const asignacionSchema = new Schema({
    empresa_id:{type: Schema.ObjectId, ref:'empresa'},
    proyecto_id:{type: Schema.ObjectId,ref:'proyecto'},
    base_id:{type: Schema.ObjectId,ref:'base'},
    departamento_id:{type: Schema.ObjectId, ref: 'departamento'},
    nombre:{type:String, maxlength:100,unique:true,required:true},
    observaciones:{type:String, maxlength:100,unique:true,required:true},
    firma_entrega:{type:String, maxlength:100,unique:true,required:true},
    firma_recibe:{type:String, maxlength:100,unique:true,required:true},
    creado_por:{type:String, maxlength:100,unique:true,required:true},
    fecha_asignacion:{type:Date,required:true},
    estatus:{type:Number,default:1}
});

const asignacion = mongoose.model('asignacion',asignacionSchema);

export default asignacion ;