const mongoose = require('mongoose');

const EstudianteSchema = mongoose.Schema( {
   idUsuario: {
      type: Number,
      required: false
   },
    nombre: {
       type: String,
       required: false
    }
    
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);