import { Tabla } from "../models/alumnos.models.js";

Tabla.create({
    alumno : "Alan",
    materias : "Macing Learning",
    calificacionPM : 10,
    asistencia : 90,
    promedio : 10,
    grado : 5
},
{
    alumno : "Alejandro",
    materias : "Tutorias",
    calificacionPM : 4,
    asistencia : 80,
    promedio : 6,
    grado : 5
},{
    alumno : "Gael",
    materias : "Proyecto integrado ",
    calificacionPM : 9,
    asistencia : 100,
    promedio : 10,
    grado : 5
},{
    alumno : "Oziel",
    materias : "Vision por computadora",
    calificacionPM : 9,
    asistencia : 70,
    promedio : 8,
    grado : 5
},
{
    alumno : "Valentin",
    materias : "Mineria de datos",
    calificacionPM : 10,
    asistencia : 100,
    promedio : 11,
    grado : 5
},{
    alumno : "Maria",
    materias : "Ciencias basicas",
    calificacionPM : 10,
    asistencia : 100,
    promedio : 10,
    grado : 5
},{
    alumno : "Cristi",
    materias : "Maching Learning",
    calificacionPM : 8,
    asistencia : 100,
    promedio : 9,
    grado : 5
},
{
    alumno : "Cristian",
    materias : "Tutorias",
    calificacionPM : 9,
    asistencia : 100,
    promedio : 9,
    grado : 5
},{
    alumno : "Alejandra",
    materias : "Proyecto integrado ",
    calificacionPM : 10,
    asistencia : 100,
    promedio : 10,
    grado : 5
},{
    alumno : "Hiram",
    materias : "Vision por Computadora",
    calificacionPM : 8,
    asistencia : 80,
    promedio : 9,
    grado : 5
}
)

export const Test = () => console.log("Llamar el controlador en app")
