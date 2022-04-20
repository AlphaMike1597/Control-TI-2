import mongoose,{Schema} from 'mongoose';

const personalSchema = new Schema({
    nombre_completo:{type:String, maxlength:100,unique:true,required:true},
    puesto:{type:String,maxlength:100,unique:true,required:true},
    empresa_id:{type: Schema.ObjectId, ref:'empresa'},
    proyecto_id:{type: Schema.ObjectId, ref:'proyecto'},
    departamento_id:{type: Schema.ObjectId,ref:'departamento'},
    estatus:{type: String,maxlength:50, unique:true, required:true,}

});

const personal = mongoose.model('personal',personalSchema);

export default personal ;