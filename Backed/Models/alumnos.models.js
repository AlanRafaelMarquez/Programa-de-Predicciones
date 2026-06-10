import {Schema, model} from 'mongoose'
const Esqueleto_de_tabla_Alumnos = Schema({
    alumno : String,
    materias : String,
    calificacionPM : Number,
    asistencia : Number,
    promedio : Number,
    grado : Number
})

export const Tabla = new model("Tabla de Alumnos",Esqueleto_de_tabla_Alumnos)
