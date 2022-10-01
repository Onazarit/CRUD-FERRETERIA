const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req,res)=>{
    res.render('index');
})

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

module.exports = router