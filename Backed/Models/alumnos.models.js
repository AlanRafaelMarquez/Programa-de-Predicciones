import {schma, model} from 'mongose'
const Esqueleto_de_tabla_Alumnos = chema({
    alumno : String,
    materias : String,
    calificacionPM : Number,
    asistencia : Number,
    promedio : Number,
    grado : Number
})

export const Tabla =  model("Tabla de Alumnos",Esqueleto_de_tabla)
