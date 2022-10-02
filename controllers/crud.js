const conexion = require('../database/db');

exports.saveStorage = (req, res)=>{
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const cantidad = req.body.cantidad;
    const precio_unitario = req.body.precio_unitario;
    conexion.query('INSERT INTO productos SET ?',{nombre:nombre, marca:marca, cantidad:cantidad, precio_unitario:precio_unitario}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/storage')
        }
    })
}

exports.updateStorage = (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const cantidad = req.body.cantidad;
    const precio_unitario = req.body.precio_unitario;
    conexion.query('UPDATE productos SET ? WHERE id = ?', [{nombre:nombre, marca:marca, cantidad:cantidad, precio_unitario:precio_unitario}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/storage')
        }
    })
}

exports.saveEmployee = (req, res)=>{
    const puesto = req.body.puesto;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const fecha_de_nacimiento = req.body.fecha_de_nacimiento;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    const contraseña = req.body.contraseña;
    conexion.query('INSERT INTO empleados SET ?',{puesto:puesto, nombre:nombre, apellidos:apellidos, fecha_de_nacimiento:fecha_de_nacimiento, email:email, telefono:telefono, direccion:direccion, contraseña:contraseña}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/employes')
        }
    })  
}

exports.updateEmployee = (req, res)=>{
    const id = req.body.id;
    const puesto = req.body.puesto;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const fecha_de_nacimiento = req.body.fecha_de_nacimiento;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;
    conexion.query('UPDATE empleados SET ? WHERE id = ?',[{puesto:puesto, nombre:nombre, apellidos:apellidos, fecha_de_nacimiento:fecha_de_nacimiento, email:email, telefono:telefono, direccion:direccion}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/employes')
        }
    })  
}

// SUPPLIER - PROVEEDORES

exports.saveSupplier = (req, res)=>{
    const nombre = req.body.nombre;
    const folio = req.body.folio;
    const marca = req.body.marca;
    const email = req.body.email;
    const telefono = req.body.telefono;
    conexion.query('INSERT INTO proveedores SET ?',{nombre:nombre, folio:folio, marca:marca, email:email, telefono:telefono}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/supplier')
        }
    })  
}

exports.updateSupplier = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const folio = req.body.folio;
    const marca = req.body.marca;
    const email = req.body.email;
    const telefono = req.body.telefono;
    conexion.query('UPDATE proveedores SET ? WHERE id = ?',[{nombre:nombre, folio:folio, marca:marca, email:email, telefono:telefono}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/supplier')
        }
    })  
}

// SERVICE - SERVICIOS

exports.saveService = (req, res)=>{
    const id_empleado = req.body.id;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const producto = req.body.producto;
    const marca = req.body.marca;
    const cantidad = req.body.cantidad;
    const precio_unitario = req.body.precio_unitario;
    conexion.query('INSERT INTO servicios SET ?',{id_empleado:id_empleado,nombre:nombre, direccion:direccion, telefono:telefono, producto:producto, marca:marca, cantidad:cantidad, precio_unitario:precio_unitario}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/services')
        }
    })  
}

exports.updateService = (req, res)=>{
    const folio = req.body.folio;
    const id_empleado = req.body.id;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const producto = req.body.producto;
    const marca = req.body.marca;
    const cantidad = req.body.cantidad;
    const precio_unitario = req.body.precio_unitario;
    conexion.query('UPDATE servicios SET ? WHERE folio = ?',[{id_empleado:id_empleado,nombre:nombre, direccion:direccion, telefono:telefono, producto:producto, marca:marca, cantidad:cantidad, precio_unitario:precio_unitario}, folio], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/services')
        }
    })  
}

exports.login = (req,res)=>{
    const email = req.body.email;
    const contraseña = req.body.contraseña;
    conexion.query('SELECT * FROM empleados WHERE email = ?',[email], (error,results)=>{
        if(error){
            console.log('correo no detectado');
        }else{
            if(results[0] == undefined){
                console.log('correo invalido');
            }
            else{
                if(results[0].contraseña == contraseña)
                    res.redirect('/')
                else
                    console.log('contraseña incorrecta');
            }
        }
    })
}