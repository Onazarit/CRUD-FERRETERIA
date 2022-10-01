const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ferreteria'
});

conexion.connect((error)=>{
    if(error){
        throw error;
    }

    console.log('Conexion Exitosa a la DB');
})

module.exports = conexion;