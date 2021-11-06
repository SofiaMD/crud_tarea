import conexion from "../database/database.js";

export const save = async (req, res)=>{
 
    const nombre = req.body.nombresAlumno;
    const apellido = req.body.apellidosAlumno;
    const telefono = req.body.telefonoAlumno;
    const direccion = req.body.direccionAlumno;
    const carrera = req.body.idcarrera
    console.log(nombre, apellido, telefono, direccion);
    
    conexion.query('INSERT INTO alumno SET ?', {nombresAlumno:nombre, apellidosAlumno:apellido, telefonoAlumno:telefono, direccionAlumno:direccion, idcarrera:carrera}, (err, result) => {
        if (err){
            console.log('Ocurrio un error, no se puede guardar un alumno')
        }else{
        res.redirect('/')
    }
    })
};

//Guardar Carrera
export const saveCarrera = async (req, res)=>{
 
    const nombre = req.body.nombreCarrera;
    const duracion = req.body.duracionCarrera;
    
    
    conexion.query('INSERT INTO carrera SET ?', {nombreCarrera:nombre, duracionCarrera:duracion}, (err, result) => {
        if (err){
            console.log('Ocurrio un error, no se puede guardar una carrera')
        }else{
        res.redirect('/')
    }
    })
};

//editar alumno
export const edit = async (req, res)=>{
 
    const id = req.body.idalumno;
    const nombre = req.body.nombresAlumno;
    const apellido = req.body.apellidosAlumno;
    const telefono = req.body.telefonoAlumno;
    const direccion = req.body.direccionAlumno;
    const carrera = req.body.idcarrera
    console.log(id, nombre, apellido, telefono, direccion);
    
    conexion.query('UPDATE alumno SET  ? WHERE idalumno = ?', [{nombresAlumno:nombre, apellidosAlumno:apellido, telefonoAlumno:telefono, direccionAlumno:direccion, idcarrera:carrera},id], (err, result) => {
        if (err){
            console.log('Error al editar el alumno')
        }else{
        res.redirect('/')
    }
    })
}


//Editar carrera
export const editCarrera = async (req, res)=>{
 
    const id = req.body.idcarrera;
    const nombre = req.body.nombreCarrera;
    const duracion = req.body.duracionCarrera;
    console.log(id, nombre, duracion);
    
    conexion.query('UPDATE carrera SET  ? WHERE idcarrera = ?', [{nombreCarrera:nombre, duracionCarrera:duracion},id], (err, result) => {
        if (err){
            console.log('Error al editar la carrera')
        }else{
        res.redirect('/indexCarrera')
    }
    })
}



