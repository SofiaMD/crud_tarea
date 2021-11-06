import express from 'express';
import conexion from './database/database.js';
import {save, edit, saveCarrera, editCarrera} from "./controllers/crud.js";


const router = express.Router();



router.get('/', (req, res) => {
    
    conexion.query('SELECT * FROM alumno', (error, results) =>{

        if (error) {
            throw error;

        }else{
            res.render('index', {results:results});
          
        }
    })
})

router.get('/indexCarrera', (req, res) => {
    
    conexion.query('SELECT * FROM carrera', (error, results) =>{

        if (error) {
            throw error;

        }else{
            res.render('indexCarrera', {results:results});
          
        }
    })
})



//Crear rutas
router.get('/create', (req, res)=> {
    res.render('create');

})

router.get('/createCarrera', (req, res)=> {
    res.render('createCarrera');

})



//ruta para editar registros
router.get('/edit/:idalumno', (req, res) => {
    const idalumno= req.params.idalumno;
    conexion.query('SELECT * FROM alumno WHERE idalumno=?', [idalumno],(error, results) =>{

        if (error) {
            throw error;

        }else{
            res.render('edit', {alumno:results[0]});
           
          
        }
    })
})

//ruta para editar registros de carrera
router.get('/editCarrera/:idcarrera', (req, res) => {
    const idcarrera= req.params.idcarrera;
    conexion.query('SELECT * FROM carrera WHERE idcarrera=?', [idcarrera],(error, results) =>{

        if (error) {
            throw error;

        }else{
            res.render('editCarrera', {carrera:results[0]});
           
          
        }
    })
})

//ruta para eliminar registros de alumnos
router.get('/delete/:idalumno', (req, res) => {
    const idalumno= req.params.idalumno;
    conexion.query('DELETE FROM alumno WHERE idalumno=?', [idalumno],(error, results) =>{

        if (error) {
            throw error;

        }else{
            res.redirect('/');
           
          
        }
    })
})

//ruta para eliminar registros de carrera
router.get('/deleteCarrera/:idcarrera', (req, res) => {
    const idcarrera= req.params.idcarrera;
    conexion.query('DELETE FROM carrera WHERE idcarrera=?', [idcarrera],(error, results) =>{

        if (error) {
            throw error;

        }else{
            res.redirect('/');
           
          
        }
    })
})
//post para alumno
router.post('/edit', edit);
router.post('/save', save);
//Post para Carreras
router.post('/saveCarrera', saveCarrera);
router.post('/editCarrera', editCarrera);


export default router;