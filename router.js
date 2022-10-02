const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req,res)=>{
    res.render('index');
})

// RUTAS STORAGE - INVENTARIO
{
router.get('/storage', (req,res)=>{
    conexion.query('SELECT * FROM productos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('storage',{results:results});
        }
    })
})

router.get('/storage/add', (req,res)=>{
    res.render('storageadd');
})

router.get('/storage/update/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM productos WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('storageupdate',{product:results[0]});
        }
    })
})

router.get('/storage/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM productos WHERE id = ?', [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/storage')
        }
    })
})
}

// RUTAS EMPLOYES - EMPLEADOS
{
router.get('/employes', (req,res)=>{
    conexion.query('SELECT * FROM empleados', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('employee',{results:results});
        }
    })
})

router.get('/employes/add', (req,res)=>{
    res.render('employeeadd');
})

router.get('/employes/update/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM empleados WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('employeeupdate',{employee:results[0]});
        }
    })
})

router.get('/employes/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM empleados WHERE id = ?', [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/employes')
        }
    })
})
}

// RUTAS SUPPLIERS - PROVEEDORES

router.get('/supplier', (req,res)=>{
    conexion.query('SELECT * FROM proveedores', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('supplier',{results:results});
        }
    })
})

router.get('/supplier/add', (req,res)=>{
    res.render('supplierAdd');
})

router.get('/supplier/update/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM proveedores WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('supplierupdate',{supplier:results[0]});
        }
    })
})

router.get('/supplier/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM proveedores WHERE id = ?', [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/supplier')
        }
    })
})


const crud = require('./controllers/crud');
router.post('/storageadd', crud.saveStorage);
router.post('/storageupdate', crud.updateStorage);

router.post('/employeeadd', crud.saveEmployee);
router.post('/employeeupdate', crud.updateEmployee);

router.post('/supplieradd', crud.saveSupplier);
router.post('/supplierupdate', crud.updateSupplier);

module.exports = router