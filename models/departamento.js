import mongoose,{Schema} from 'mongoose';

const departamentoSchema = new Schema({
    nombre:{type:String, maxlength:100,unique:true,required:true},
    estatus:{type:String, maxlength: 50, unique: true, required: true},
    empresa_id:{type: Schema.ObjectId, ref:'empresa'},

});

const departamento = mongoose.model('departamento',departamentoSchema);

export default departamento ;