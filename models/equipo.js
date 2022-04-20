import mongoose,{Schema} from 'mongoose';

const equipoSchema = new Schema({
    empresa_id:{type: Schema.ObjectId, ref:'empresa'},
    proyecto_id:{type: Schema.ObjectId,ref:'proyecto'},
    base_id:{type: Schema.ObjectId,ref:'base'},
    departamento_id:{type: Schema.ObjectId, ref: 'departamento'},
    nombre:{type:String, maxlength:100,unique:true,required:true},
    facturado:{type:String, maxlength:100,unique:true,required:true},
    numero_serie:{type:String,maxlength:100,unique:true,required:true},
    modelo:{type:String, maxlength:100,unique:true,required:true},
    procesador:{type:String, maxlength:100,unique:true,required:true},
    almacenamiento:{type:String,maxlength:100,unique:true,required:true},
    garantia:{type:String, maxlength:100,unique:true,required:true},
    estatus:{type:Number,default:1},
    fecha_mantenimiento:{type:Date, required:true},
    marca:{type:String, maxlength:100,unique:true,required:true},
    memoria_ram:{type:String, maxlength:100,unique:true,required:true},
    direccion_mac:{type:String,maxlength:100,unique:true,required:true},
});

const equipo = mongoose.model('equipo',equipoSchema);

export default equipo ;